'use client';
import { motion, type Variants } from 'framer-motion';
import { useTranslations } from 'next-intl';
import SectionHeader from '../ui/SectionHeader';
import ServiceCard from './ServiceCard';
import { SERVICES } from '@/lib/services';
import Button from '../ui/Button';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function ServicesGrid() {
  const t = useTranslations('services');

  return (
    <section className="bg-bone-warm section-pad">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeader
            eyebrow={t('section_label')}
            title={t('heading')}
            description={t('subheading')}
            centered
            className="mb-16"
          />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          {SERVICES.map((service) => (
            <motion.div key={service.id} variants={fadeUp}>
              <ServiceCard
                {...service}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-16 text-center"
        >
          <Button href="/services" variant="outline">
            View All Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
