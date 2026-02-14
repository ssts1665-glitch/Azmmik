'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

const navItems = [
  { href: '/dashboard', label: 'داشبورد' },
  { href: '/chat', label: 'چت' },
  { href: '/exams', label: 'آزمون‌ها' },
  { href: '/profile', label: 'پروفایل' },
  { href: '/blog', label: 'وبلاگ' },
  { href: '/about', label: 'درباره ما' }
];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="app-shell">
      <header className="app-header">
        <button style={{ all: 'unset', cursor: 'pointer' }}>☰</button>
        <strong>آزمیک</strong>
      </header>
      <div className="layout">
        <aside className="sidebar">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} style={{ display: 'block', marginBottom: 10, fontWeight: pathname === item.href ? 700 : 500 }}>
              {item.label}
            </Link>
          ))}
        </aside>
        <main className="content">{children}</main>
      </div>
    </div>
  );
}
