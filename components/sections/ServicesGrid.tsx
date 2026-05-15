import SectionHeader from '../ui/SectionHeader';
import ServiceCard from './ServiceCard';
import { SERVICES } from '@/lib/services';
import Button from '../ui/Button';

export default function ServicesGrid() {
  return (
    <section className="bg-bone-warm section-pad">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader 
          eyebrow="Our Medical Services"
          title="Comprehensive Care Plans"
          description="We deliver a full spectrum of clinical and supportive care directly to your home, ensuring continuity of care without the stress of hospital visits."
          centered
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button href="/services" variant="outline">View All Services</Button>
        </div>
      </div>
    </section>
  );
}
