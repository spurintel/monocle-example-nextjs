import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { MonocleProvider } from '@spur.us/monocle-nextjs';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Monocle NextJS Example',
  description:
    'Monocle is a free, lightweight, captcha-like JavaScript utility that passively identifies traffic from commercial VPNs, anonymizing datacenter proxies, and even residential proxies, while also delivering contextual risk insights to site owners.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MonocleProvider>
          <div className="flex h-screen max-w-screen-md mx-auto items-center justify-center">
            {children}
          </div>
        </MonocleProvider>
      </body>
    </html>
  );
}
