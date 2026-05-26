'use client';
import { motion } from 'framer-motion';
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/animations';
import Eyebrow from '@/components/ui/Eyebrow';

const ROLES = [
  {
    title: 'Registered Nurses',
    desc: 'Licensed nurses delivering skilled home nursing, wound care, and medication management.',
    icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  },
  {
    title: 'Certified Caregivers',
    desc: 'Trained caregivers providing daily support, mobility assistance, and companionship.',
    icon: (
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    ),
  },
  {
    title: 'Licensed Physiotherapists',
    desc: 'Qualified physiotherapists restoring mobility and delivering rehabilitation programs.',
    icon: (
      <>
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="14" cy="18" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </>
    ),
  },
];

export default function RolesStrip() {
  return (
    <section className="section-pad bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={FADE_UP}>
            <Eyebrow light>Supporting Network</Eyebrow>
          </motion.div>
          <motion.h2
            variants={FADE_UP}
            className="font-display font-bold text-white text-3xl md:text-4xl mb-4"
          >
            Vetted Healthcare Professionals
          </motion.h2>
          <motion.p
            variants={FADE_UP}
            className="text-white/70 text-base leading-relaxed max-w-2xl mb-14"
          >
            Dr. Mande directs registered nurses, certified caregivers, and licensed
            physiotherapists who deliver care under Roray clinical protocols.
          </motion.p>
        </motion.div>

        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-3 gap-px bg-white/10"
        >
          {ROLES.map((role) => (
            <motion.div
              key={role.title}
              variants={FADE_UP}
              className="bg-navy p-8 border-l-4 border-roray-green no-radius"
            >
              <div className="w-10 h-10 border border-roray-greenlight flex items-center justify-center mb-5 no-radius">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1FA854"
                  strokeWidth="2"
                >
                  {role.icon}
                </svg>
              </div>
              <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-2">
                {role.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">{role.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
