import PageHero from '@/components/ui/PageHero';
import BookingForm from '@/components/sections/BookingForm';
import { IMAGES } from '@/lib/images';

export const metadata = {
  title: 'Book a Consultation | Roray Homebased',
  description: 'Schedule a clinical assessment with Dr. Gertrude Mande and the Roray team to discuss your home healthcare requirements.',
};

export default function BookPage() {
  return (
    <>
      <PageHero 
        title="Book a Consultation" 
        description="Schedule an assessment with our clinical coordinators to discuss your care needs."
        imagePath={IMAGES.outreach}
      />
      <section className="bg-bone-warm py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <BookingForm />
        </div>
      </section>
    </>
  );
}
