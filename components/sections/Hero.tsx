import Image from 'next/image';
import Link from 'next/link';
import Button from '../ui/Button';
import { SITE_INFO } from '@/lib/content';
import { IMAGES } from '@/lib/images';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-24 md:py-32 overflow-hidden">
      {/* Background with next/image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={IMAGES.consultation} 
          alt="Healthcare professional consulting with patient at home"
          fill
          priority
          loading="eager"
          className="object-cover object-[30%_center] md:object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 hero-overlay-mobile md:hero-overlay" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-px bg-roray-greenlight"></span>
            <span className="text-roray-greenlight text-[13px] font-bold tracking-[0.1em] uppercase">
              Roray Homebased Healthcare
            </span>
          </div>
          
          <h1 className="font-display font-bold text-3xl md:text-6xl lg:text-7xl text-white leading-[1.1] md:leading-[1.05] tracking-tight mb-8">
            Professional Care.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-roray-greenlight to-white">Compassionate Heart.</span><br />
            Right at Home.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed font-light">
            Bringing high-quality medical expertise and dedicated support directly to your doorstep in Dodoma. Because healing happens best where you feel most comfortable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button href="/services" variant="primary">
              Explore Our Services
            </Button>
            <Button href="/contact" variant="outline" className="border-white text-white hover:bg-white hover:text-navy-deep">
              Contact Us Today
            </Button>
          </div>

          <div className="flex items-center gap-4 text-white">
            <div className="flex -space-x-4">
              <img src={IMAGES.clinical} alt="Patient care" className="w-12 h-12 no-radius border-2 border-navy-deep object-cover" />
              <img src={IMAGES.outreach} alt="Medical staff" className="w-12 h-12 no-radius border-2 border-navy-deep object-cover" />
              <img src={IMAGES.community} alt="Elderly care" className="w-12 h-12 no-radius border-2 border-navy-deep object-cover" />
            </div>
            <div className="text-sm">
              <p className="font-bold">Trusted by families</p>
              <p className="text-gray-300">Across Dodoma Region</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
