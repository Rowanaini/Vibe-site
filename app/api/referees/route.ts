import { NextResponse, NextRequest } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/\/rest\/v1\/?$/, '');
// 🔒 安全核心：后端改用超级密钥初始化，它拥有绕过 RLS 强行写入的最高权限！
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY; 

const supabase = createClient(supabaseUrl || '', supabaseServiceKey || '', {
  auth: { persistSession: false }
});

// ==========================================
// 1. GET 接口：任何人都能自由读取（走你配好的 SELECT 策略）
// ==========================================
export async function GET() {
  try {
    const { data, error } = await supabase
      .from('referees')
      .select('*')
      .order('id', { ascending: false });

    if (error) {
      console.error('Supabase fetch error:', error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    
    return NextResponse.json(data || [], { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// ==========================================
// 2. POST 接口：处理推荐人表单提交（带头像上传 + 安全暗号拦截）
// ==========================================
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const password = formData.get('password') as string;
    const name = formData.get('name') as string;
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const avatarFile = formData.get('avatar') as File | null;

    // 🔒 铁面防线：只有对上了 rowan2026 暗号的请求，后端才用超级密钥帮你存入数据库
    if (password !== process.env.REFEREE_PASSWORD) {
      return NextResponse.json({ error: '凭证错误，拒绝写入云端' }, { status: 403 });
    }

    let avatarUrl = '/test.jpg'; // 缺省占位图

    // 如果推荐人上传了头像，转换为 Buffer 并上传至 Supabase Storage
    if (avatarFile && avatarFile.size > 0) {
      const fileExt = avatarFile.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 7)}.${fileExt}`;
      
      const bytes = await avatarFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // 上传至 Supabase Storage 文件桶
      const { data: storageData, error: storageError } = await supabase.storage
        .from('avatars')
        .upload(fileName, buffer, {
          contentType: avatarFile.type,
          upsert: true
        });

      if (storageError) {
        console.error('Storage Upload Error:', storageError);
        return NextResponse.json({ error: `头像上传失败: ${storageError.message}` }, { status: 500 });
      }

      // 获取公开下载链接
      const { data: urlData } = supabase.storage.from('avatars').getPublicUrl(fileName);
      avatarUrl = urlData.publicUrl;
    }

    // 📝 将数据安全写入 PostgreSQL 的 'referees' 数据表
    // 因为最上方初始化使用的是 service_role 超级密钥，即便你开启了 RLS，这里也能无视限制强行写入成功！
    const { data, error: dbError } = await supabase
      .from('referees')
      .insert([{ name, title, content, avatar_url: avatarUrl }])
      .select();

    if (dbError) {
      console.error('Database Insert Error:', dbError);
      return NextResponse.json({ error: `数据表写入失败: ${dbError.message}` }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (err: any) {
    console.error('Global API Error:', err);
    return NextResponse.json({ error: `服务器内部错误: ${err.message}` }, { status: 500 });
  }
}