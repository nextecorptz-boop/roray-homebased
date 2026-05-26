'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { useTranslations } from 'next-intl';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';
import { IMAGES } from '@/lib/images';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

function useCountUp(target: number, duration: number, triggered: boolean): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [triggered, target, duration]);

  return value;
}

export default function AboutPreview() {
  const t = useTranslations('about');
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const staffCount = useCountUp(15, 1200, hasTriggered);
  const hourCount = useCountUp(24, 1200, hasTriggered);

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

            <div
              ref={statsRef}
              className="grid grid-cols-2 gap-8 mb-10 border-t border-gray-100 pt-8"
            >
              <div>
                <p className="font-display text-4xl font-bold text-navy-deep mb-2">
                  {staffCount}+
                </p>
                <p className="text-sm font-bold text-roray-green tracking-wider uppercase">
                  {t('stat_staff')}
                </p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold text-navy-deep mb-2">
                  {hourCount}/7
                </p>
                <p className="text-sm font-bold text-roray-green tracking-wider uppercase">
                  {t('stat_availability')}
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
