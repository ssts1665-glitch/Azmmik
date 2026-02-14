import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Azmik',
  description: 'پلتفرم آزمون آنلاین آزمیـک'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
