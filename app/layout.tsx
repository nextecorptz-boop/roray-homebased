import type { Metadata } from 'next';
import { Cormorant_Garamond, Open_Sans } from 'next/font/google';
import './globals.css';
import UtilityBar from '@/components/layout/UtilityBar';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import { LanguageProvider } from '@/context/LanguageContext';
import TranslationsProvider from '@/components/providers/TranslationsProvider';
import PageTransition from '@/components/providers/PageTransition';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-opensans',
});

export const metadata: Metadata = {
  title: 'Roray Homebased Medical Services | Home Healthcare Dodoma, Tanzania',
  description:
    'Professional home nursing, elderly care, and medical support in Dodoma. Compassionate care delivered to your home by qualified medical staff.',
  openGraph: {
    title: 'Roray Homebased Medical Services',
    description: 'Home healthcare delivered with clinical excellence across Dodoma.',
    url: 'https://rorayhomebased.co.tz',
    siteName: 'Roray Homebased Medical Services',
    locale: 'en_TZ',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'MedicalBusiness'],
  name: 'Roray Homebased Medical Services Ltd',
  description:
    'Professional home nursing, elderly care, post-surgery recovery, and medical support services in Dodoma, Tanzania.',
  url: 'https://rorayhomebased.co.tz',
  telephone: '+255685095109',
  email: 'info@rorayhomebased.co.tz',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Makulu',
    addressLocality: 'Dodoma',
    addressCountry: 'TZ',
  },
  priceRange: '$$',
  medicalSpecialty: 'Home Healthcare',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  availableService: [
    'Skilled Home Nursing',
    'Elderly Care',
    'Post-Surgery Recovery',
    'Physiotherapy Support',
    'Palliative Care',
    'Chronic Disease Management',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${cormorant.variable} ${openSans.variable} font-body bg-bone-cool text-ink overflow-x-hidden antialiased`}
      >
        <LanguageProvider>
          <TranslationsProvider>
            <UtilityBar />
            <Navigation />
            <PageTransition>{children}</PageTransition>
            <Footer />
            <FloatingWhatsApp />
            <Analytics />
            <SpeedInsights />
          </TranslationsProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
