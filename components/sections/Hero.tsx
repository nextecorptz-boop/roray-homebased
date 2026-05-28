'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Button from '../ui/Button';
import { IMAGES } from '@/lib/images';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-24 md:py-32 overflow-hidden">
      {/* Background — desktop primary */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.04 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <Image
            src={IMAGES.heroMobile}
            alt="Home nurse consulting with patient"
            fill
            priority
            loading="eager"
            className="object-cover object-center md:hidden"
            sizes="100vw"
          />
          <Image
            src={IMAGES.heroMain}
            alt="Caring nurse attending to elderly patient at home"
            fill
            priority
            loading="eager"
            className="object-cover object-[30%_center] hidden md:block"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 hero-overlay-mobile md:hero-overlay" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.05, ease: 'easeOut' }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="w-12 h-px bg-roray-greenlight"></span>
            <span className="text-roray-greenlight text-[13px] font-bold tracking-[0.1em] uppercase">
              Roray Homebased Healthcare
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] md:leading-[1.05] tracking-tight mb-4"
          >
            {t('headline')}
          </motion.h1>

          {/* Animated green underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            style={{ originX: 0 }}
            className="h-0.5 bg-roray-green mb-6 w-full max-w-sm"
          />

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25, ease: 'easeOut' }}
            className="text-lg md:text-xl text-gray-200 mb-10 max-w-[90vw] sm:max-w-2xl leading-relaxed font-light"
          >
            {t('subheadline')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-3 mb-12"
          >
            <Button href="/book" variant="primary" className="w-full sm:w-auto">
              {t('cta_primary')}
            </Button>
            <Button href="/about" variant="outline" className="border-white text-white hover:bg-white hover:text-navy-deep w-full sm:w-auto">
              {t('cta_secondary')}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.5, ease: 'easeOut' }}
            className="flex items-center gap-4 text-white"
          >
            <div className="flex -space-x-4">
              <div className="w-12 h-12 no-radius border-2 border-navy-deep overflow-hidden relative">
                <Image src={IMAGES.elderlyCare} alt="Elderly care" fill className="object-cover" sizes="48px" loading="lazy" />
              </div>
              <div className="w-12 h-12 no-radius border-2 border-navy-deep overflow-hidden relative">
                <Image src={IMAGES.nursingCare} alt="Medical staff" fill className="object-cover" sizes="48px" loading="lazy" />
              </div>
              <div className="w-12 h-12 no-radius border-2 border-navy-deep overflow-hidden relative">
                <Image src={IMAGES.careExplanation} alt="Care consultation" fill className="object-cover" sizes="48px" loading="lazy" />
              </div>
            </div>
            <div className="text-sm">
              <p className="font-bold">Trusted by families</p>
              <p className="text-gray-300">Across Dodoma Region</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
