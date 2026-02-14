'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const roleFields: Record<string, string> = {
  manager: 'کد مدرسه',
  teacher: 'کد مدرسه',
  student: 'کد کلاس'
};

export default function LoginPage() {
  const [role, setRole] = useState<'manager' | 'teacher' | 'student'>('student');
  const router = useRouter();

  return (
    <div className="login-page">
      <form className="card" onSubmit={(e) => { e.preventDefault(); router.push('/dashboard'); }}>
        <h1 style={{ marginTop: 0 }}>ورود به آزمیک</h1>
        <select className="select" value={role} onChange={(e) => setRole(e.target.value as 'manager' | 'teacher' | 'student')}>
          <option value="manager">مدیر</option>
          <option value="teacher">معلم</option>
          <option value="student">دانش‌آموز</option>
        </select>
        <input className="input" style={{ marginTop: 12 }} placeholder="نام کاربری" required />
        <input className="input" style={{ marginTop: 12 }} placeholder={roleFields[role]} required />
        <input className="input" style={{ marginTop: 12 }} placeholder="رمز عبور" type="password" required />
        <button className="button" style={{ marginTop: 14 }}>ورود</button>
        <p style={{ fontSize: 12, color: '#4b5563' }}>حساب ندارید؟ ثبت‌نام کنید.</p>
        <hr />
        <p style={{ marginBottom: 8 }}>ورود جداگانه ادمین</p>
        <input className="input" placeholder="نام کاربری ادمین" />
        <input className="input" style={{ marginTop: 8 }} type="password" placeholder="رمز عبور ادمین" />
      </form>
    </div>
  );
}
