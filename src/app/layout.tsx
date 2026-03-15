import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AnimationProvider from '@/components/AnimationProvider';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'GymBuddy — Earn Your Freedom',
  description:
    'GymBuddy locks your most distracting apps until you prove you hit the gym. No excuses. Just results.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <AnimationProvider />
      </body>
    </html>
  );
}
