import PageHero from '@/components/ui/PageHero';
import ContactBlock from '@/components/sections/ContactBlock';
import FAQ from '@/components/sections/FAQ';
import EmergencyBand from '@/components/sections/EmergencyBand';
import { IMAGES } from '@/lib/images';

export const metadata = {
  title: 'Contact Us | Roray Homebased Medical Services',
  description: 'Get in touch with Roray Homebased for professional home healthcare in Dodoma. Available 24/7 for your medical needs.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero 
        title="Contact Us" 
        description="We are here to answer your questions and provide the support you need."
        imagePath={IMAGES.examRoom}
      />
      <ContactBlock />
      <FAQ />
      <EmergencyBand />
    </>
  );
}
