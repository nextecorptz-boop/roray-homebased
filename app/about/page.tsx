import PageHero from '@/components/ui/PageHero';
import AboutPreview from '@/components/sections/AboutPreview';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import ProcessSteps from '@/components/sections/ProcessSteps';
import { IMAGES } from '@/lib/images';

export const metadata = {
  title: 'Our Story | Roray Homebased Medical Services',
  description: 'Redefining healthcare delivery in Dodoma. Learn about our mission to bring clinical excellence and compassionate medical care to the comfort of your home.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero 
        title="About Roray Homebased" 
        description="Learn about our mission to redefine healthcare delivery in Dodoma."
        imagePath={IMAGES.consultation}
      />
      <AboutPreview />
      <WhyChooseUs />
      <ProcessSteps />
    </>
  );
}
