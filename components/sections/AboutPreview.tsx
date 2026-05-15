import Image from 'next/image';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';
import { IMAGES } from '@/lib/images';

export default function AboutPreview() {
  return (
    <section className="bg-white section-pad">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader 
              eyebrow="Who We Are"
              title="Redefining Healthcare Delivery in Tanzania."
              description="Founded in Dodoma, Roray Homebased Medical Services Ltd was established with a singular mission: to bridge the gap between clinical excellence and the comfort of home."
            />
            
            <p className="text-ink-soft mb-8 leading-relaxed">
              We understand that recovering or managing health conditions in a hospital environment can be stressful. By bringing skilled nursing, expert physiotherapy, and compassionate care directly to your doorstep, we promote faster healing, ensure dignity, and keep families together.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10 border-t border-gray-100 pt-8">
              <div>
                <p className="font-display text-4xl font-bold text-navy-deep mb-2">15+</p>
                <p className="text-sm font-bold text-roray-green tracking-wider uppercase">Medical Staff</p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold text-navy-deep mb-2">24/7</p>
                <p className="text-sm font-bold text-roray-green tracking-wider uppercase">Care Availability</p>
              </div>
            </div>

            <Button href="/about" variant="primary">
              Learn More About Us
            </Button>
          </div>

          <div className="relative">
            <div className="absolute top-4 -left-4 w-full h-full border-2 border-roray-green z-0 no-radius hidden md:block"></div>
            <div className="relative z-10 bg-white p-2 no-radius">
              <div className="img-frame aspect-[4/5] w-full bg-bone">
                <Image 
                  src={IMAGES.examRoom} 
                  alt="Roray clinical consultation" 
                  fill 
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-navy-deep text-white p-8 max-w-[280px] z-20 no-radius shadow-xl hidden md:block border-b-4 border-roray-green">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-roray-green mb-4"><path strokeLinecap="square" strokeLinejoin="miter" d="M12 21a9 9 0 100-18 9 9 0 000 18z"></path><path strokeLinecap="square" strokeLinejoin="miter" d="M12 8v4l3 3"></path></svg>
              <p className="font-display font-bold text-xl mb-2">Around the Clock</p>
              <p className="text-sm text-gray-300">We are always ready to respond to your medical needs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
