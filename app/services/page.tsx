import PageHero from '@/components/ui/PageHero';
import ServicesGrid from '@/components/sections/ServicesGrid';
import ContactBlock from '@/components/sections/ContactBlock';
import { IMAGES } from '@/lib/images';

export const metadata = {
  title: 'Medical Services | Roray Homebased Healthcare',
  description: 'Comprehensive clinical and supportive care delivered directly to your home in Dodoma. Home nursing, physiotherapy, elderly care, and more.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero 
        title="Our Services" 
        description="Comprehensive clinical and supportive care delivered directly to your home."
        imagePath={IMAGES.clinical}
      />
      <ServicesGrid />
      <ContactBlock />
    </>
  );
}
