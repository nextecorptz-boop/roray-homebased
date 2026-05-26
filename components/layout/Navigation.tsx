'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useLanguage } from '@/context/LanguageContext';
import Button from '../ui/Button';
import { IMAGES } from '@/lib/images';

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
      className={`sticky top-0 z-40 transition-all duration-300 ${
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
            width={200}
            height={132}
            priority
            style={{ width: 'auto', height: '56px' }}
            className="brightness-0 invert"
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
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 shadow-xl border-t border-white/10"
          style={{ background: 'rgba(11,36,71,0.97)', backdropFilter: 'blur(8px)' }}
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-[13px] font-bold tracking-[0.08em] uppercase ${
                  pathname === link.href ? 'text-roray-green' : 'text-white/90'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile language toggle */}
            <div className="flex items-center gap-2 py-2 text-[13px] font-bold tracking-[0.08em]">
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
