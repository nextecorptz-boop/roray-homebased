import { SITE_INFO } from '@/lib/content';

export default function EmergencyBand() {
  return (
    <section className="text-white py-12 md:py-16 relative overflow-hidden no-radius" style={{ backgroundColor: '#B03025' }}>
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
        
        {/* Left clinical info */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          {/* Medical cross SVG in 64x64 square */}
          <div className="w-16 h-16 shrink-0 bg-white/15 border-2 border-white flex items-center justify-center no-radius">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="square"
              className="w-8 h-8"
            >
              <path d="M12 2v20M2 12h20"/>
            </svg>
          </div>
          
          <div className="space-y-1">
            <h3 className="font-display font-bold text-2xl md:text-3xl">
              Need Immediate Assistance?
            </h3>
            <p className="text-white/95 text-sm md:text-base">
              Emergency team available 24/7 across Dodoma.
            </p>
            {/* Display both phone numbers (stacked small under subtext on mobile, hidden on desktop here if needed, but the spec says display stacked small under subtext on mobile) */}
            <div className="md:hidden flex flex-col gap-1 pt-2 text-xs font-semibold text-white/90">
              <a href={`tel:${SITE_INFO.phoneClean}`} className="hover:underline">Primary: {SITE_INFO.phone}</a>
              <a href={`tel:${SITE_INFO.phoneSecondaryClean}`} className="hover:underline">Secondary: {SITE_INFO.phoneSecondary}</a>
            </div>
          </div>
        </div>
        
        {/* Right CTA column */}
        <div className="flex flex-col gap-3 w-full md:w-auto shrink-0 items-center md:items-end">
          <a
            href={`tel:${SITE_INFO.phoneClean}`}
            className="border-2 border-white text-white hover:bg-white hover:text-[#B03025] transition-colors duration-200 bg-transparent text-base font-bold uppercase tracking-widest py-4 px-8 no-radius inline-flex items-center justify-center w-full md:w-auto cursor-pointer"
          >
            {/* Phone icon */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                 strokeLinecap="square" className="w-5 h-5 inline mr-2 shrink-0">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07
                       19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11
                       2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0
                       01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11
                       -.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            Call {SITE_INFO.phone}
          </a>
          
          {/* Desktop/Tablet display of both phone numbers */}
          <div className="hidden md:flex items-center gap-4 text-xs font-semibold text-white/90">
            <span>Primary: <a href={`tel:${SITE_INFO.phoneClean}`} className="hover:underline text-gold">{SITE_INFO.phone}</a></span>
            <span className="text-white/40">|</span>
            <span>Secondary: <a href={`tel:${SITE_INFO.phoneSecondaryClean}`} className="hover:underline text-gold">{SITE_INFO.phoneSecondary}</a></span>
          </div>
        </div>

      </div>
    </section>
  );
}
