import { AppShell } from '@/components/app-shell';

export default function ExamsPage() {
  return (
    <AppShell>
      <h2>آزمون‌ها</h2>
      <p>نمایش آزمون‌های فعال کلاس دانش‌آموز، تایمر واقعی آزمون و نتایج تصحیح.</p>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr><th align="right">نام آزمون</th><th align="right">وضعیت</th><th align="right">نوع تصحیح</th></tr>
        </thead>
        <tbody>
          <tr><td>ریاضی ۱</td><td><span className="badge">فعال</span></td><td>اتوماتیک</td></tr>
          <tr><td>علوم ترکیبی</td><td><span className="badge">غیرفعال</span></td><td>دستی + اتوماتیک تستی</td></tr>
        </tbody>
      </table>
    </AppShell>
  );
}
