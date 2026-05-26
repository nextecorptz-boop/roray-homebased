'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ACCORDION_CONTENT } from '@/lib/animations';
import Eyebrow from '@/components/ui/Eyebrow';

const FAQS = [
  {
    q: 'What areas in Dodoma do you serve? / Mnahudumia maeneo gani Dodoma?',
    a: 'We serve Dodoma City and surrounding areas including Makulu, Nzuguni, Chamwino, Bahi, Kondoa, and Mpwapwa. Call to confirm your location. / Tunahudumia Mji wa Dodoma na maeneo ya jirani kama Makulu, Nzuguni, Chamwino na mengine.',
  },
  {
    q: 'How quickly can a nurse visit? / Muuguzi anaweza kuja haraka kiasi gani?',
    a: 'Scheduled visits are confirmed within 2 hours during office hours (Mon\u2013Sat, 8am\u20136pm). Emergency response is available 24/7.',
  },
  {
    q: "Do I need a doctor's referral? / Ninahitaji rufaa ya daktari?",
    a: 'No referral needed for most services. Our team performs an initial phone assessment and designs a care plan from there.',
  },
  {
    q: 'What happens in a night emergency? / Dharura ya usiku inashughulikiwa vipi?',
    a: 'Call or WhatsApp +255 685 095 109 at any hour. Our emergency line is active 24 hours, 7 days a week including Sundays and holidays.',
  },
  {
    q: 'Can you care for bedridden patients? / Mnaweza kumhudumia mgonjwa aliyeandaliwa kitandani?',
    a: 'Yes. We specialize in care for bedridden patients including wound care, hygiene support, feeding assistance, and pressure sore prevention.',
  },
  {
    q: 'Are your nurses qualified? / Je, wauguzi wenu wana sifa?',
    a: 'All nurses and caregivers are licensed, registered, and vetted under the clinical direction of Dr. Gertrude Mande.',
  },
  {
    q: 'Are services available on weekends? / Huduma zinapatikana wikendi?',
    a: 'Office hours are Monday to Saturday, 8am\u20136pm. Emergency support is every day including Sundays and public holidays.',
  },
  {
    q: 'How much does a home visit cost? / Ziara ya nyumbani inagharimu kiasi gani?',
    a: 'Pricing depends on the service and visit frequency. Contact us for a free phone consultation and full pricing guide.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-pad bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="flex justify-center">
            <Eyebrow>FAQ</Eyebrow>
          </div>
          <h2 className="font-display font-bold text-navy text-3xl md:text-5xl mb-2">
            Common Questions.
          </h2>
          <p className="text-roray-green font-display text-xl">Maswali ya Kawaida.</p>
        </div>

        <div className="border border-gray-200 no-radius">
          {FAQS.map((faq, i) => (
            <div key={i} className="border-b border-gray-200 last:border-b-0">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center text-left px-6 py-5 hover:bg-bone transition-colors cursor-pointer"
              >
                <span className="font-display font-medium text-navy text-sm pr-8 leading-snug">
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="flex-shrink-0 w-8 h-8 border border-gray-300 flex items-center justify-center text-navy no-radius"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={ACCORDION_CONTENT}
                  >
                    <div className="px-6 pb-5 text-ink-soft text-sm leading-relaxed border-l-4 border-roray-green ml-0">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
