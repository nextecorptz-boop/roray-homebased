import Image from 'next/image';
import SectionHeader from '../ui/SectionHeader';
import { IMAGES } from '@/lib/images';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Licensed Professionals",
      desc: "Every member of our team is fully licensed, background-checked, and rigorously trained.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="square" strokeLinejoin="miter" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path strokeLinecap="square" strokeLinejoin="miter" d="M9 12l2 2 4-4" />
        </svg>
      )
    },
    {
      title: "Tailored Care Plans",
      desc: "We don't do one-size-fits-all. Every patient receives a customized medical strategy.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="square" strokeLinejoin="miter" d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <path strokeLinecap="square" strokeLinejoin="miter" d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
        </svg>
      )
    },
    {
      title: "Rapid Emergency Response",
      desc: "Our on-call teams are equipped to handle critical situations promptly and professionally.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="square" strokeLinejoin="miter" d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-navy section-pad relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-navy-deep opacity-50 skew-x-12 translate-x-1/4"></div>
      
      {/* Decorative background image overlay as requested by step 1 mapping */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <Image 
          src={IMAGES.outreach} 
          alt="" 
          fill 
          className="object-cover mix-blend-luminosity" 
          loading="lazy"
          sizes="100vw"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="img-frame aspect-square w-full bg-navy-deep border border-gray-800">
              <Image 
                src={IMAGES.clinical} 
                alt="Medical professional with patient" 
                fill 
                className="object-cover opacity-90"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <SectionHeader 
              eyebrow="The Roray Difference"
              title="Why Dodoma Trusts Us."
              description="We bring the hospital's clinical standard into the warmth of your home. It's not just about medical care; it's about comfort, respect, and peace of mind."
              light
              className="mb-12"
            />
            
            <div className="space-y-8">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="w-14 h-14 shrink-0 bg-navy-deep border border-gray-700 flex items-center justify-center text-roray-greenlight">
                    <div className="w-6 h-6">{reason.icon}</div>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xl text-white mb-2">{reason.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
