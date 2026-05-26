'use client';
import { NextIntlClientProvider } from 'next-intl';
import { useLanguage } from '@/context/LanguageContext';
import en from '@/messages/en.json';
import sw from '@/messages/sw.json';

const messages = { en, sw } as const;

export default function TranslationsProvider({ children }: { children: React.ReactNode }) {
  const { locale } = useLanguage();

  return (
    <NextIntlClientProvider locale={locale} messages={messages[locale]}>
      {children}
    </NextIntlClientProvider>
  );
}
