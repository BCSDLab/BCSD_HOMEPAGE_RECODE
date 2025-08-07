import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BCSD',
  description: 'Build Communities, Share Dreams',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
