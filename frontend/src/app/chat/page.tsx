'use client';
import { AppShell } from '@/components/app-shell';
import { useState } from 'react';

const chats = [
  { id: 't-8922', title: 'گفتگو با معلم ریاضی', subtitle: 'کد چت: TCH-8922', members: 'علی رضایی ↔ خانم احمدی' },
  { id: 'admin-11', title: 'پشتیبانی ادمین', subtitle: 'چت با ادمین', members: 'علی رضایی ↔ ادمین سیستم' }
];

export default function ChatPage() {
  const [active, setActive] = useState(chats[0]);
  return (
    <AppShell>
      <h2>چت‌ها (سبک تلگرام)</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 16 }}>
        <div className="telegram-list">
          {chats.map((c) => (
            <div className="chat-row" key={c.id} onClick={() => setActive(c)}>
              <strong>{c.title}</strong>
              <div style={{ fontSize: 12, color: '#6b7280' }}>{c.subtitle}</div>
            </div>
          ))}
        </div>
        <section style={{ border: '1px solid #e5e7eb', borderRadius: 16, padding: 12 }}>
          <p><span className="badge">{active.subtitle}</span></p>
          <h3 style={{ marginTop: 8 }}>{active.title}</h3>
          <small>{active.members}</small>
          <div style={{ minHeight: 200, marginTop: 12, background: '#f8fafc', borderRadius: 12, padding: 8 }}>
            <p>سلام، سوال فصل سوم رو توضیح میدین؟</p>
            <p>بله، تا ۸ شب پاسخ کامل ارسال می‌کنم.</p>
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
            <input className="input" placeholder="پیام بنویسید..." />
            <button className="button" style={{ width: 120 }}>ارسال</button>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
