'use client';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { useTranslations } from 'next-intl';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';
import { IMAGES } from '@/lib/images';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

export default function AboutPreview() {
  const t = useTranslations('about');

  return (
    <section className="bg-white section-pad">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <SectionHeader
              eyebrow={t('section_label')}
              title={t('heading')}
              description={t('body')}
            />

            <p className="text-ink-soft mb-8 leading-relaxed">
              We understand that recovering or managing health conditions in a hospital environment can be stressful. By bringing skilled nursing, expert physiotherapy, and compassionate care directly to your doorstep, we promote faster healing, ensure dignity, and keep families together.
            </p>

            {/* Mission / Vision / Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-gray-200 border border-gray-200 mb-10">
              <div className="bg-white p-6">
                <div className="w-10 h-10 bg-roray-green flex items-center justify-center mb-4 no-radius">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-navy text-xs uppercase tracking-wider mb-2">Our Mission</h3>
                <p className="text-ink-soft text-sm leading-relaxed">
                  Accessible, compassionate home healthcare that improves patient wellbeing and quality of life.
                </p>
              </div>
              <div className="bg-white p-6">
                <div className="w-10 h-10 bg-accent-red flex items-center justify-center mb-4 no-radius">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-navy text-xs uppercase tracking-wider mb-2">Our Vision</h3>
                <p className="text-ink-soft text-sm leading-relaxed">
                  To become the leading trusted home healthcare provider in Tanzania.
                </p>
              </div>
              <div className="bg-white p-6">
                <div className="w-10 h-10 bg-navy flex items-center justify-center mb-4 no-radius">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-navy text-xs uppercase tracking-wider mb-2">Core Values</h3>
                <p className="text-ink-soft text-sm leading-relaxed">
                  Compassion · Professionalism · Respect · Integrity · Excellence
                </p>
              </div>
            </div>

            <Button href="/about" variant="primary">
              {t('cta')}
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <div className="absolute top-4 -left-4 w-full h-full border-2 border-roray-green z-0 no-radius hidden md:block"></div>
            <div className="relative z-10 bg-white p-2 no-radius">
              <div className="img-frame aspect-[4/5] w-full bg-bone">
                <Image
                  src={IMAGES.elderlyCare}
                  alt="Caregiver checking on bedridden elderly patient"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-navy-deep text-white p-8 max-w-[280px] z-20 no-radius shadow-xl hidden md:block border-b-4 border-roray-green">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-roray-green mb-4">
                <path strokeLinecap="square" strokeLinejoin="miter" d="M12 21a9 9 0 100-18 9 9 0 000 18z"></path>
                <path strokeLinecap="square" strokeLinejoin="miter" d="M12 8v4l3 3"></path>
              </svg>
              <p className="font-display font-bold text-xl mb-2">Around the Clock</p>
              <p className="text-sm text-gray-300">We are always ready to respond to your medical needs.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
