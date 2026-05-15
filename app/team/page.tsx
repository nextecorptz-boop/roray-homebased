import Image from 'next/image';
import PageHero from '@/components/ui/PageHero';
import Button from '@/components/ui/Button';
import { IMAGES } from '@/lib/images';

export const metadata = {
  title: 'Our Leadership | Roray Homebased Medical Services',
  description: 'Led by Dr. Gertrude Mande, our team of vetted healthcare professionals provides hospital-grade care at home throughout Dodoma.',
};

export default function TeamPage() {
  return (
    <>
      <PageHero 
        title="Led by Dr. Gertrude Mande" 
        description="Medical Director · Roray Homebased Medical Services"
        imagePath={IMAGES.clinical}
      />
      
      {/* Dr. Mande Feature Section */}
      <section className="bg-white section-pad">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start">
            <div className="w-full lg:w-5/12">
              <div className="img-frame aspect-[4/5] w-full bg-bone no-radius">
                <Image 
                  src={IMAGES.consultation} 
                  alt="Dr. Gertrude Mande, Medical Director" 
                  fill 
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
            
            <div className="w-full lg:w-7/12 lg:pt-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-px bg-roray-green"></span>
                <span className="text-[13px] font-bold tracking-[0.1em] uppercase text-roray-green">
                  Our Medical Director
                </span>
              </div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-navy-deep mb-2">Dr. Gertrude Mande</h2>
              <p className="text-xl text-roray-green font-semibold mb-8">MD · Family Medicine</p>
              
              <div className="text-ink-soft leading-relaxed space-y-6 mb-10 text-lg">
                <p>
                  Dr. Mande leads the clinical practice at Roray, overseeing every care plan personally. She ensures that all patients receive hospital-grade medical attention from the comfort of their homes, tailored to their individual health profiles.
                </p>
                <p>
                  Her practice focuses on home-based primary care, chronic disease management, and elderly wellbeing. Under her guidance, Roray has established rigorous protocols for home healthcare delivery across the Dodoma region.
                </p>
                <p>
                  She is supported by a vetted network of registered nurses, caregivers, and physiotherapists who deliver care under her clinical direction, maintaining a consistent standard of excellence and compassion.
                </p>
              </div>
              
              <div className="mb-10">
                <h3 className="font-display font-bold text-xl text-navy-deep mb-4">Specializations</h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {['Family Medicine', 'Home-Based Primary Care', 'Chronic Disease Management', 'Elderly Wellbeing', 'Palliative Coordination'].map((spec, i) => (
                    <li key={i} className="flex items-center gap-3 text-ink-soft">
                      <svg className="w-5 h-5 text-roray-green shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/book" variant="primary">Book Consultation</Button>
                <Button href="/contact" variant="outline">Contact the Practice</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supporting Network Strip */}
      <section className="bg-bone-warm section-pad">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-4">
              <span className="w-12 h-px bg-roray-green"></span>
              <span className="text-[13px] font-bold tracking-[0.1em] uppercase text-roray-green">
                Supporting Network
              </span>
            </div>
          </div>
          <h3 className="font-display font-bold text-3xl md:text-4xl text-navy-deep mb-6">Vetted Healthcare Professionals</h3>
          <p className="text-lg text-ink-soft max-w-3xl mx-auto leading-relaxed mb-16">
            Dr. Mande directs a network of registered nurses, certified caregivers, and licensed physiotherapists who deliver care to patients in their homes. Every professional is screened, qualified, and operates under Roray's clinical protocols.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-navy p-8 no-radius text-left">
              <div className="w-14 h-14 bg-white/10 flex items-center justify-center text-roray-greenlight mb-6 no-radius">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M4.5 19.5l15-15m-15 0l15 15M12 2v20"></path></svg>
              </div>
              <h4 className="font-display font-bold text-xl text-white mb-2">Registered Nurses</h4>
              <p className="text-gray-400">Skilled nursing care and vital monitoring.</p>
            </div>
            
            <div className="bg-navy p-8 no-radius text-left">
              <div className="w-14 h-14 bg-white/10 flex items-center justify-center text-roray-greenlight mb-6 no-radius">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M12 21a9 9 0 100-18 9 9 0 000 18z"></path><path strokeLinecap="square" strokeLinejoin="miter" d="M12 12a3 3 0 100-6 3 3 0 000 6z"></path><path strokeLinecap="square" strokeLinejoin="miter" d="M19.74 15.39C18.15 13.91 15.65 13 12 13s-6.15.91-7.74 2.39"></path></svg>
              </div>
              <h4 className="font-display font-bold text-xl text-white mb-2">Certified Caregivers</h4>
              <p className="text-gray-400">Compassionate daily assistance and support.</p>
            </div>
            
            <div className="bg-navy p-8 no-radius text-left">
              <div className="w-14 h-14 bg-white/10 flex items-center justify-center text-roray-greenlight mb-6 no-radius">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M22 12A10 10 0 1112 2a10 10 0 0110 10z"></path><path strokeLinecap="square" strokeLinejoin="miter" d="M12 8v8M8 12h8"></path></svg>
              </div>
              <h4 className="font-display font-bold text-xl text-white mb-2">Licensed Physiotherapists</h4>
              <p className="text-gray-400">Mobility restoration and physical rehabilitation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Band */}
      <section className="bg-roray-green py-16 text-center text-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-bold text-3xl mb-8">Ready to Begin Care?</h2>
          <Button href="/book" variant="outline" className="border-white text-white hover:bg-white hover:text-roray-green bg-transparent">
            Schedule an Assessment
          </Button>
        </div>
      </section>
    </>
  );
}
