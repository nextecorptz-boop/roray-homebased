'use client';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';
import { IMAGES } from '@/lib/images';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

export default function TeamProfileSection() {
  const t = useTranslations('team');

  return (
    <>
      <section className="bg-white section-pad">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex items-center gap-4 mb-16"
          >
            <span className="w-12 h-px bg-roray-green"></span>
            <span className="text-[13px] font-bold tracking-[0.1em] uppercase text-roray-green">
              {t('section_label')}
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-0">
            {/* Image — 55% */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="w-full lg:w-[55%]"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden no-radius">
                <Image
                  src={IMAGES.drMande}
                  alt="Dr. Gertrude Mande, Medical Director, Roray Homebased Medical Services"
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-top"
                />
              </div>
            </motion.div>

            {/* Bio — 45% */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="w-full lg:w-[45%] bg-bone flex flex-col justify-center px-8 py-12 lg:px-16 lg:py-20"
            >
              <h2 className="font-display font-bold text-4xl md:text-5xl text-navy-deep mb-3">
                Dr. Gertrude Mande
              </h2>
              <p className="text-xl text-roray-green font-semibold mb-2">Medical Director</p>
              <p className="text-sm font-bold tracking-widest uppercase text-ink-muted mb-8">
                {t('credentials_label')}: MD, MPH
              </p>

              <div className="w-16 h-px bg-roray-green mb-8"></div>

              <div className="text-ink-soft leading-relaxed space-y-5 text-base mb-12">
                <p>
                  Dr. Gertrude Mande founded Roray Homebased Medical Services Ltd
                  with a deep passion for improving access to compassionate and
                  professional healthcare for patients who need medical support in
                  the comfort of their homes. Throughout her medical experience,
                  she witnessed many patients and families struggling after hospital
                  discharge — elderly patients, post-surgery patients, individuals
                  living with chronic illnesses, and patients requiring long-term
                  care often faced challenges accessing continuous professional
                  healthcare support outside the hospital environment. She recognized
                  that many families needed trusted medical professionals who could
                  provide quality care at home while preserving patient dignity,
                  comfort, and emotional wellbeing.
                </p>
              </div>

              <Button href="/book" variant="primary">
                {t('book_cta')}
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
