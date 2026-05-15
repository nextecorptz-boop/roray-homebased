import Hero from '@/components/sections/Hero';
import TrustMarquee from '@/components/sections/TrustMarquee';
import AboutPreview from '@/components/sections/AboutPreview';
import ServicesGrid from '@/components/sections/ServicesGrid';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import ProcessSteps from '@/components/sections/ProcessSteps';
import TeamGrid from '@/components/sections/TeamGrid';
import TestimonialsGrid from '@/components/sections/TestimonialsGrid';
import EmergencyBand from '@/components/sections/EmergencyBand';
import ContactBlock from '@/components/sections/ContactBlock';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <AboutPreview />
      <ServicesGrid />
      <WhyChooseUs />
      <ProcessSteps />
      <TeamGrid />
      <TestimonialsGrid />
      <EmergencyBand />
      <ContactBlock />
    </>
  );
}
