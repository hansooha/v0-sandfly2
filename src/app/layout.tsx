import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Layout from '@/components/Layout';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sandfly Security | 에이전트리스 Linux 보안',
  description: 'Linux를 위한 에이전트리스 EDR 및 클라우드 보안. 전체 Linux 인프라에 대한 능동적 위협 탐지 및 인시던트 대응.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
