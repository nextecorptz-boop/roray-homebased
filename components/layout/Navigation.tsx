'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useLanguage } from '@/context/LanguageContext';
import Button from '../ui/Button';
import { IMAGES } from '@/lib/images';
import { SITE_INFO } from '@/lib/content';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('nav');
  const { locale, setLocale } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('home'), href: '/' },
    { name: t('about'), href: '/about' },
    { name: t('services'), href: '/services' },
    { name: t('team'), href: '/team' },
    { name: t('contact'), href: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-2 shadow-lg'
          : 'py-4'
      }`}
      style={{
        background: 'rgba(11,36,71,0.97)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        <Link href="/">
          <Image
            src={IMAGES.logo}
            alt="Roray Homebased Medical Services"
            width={150}
            height={99}
            priority
            className="brightness-0 invert h-10 md:h-14 w-auto object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group relative text-[13px] font-bold tracking-[0.08em] uppercase transition-colors ${
                pathname === link.href ? 'text-roray-green' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-roray-green transition-all duration-300 ${
                  pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}

          {/* Language toggle */}
          <div className="flex items-center gap-1 text-[13px] font-bold tracking-[0.08em]">
            <button
              onClick={() => setLocale('en')}
              className={`transition-colors ${
                locale === 'en' ? 'font-bold text-white' : 'text-white/50 hover:text-white/80 cursor-pointer'
              }`}
            >
              EN
            </button>
            <span className="text-white/30">|</span>
            <button
              onClick={() => setLocale('sw')}
              className={`transition-colors ${
                locale === 'sw' ? 'font-bold text-white' : 'text-white/50 hover:text-white/80 cursor-pointer'
              }`}
            >
              SW
            </button>
          </div>

          <Button href="/book" variant="primary">
            {t('book')}
          </Button>
        </nav>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 shadow-xl border-t border-white/10"
          style={{ background: 'rgba(11,36,71,0.97)', backdropFilter: 'blur(8px)' }}
        >
          <div className="px-6 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-1 text-[13px] font-bold tracking-[0.08em] uppercase ${
                  pathname === link.href ? 'text-roray-green' : 'text-white/90'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile language toggle */}
            <div className="flex items-center gap-2 py-1 text-[13px] font-bold tracking-[0.08em]">
              <button
                onClick={() => setLocale('en')}
                className={locale === 'en' ? 'font-bold text-white' : 'text-white/50 cursor-pointer'}
              >
                EN
              </button>
              <span className="text-white/30">|</span>
              <button
                onClick={() => setLocale('sw')}
                className={locale === 'sw' ? 'font-bold text-white' : 'text-white/50 cursor-pointer'}
              >
                SW
              </button>
            </div>

            {/* Phone Numbers inside Mobile Menu */}
            <div className="flex flex-col gap-3 pt-3 border-t border-white/10 text-white/90 text-sm">
              <span className="text-[10px] font-bold tracking-wider uppercase text-gold">Call Immediate Care</span>
              <a href={`tel:${SITE_INFO.phoneClean}`} className="flex items-center gap-2 hover:text-roray-greenlight transition-colors py-0.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>{SITE_INFO.phone}</span>
              </a>
              <a href={`tel:${SITE_INFO.phoneSecondaryClean}`} className="flex items-center gap-2 hover:text-roray-greenlight transition-colors py-0.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>{SITE_INFO.phoneSecondary}</span>
              </a>
            </div>

            <Button
              href="/book"
              variant="primary"
              className="w-full mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('book')}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
