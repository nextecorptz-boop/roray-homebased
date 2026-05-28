'use client';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '@/lib/testimonials';
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/animations';
import Eyebrow from '@/components/ui/Eyebrow';

export default function TestimonialsGrid() {
  return (
    <section className="section-pad bg-bone-warm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <motion.div variants={FADE_UP} className="flex justify-center">
            <Eyebrow>Patient Stories</Eyebrow>
          </motion.div>
          <motion.h2
            variants={FADE_UP}
            className="font-display font-bold text-navy text-3xl md:text-5xl leading-tight mb-2"
          >
            Voices of Our Community.
          </motion.h2>
          <motion.p variants={FADE_UP} className="text-roray-green font-display text-xl">
            Sauti za Jamii Yetu.
          </motion.p>
        </motion.div>

        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 gap-6"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              variants={FADE_UP}
              className="bg-white border border-gray-200 border-l-4 border-l-roray-green p-8 relative no-radius"
            >
              {/* Language tag */}
              <div className="absolute top-6 right-6 bg-navy text-white font-display text-[10px] font-bold tracking-[0.15em] uppercase px-2 py-1 no-radius">
                {t.lang === 'en' ? 'EN' : 'SW'}
              </div>

              {/* Quote mark */}
              <div className="font-display text-7xl leading-none text-roray-green opacity-10 font-bold absolute top-4 left-6">
                &ldquo;
              </div>

              <p className="text-ink text-base leading-relaxed mb-6 relative z-10 italic font-light pt-4">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="pt-4 border-t border-gray-100">
                <div className="font-display font-bold text-navy text-base">{t.name}</div>
                <div className="text-ink-muted text-sm">{t.location}</div>
                <div className="inline-block mt-2 bg-roray-green text-white font-display text-[10px] font-bold tracking-[0.12em] uppercase px-3 py-1 no-radius">
                  {t.service}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
