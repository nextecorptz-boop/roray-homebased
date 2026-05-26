'use client';
import { createContext, useContext, useSyncExternalStore } from 'react';

type Locale = 'en' | 'sw';

const STORAGE_KEY = 'roray_locale';

let _listeners: Array<() => void> = [];

function _getSnapshot(): Locale {
  if (typeof window === 'undefined') return 'en';
  const v = localStorage.getItem(STORAGE_KEY);
  return v === 'sw' ? 'sw' : 'en';
}

function _getServerSnapshot(): Locale {
  return 'en';
}

function _subscribe(listener: () => void): () => void {
  _listeners = [..._listeners, listener];
  return () => {
    _listeners = _listeners.filter((l) => l !== listener);
  };
}

function _setLocale(locale: Locale): void {
  localStorage.setItem(STORAGE_KEY, locale);
  _listeners.forEach((l) => l());
}

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: 'en',
  setLocale: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(_subscribe, _getSnapshot, _getServerSnapshot);

  return (
    <LanguageContext.Provider value={{ locale, setLocale: _setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  return useContext(LanguageContext);
}
