import { SITE_INFO } from '@/lib/content';
import Button from '../ui/Button';

export default function EmergencyBand() {
  return (
    <section className="bg-accent-red text-white py-12 md:py-16 relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div className="flex items-center flex-col md:flex-row gap-6 md:gap-8">
          <div className="w-16 h-16 shrink-0 bg-white/10 border-2 border-white flex items-center justify-center no-radius">
            <span className="pulse-dot bg-white"></span>
          </div>
          <div>
            <h3 className="font-display font-bold text-2xl md:text-3xl mb-2">Need Immediate Assistance?</h3>
            <p className="text-white/90">Our emergency response team is available 24/7 across Dodoma.</p>
          </div>
        </div>
        
        <div className="shrink-0">
          <Button href={`tel:${SITE_INFO.phoneClean}`} variant="outline" className="border-white text-white hover:bg-white hover:text-accent-red bg-transparent text-lg py-5 px-8">
            Call {SITE_INFO.phone}
          </Button>
        </div>
      </div>
    </section>
  );
}
