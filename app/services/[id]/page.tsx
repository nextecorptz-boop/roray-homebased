import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICES } from '@/lib/services';
import { Icons, IconName } from '@/components/icons';
import { IMAGES } from '@/lib/images';
import { SITE_INFO } from '@/lib/content';

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    id: service.id,
  }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const service = SERVICES.find((s) => s.id === params.id);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.title} | Roray Homebased Medical Services`,
    description: `${service.tagline} Professional homebased healthcare in Dodoma, Tanzania.`,
  };
}

interface ServiceDetail {
  includes: string[];
  waMsg: string;
}

const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  'home-nursing': {
    includes: [
      'Vital signs monitoring (BP, pulse, temperature)',
      'IV therapy and medication administration',
      'Wound care and dressing changes',
      'Post-discharge follow-up and care documentation',
      'Family briefings and clinical progress reports',
    ],
    waMsg: 'Habari, nataka kuomba huduma ya Uuguzi wa Nyumbani. / Hello, I would like to book Skilled Home Nursing care.',
  },
  'elderly-care': {
    includes: [
      'Personal hygiene and grooming assistance',
      'Meal preparation and feeding support',
      'Mobility assistance and fall prevention',
      'Companionship and mental stimulation activities',
      'Medication reminders and daily scheduling',
    ],
    waMsg: 'Habari, nataka kuomba huduma ya Utunzaji wa Wazee. / Hello, I would like to book Elderly Care.',
  },
  'post-surgery-recovery': {
    includes: [
      'Surgical wound care and sterile dressing changes',
      'Pain management monitoring and reporting',
      'Mobility guidance and early physiotherapy',
      'Nutritional support and hydration monitoring',
      'Direct liaison with treating physician',
    ],
    waMsg: 'Habari, nataka msaada baada ya upasuaji. / Hello, I need Post-Surgery Recovery support.',
  },
  'physiotherapy': {
    includes: [
      'Mobility and gait training at home',
      'Post-stroke and neurological rehabilitation',
      'Pain relief and manual therapy sessions',
      'Muscle strengthening exercise programs',
      'Progress assessment and home program setup',
    ],
    waMsg: 'Habari, nataka huduma ya Physiotherapy nyumbani. / Hello, I would like in-home Physiotherapy Support.',
  },
  'palliative-care': {
    includes: [
      'Symptom and pain management',
      'Emotional and psychological support for patient and family',
      'Comfort-focused medical care coordination',
      'Family counseling and practical guidance',
      'Spiritual support coordination on request',
    ],
    waMsg: 'Habari, nataka maelezo kuhusu huduma ya Palliative. / Hello, I need information about Palliative Care.',
  },
  'chronic-disease': {
    includes: [
      'Diabetes management and blood glucose monitoring',
      'Hypertension monitoring and medication adherence',
      'Asthma and COPD assessment and management',
      'Regular clinical assessments and documentation',
      'Patient and family education sessions',
    ],
    waMsg: 'Habari, nataka msaada wa udhibiti wa ugonjwa sugu. / Hello, I need Chronic Disease Management support.',
  },
};

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const service = SERVICES.find((s) => s.id === params.id);
  const detail = SERVICE_DETAILS[params.id];

  if (!service || !detail) {
    notFound();
  }

  const Icon = Icons[service.icon as IconName] || Icons.nursing;

  const getServiceImage = (id: string) => {
    switch (id) {
      case 'home-nursing': return IMAGES.nursingCare;
      case 'elderly-care': return IMAGES.elderlyHero;
      case 'post-surgery-recovery': return IMAGES.postSurgery;
      case 'physiotherapy': return IMAGES.careExplanation;
      case 'palliative-care': return IMAGES.palliativeCare;
      case 'chronic-disease': return IMAGES.chronicCare;
      default: return IMAGES.elderlyCare;
    }
  };

  const serviceImage = getServiceImage(service.id);

  return (
    <div className="bg-bone min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[400px] md:h-[500px] flex items-center bg-navy no-radius overflow-hidden">
        <Image
          src={serviceImage}
          alt={service.title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10 text-white">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-gold mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="text-white/40">/</span>
            <Link href="/services" className="hover:underline">Services</Link>
            <span className="text-white/40">/</span>
            <span className="text-white/80">{service.title}</span>
          </nav>

          <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4 max-w-3xl leading-tight">
            {service.title}
          </h1>
          <p className="text-gold font-display text-sm md:text-base font-bold tracking-[0.2em] uppercase max-w-2xl">
            {service.tagline}
          </p>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-150">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left Col - Overview details */}
            <div className="md:col-span-7 space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-roray-green text-white flex items-center justify-center no-radius shrink-0">
                  <Icon className="w-10 h-10" />
                </div>
                <div>
                  <span className="text-[11px] font-bold tracking-widest text-gold uppercase block mb-1">Service Profile</span>
                  <h2 className="font-display font-bold text-3xl text-navy-deep">{service.title}</h2>
                </div>
              </div>
              <p className="text-gold font-display text-xs font-bold tracking-widest uppercase">{service.tagline}</p>
              <p className="text-lg text-ink-soft leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Right Col - Photo frame */}
            <div className="md:col-span-5 relative aspect-[4/3] w-full border border-gray-200 no-radius overflow-hidden shadow-sm">
              <Image
                src={serviceImage}
                alt={`${service.title} Clinical Presentation`}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED SECTION */}
      <section className="py-20 md:py-28 bg-bone-warm border-b border-gray-150">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[11px] font-bold tracking-widest text-gold uppercase block mb-2">Scope of Care</span>
            <h2 className="font-display font-bold text-navy-deep text-3xl md:text-4xl">What&apos;s Included in Care</h2>
            <div className="w-16 h-[2px] bg-roray-green mx-auto mt-4"></div>
          </div>

          <div className="bg-white p-8 md:p-12 border border-gray-200 no-radius shadow-sm">
            <ul className="space-y-6">
              {detail.includes.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-none bg-roray-green/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-roray-green" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="square" strokeLinejoin="miter" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-ink-soft text-base md:text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WHY HOME-BASED SECTION */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-150">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[11px] font-bold tracking-widest text-gold uppercase block mb-2">Benefits</span>
            <h2 className="font-display font-bold text-navy-deep text-3xl md:text-4xl">Why Home-Based Care?</h2>
            <div className="w-16 h-[2px] bg-roray-green mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Comfort */}
            <div className="border border-gray-200 p-8 no-radius bg-bone">
              <div className="w-12 h-12 bg-roray-green/10 flex items-center justify-center text-roray-green mb-6 no-radius">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-lg text-navy-deep mb-3">Comfort of Home</h3>
              <p className="text-ink-soft text-sm leading-relaxed">
                Healing occurs best in familiar surroundings. We bring medical support to your personal sanctuary.
              </p>
            </div>

            {/* Card 2: Personalized Care */}
            <div className="border border-gray-200 p-8 no-radius bg-bone">
              <div className="w-12 h-12 bg-roray-green/10 flex items-center justify-center text-roray-green mb-6 no-radius">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-lg text-navy-deep mb-3">Personalized Care</h3>
              <p className="text-ink-soft text-sm leading-relaxed">
                Our clinicians design unique plans built specifically around the clinical and routine needs of the individual.
              </p>
            </div>

            {/* Card 3: Reduced Infection Risk */}
            <div className="border border-gray-200 p-8 no-radius bg-bone">
              <div className="w-12 h-12 bg-roray-green/10 flex items-center justify-center text-roray-green mb-6 no-radius">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-lg text-navy-deep mb-3">Reduced Infection Risk</h3>
              <p className="text-ink-soft text-sm leading-relaxed">
                By receiving clinical care at home, patients avoid exposure to hospital-acquired pathogens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOOK THIS SERVICE SECTION */}
      <section className="bg-roray-green text-white py-16 relative overflow-hidden no-radius">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-gold uppercase block mb-2">Miadi na Uhakiki</span>
            <h2 className="font-display font-bold text-white text-3xl md:text-4xl mb-3">Book This Service Today</h2>
            <p className="text-white/95 text-base md:text-lg max-w-2xl">
              Get in touch with us immediately to schedule a clinical assessment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
            <a
              href={`https://wa.me/255685095109?text=${encodeURIComponent(detail.waMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-5 bg-white text-roray-green border-2 border-white hover:bg-roray-green hover:text-white transition-all font-display text-sm font-bold uppercase tracking-widest text-center cursor-pointer no-radius flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              <span>Book via WhatsApp</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
              </svg>
            </a>

            <a
              href={`tel:${SITE_INFO.phoneClean}`}
              className="px-8 py-5 border-2 border-white text-white hover:bg-white hover:text-roray-green transition-all font-display text-sm font-bold uppercase tracking-widest text-center cursor-pointer no-radius flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              <span>Call Now</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="miter" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
