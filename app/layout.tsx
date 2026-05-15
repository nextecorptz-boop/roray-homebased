import type { Metadata } from 'next';
import { Montserrat, Inter } from 'next/font/google';
import './globals.css';
import UtilityBar from '@/components/layout/UtilityBar';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import { SITE_INFO } from '@/lib/content';

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat'
});

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: `${SITE_INFO.name} | Professional Home Healthcare in Dodoma`,
  description: 'Professional home nursing, elderly care, and medical support across Dodoma, Tanzania.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${montserrat.variable} ${inter.variable} font-body bg-bone-cool text-ink overflow-x-hidden antialiased`}>
        <UtilityBar />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
