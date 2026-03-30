import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AnimationProvider from '@/components/AnimationProvider';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const APP_URL = 'https://gymbuddy.app';

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: 'GymBuddy | Lock Distractions. Earn Your Freedom.',
    template: '%s | GymBuddy',
  },
  description:
    'GymBuddy locks Instagram, TikTok, and games until you physically show up at the gym and submit proof. The #1 app accountability app for people who keep skipping workouts. Join the waitlist today.',
  keywords: [
    'gym accountability app',
    'app blocker gym',
    'workout motivation app',
    'lock apps until you workout',
    'fitness accountability',
    'screen time gym',
    'GymBuddy app',
    'block distracting apps',
    'gym proof app',
    'stop skipping gym',
    'fitness discipline app',
    'earn screen time',
  ],
  authors: [{ name: 'GymBuddy', url: APP_URL }],
  creator: 'GymBuddy',
  publisher: 'GymBuddy',
  category: 'Health & Fitness',
  applicationName: 'GymBuddy',
  referrer: 'origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: APP_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: APP_URL,
    siteName: 'GymBuddy',
    title: 'GymBuddy | Lock Distractions. Earn Your Freedom.',
    description:
      'GymBuddy locks Instagram, TikTok, and games until you physically prove you hit the gym. No excuses. Just results. Join the waitlist.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@gymbuddyapp',
    creator: '@gymbuddyapp',
    title: 'GymBuddy | Lock Distractions. Earn Your Freedom.',
    description:
      'Locks Instagram, TikTok, and games until you physically show up at the gym. No excuses. Just results.',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  verification: {
    google: 'google-site-verification-placeholder',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${APP_URL}/#website`,
      url: APP_URL,
      name: 'GymBuddy',
      description:
        'GymBuddy locks your most distracting apps until you prove you hit the gym.',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${APP_URL}/?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'MobileApplication',
      '@id': `${APP_URL}/#app`,
      name: 'GymBuddy',
      description:
        'GymBuddy locks Instagram, TikTok, and games until you physically show up at the gym and submit proof. The ultimate gym accountability app.',
      applicationCategory: 'HealthApplication',
      operatingSystem: 'iOS',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      url: APP_URL,
      image: `${APP_URL}/og-image.png`,
      publisher: {
        '@type': 'Organization',
        name: 'GymBuddy',
        url: APP_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${APP_URL}/Gymbuddy-logo.png`,
        },
      },
    },
    {
      '@type': 'Organization',
      '@id': `${APP_URL}/#organization`,
      name: 'GymBuddy',
      url: APP_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${APP_URL}/Gymbuddy-logo.png`,
        width: 512,
        height: 512,
      },
      sameAs: ['https://twitter.com/gymbuddyapp'],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <AnimationProvider />
      </body>
    </html>
  );
}
