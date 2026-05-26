'use client';
import { motion, type Variants } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function ProcessSteps() {
  const steps = [
    {
      num: '01',
      title: 'Initial Consultation',
      desc: 'We assess the patient\'s condition, home environment, and specific medical requirements.',
    },
    {
      num: '02',
      title: 'Care Plan Design',
      desc: 'Our senior medical team develops a tailored clinical strategy in consultation with the family.',
    },
    {
      num: '03',
      title: 'Caregiver Assignment',
      desc: 'We match the patient with a highly qualified nurse or therapist suited to their exact needs.',
    },
    {
      num: '04',
      title: 'Ongoing Monitoring',
      desc: "Continuous evaluation, progress tracking, and regular updates to the patient's family.",
    },
  ];

  return (
    <section className="bg-white section-pad">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeader
            eyebrow="How It Works"
            title="A Structured Approach to Care."
            centered
            className="mb-20"
          />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-4 relative"
        >
          <div className="hidden lg:block absolute top-8 left-0 w-full h-px bg-gray-200 z-0"></div>

          {steps.map((step, idx) => (
            <motion.div key={idx} variants={fadeUp} className="relative z-10 lg:text-center pl-20 lg:pl-0">
              <div className="w-16 h-16 bg-bone border-2 border-roray-green flex items-center justify-center font-display font-bold text-xl text-navy-deep absolute left-0 top-0 lg:relative lg:mx-auto lg:mb-6 lg:top-auto lg:left-auto no-radius">
                {step.num}
              </div>
              <h4 className="font-display font-bold text-xl text-navy-deep mb-3 pt-1 md:pt-0">{step.title}</h4>
              <p className="text-ink-soft text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
