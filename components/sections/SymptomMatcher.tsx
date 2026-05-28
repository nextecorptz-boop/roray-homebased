'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP } from '@/lib/animations';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';

const OPTIONS = [
  {
    label: 'Elderly Support',
    labelSw: 'Msaada wa Mzee',
    service: 'Elderly Care',
    slug: '/services/elderly-care',
    desc: 'Daily health monitoring, mobility support, and compassionate companionship for elderly family members.',
  },
  {
    label: 'Post-Surgery',
    labelSw: 'Baada ya Upasuaji',
    service: 'Post-Surgery Recovery',
    slug: '/services/post-surgery-recovery',
    desc: 'Home monitoring, wound care, and rehabilitation support after a hospital procedure.',
  },
  {
    label: 'Chronic Illness',
    labelSw: 'Ugonjwa Sugu',
    service: 'Chronic Disease Management',
    slug: '/services/chronic-disease',
    desc: 'Ongoing monitoring and management for diabetes, hypertension, and stroke recovery.',
  },
  {
    label: 'Mobility Issues',
    labelSw: 'Matatizo ya Kutembea',
    service: 'Physiotherapy Support',
    slug: '/services/physiotherapy',
    desc: 'Mobility exercises, strength restoration, and rehabilitation at home.',
  },
  {
    label: 'End-of-Life Care',
    labelSw: 'Huduma ya Mwisho',
    service: 'Palliative Care',
    slug: '/services/palliative-care',
    desc: 'Comfort-focused care, pain monitoring, and emotional support for patient and family.',
  },
  {
    label: 'General Nursing',
    labelSw: 'Uuguzi wa Kawaida',
    service: 'Skilled Home Nursing',
    slug: '/services/home-nursing',
    desc: 'Medication, injections, wound dressing, and vital signs monitoring at home.',
  },
];

export default function SymptomMatcher() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="section-pad bg-bone">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <div className="flex justify-center">
            <Eyebrow>Find Your Service</Eyebrow>
          </div>
          <h2 className="font-display font-bold text-navy text-3xl md:text-5xl mb-3">
            What Does Your Family Need?
          </h2>
          <p className="text-roray-green font-display text-lg">
            Je, Familia Yako Inahitaji Nini?
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200 mb-8">
          {OPTIONS.map((opt, i) => (
            <button
              key={i}
              onClick={() => setSelected(selected === i ? null : i)}
              className={`p-6 lg:p-8 text-left transition-all duration-300 cursor-pointer no-radius ${
                selected === i ? 'bg-navy text-white' : 'bg-white text-navy hover:bg-bone'
              }`}
            >
              <div
                className={`font-display font-bold text-base uppercase tracking-wider mb-1 ${
                  selected === i ? 'text-white' : 'text-navy'
                }`}
              >
                {opt.label}
              </div>
              <div
                className={`font-display text-xs tracking-wider ${
                  selected === i ? 'text-roray-greenlight' : 'text-roray-green'
                }`}
              >
                {opt.labelSw}
              </div>
            </button>
          ))}
        </div>

        <AnimatePresence>
          {selected !== null && (
            <motion.div
              key={selected}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={FADE_UP}
              className="bg-navy text-white p-8 md:p-12 border-l-4 border-roray-green no-radius"
            >
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-8">
                  <div className="font-display text-[10px] tracking-[0.25em] uppercase text-roray-greenlight mb-2">
                    Recommended Service
                  </div>
                  <h3 className="font-display font-bold text-white text-2xl md:text-3xl mb-4">
                    {OPTIONS[selected].service}
                  </h3>
                  <p className="text-white/75 text-base leading-relaxed">
                    {OPTIONS[selected].desc}
                  </p>
                </div>
                <div className="md:col-span-4 flex flex-col gap-3">
                  <Button variant="primary" href={OPTIONS[selected].slug}>
                    Learn More
                  </Button>
                  <Button
                    variant="outline"
                    href="/book"
                    className="border-white text-white hover:bg-white hover:text-navy"
                  >
                    Book This Service
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
