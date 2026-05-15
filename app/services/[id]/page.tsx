import { notFound } from 'next/navigation';
import { SERVICES } from '@/lib/services';
import PageHero from '@/components/ui/PageHero';
import ContactBlock from '@/components/sections/ContactBlock';
import Button from '@/components/ui/Button';
import { Icons, IconName } from '@/components/icons';

import { IMAGES } from '@/lib/images';

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    id: service.id,
  }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const service = SERVICES.find(s => s.id === params.id);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.title} | Roray Homebased Medical Services`,
    description: service.tagline + '. ' + service.description.substring(0, 150) + '...',
  };
}

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const service = SERVICES.find(s => s.id === params.id);
  
  if (!service) {
    notFound();
  }

  const Icon = Icons[service.icon as IconName] || Icons.nursing;
  
  const getServiceImage = (id: string) => {
    switch (id) {
      case 'home-nursing': return IMAGES.stethoscope;
      case 'elderly-care': return IMAGES.community;
      case 'post-surgery-recovery': return IMAGES.examRoom;
      case 'physiotherapy': return IMAGES.outreach;
      case 'palliative-care': return IMAGES.consultation;
      case 'chronic-disease': return IMAGES.equipment;
      default: return IMAGES.consultation;
    }
  };

  return (
    <>
      <PageHero 
        title={service.title} 
        description={service.tagline}
        imagePath={getServiceImage(service.id)}
      />
      
      <section className="bg-white section-pad">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-24 h-24 shrink-0 bg-bone border border-gray-200 flex items-center justify-center text-roray-green no-radius">
              <Icon className="w-12 h-12" />
            </div>
            
            <div>
              <h2 className="font-display font-bold text-3xl text-navy-deep mb-6">Overview</h2>
              <p className="text-lg text-ink-soft leading-relaxed mb-10">
                {service.description}
              </p>
              
              <div className="bg-bone-warm p-8 border-l-4 border-roray-green no-radius mb-10">
                <h3 className="font-display font-bold text-xl text-navy-deep mb-4">Why choose this service?</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <svg className="w-6 h-6 text-roray-green shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-ink-soft">Personalized care plan tailored to individual needs</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-6 h-6 text-roray-green shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-ink-soft">Delivered by licensed and vetted professionals</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-6 h-6 text-roray-green shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-ink-soft">Continuous monitoring and family updates</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href={`/book?service=${service.id}`} variant="primary">
                  Book This Service
                </Button>
                <Button href="/services" variant="outline">
                  View All Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactBlock />
    </>
  );
}
