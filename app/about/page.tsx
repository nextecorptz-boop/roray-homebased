import PageHero from '@/components/ui/PageHero';
import AboutPreview from '@/components/sections/AboutPreview';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import ProcessSteps from '@/components/sections/ProcessSteps';
import TestimonialsGrid from '@/components/sections/TestimonialsGrid';
import EmergencyBand from '@/components/sections/EmergencyBand';
import { IMAGES } from '@/lib/images';

export const metadata = {
  title: 'About Roray Homebased Medical Services | Dodoma, Tanzania',
  description: 'Redefining healthcare delivery in Dodoma. Learn about our mission to bring clinical excellence and compassionate medical care to the comfort of your home.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Roray Homebased Medical Services"
        description="Learn about our mission to redefine healthcare delivery in Dodoma."
        imagePath={IMAGES.elderlyCare}
      />
      <AboutPreview />
      <WhyChooseUs />
      <ProcessSteps />
      <TestimonialsGrid />
      <EmergencyBand />
    </>
  );
}
