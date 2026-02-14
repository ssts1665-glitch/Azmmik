import { AppShell } from '@/components/app-shell';

export default function DashboardPage() {
  return (
    <AppShell>
      <h2>داشبورد</h2>
      <p>سامانه مدیریت آزمون آنلاین با نقش‌های مدیر، معلم، دانش‌آموز و ادمین.</p>
      <ul>
        <li>اطلاعیه‌ها (فقط ادمین امکان ثبت)</li>
        <li>کانال مدرسه (فقط معلم ارسال می‌کند)</li>
        <li>بخش کلاس آنلاین: در حال توسعه + تایمر کلاس بعدی</li>
      </ul>
    </AppShell>
  );
}
