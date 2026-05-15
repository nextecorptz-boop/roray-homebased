'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Button from '../ui/Button';
import { IMAGES } from '@/lib/images';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        <Link href="/">
          <Image 
            src={IMAGES.logo} 
            alt="Roray Homebased Medical Services" 
            width={200} 
            height={132} 
            priority 
            style={{ width: 'auto', height: '64px' }}
          />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={`text-[13px] font-bold tracking-[0.08em] uppercase transition-colors ${pathname === link.href ? 'text-roray-green' : 'text-navy hover:text-roray-green'}`}>
              {link.name}
            </Link>
          ))}
          <Button href="/book" variant="primary">Book Consultation</Button>
        </nav>

        <button className="md:hidden text-navy p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)} 
                className={`block py-2 text-[13px] font-bold tracking-[0.08em] uppercase ${pathname === link.href ? 'text-roray-green' : 'text-navy'}`}
              >
                {link.name}
              </Link>
            ))}
            <Button href="/book" variant="primary" className="w-full mt-4" onClick={() => setMobileMenuOpen(false)}>Book Consultation</Button>
          </div>
        </div>
      )}
    </header>
  );
}
