import Link from 'next/link';
import BookingForm from '@/components/sections/BookingForm';
import { SITE_INFO } from '@/lib/content';
import { SERVICES } from '@/lib/services';

export const metadata = {
  title: 'Book a Consultation | Roray Homebased',
  description: 'Schedule a clinical assessment with Dr. Getrude Mande and the Roray team to discuss your home healthcare requirements.',
};

export default function BookPage() {
  // 3 most popular services for the quick-book strip
  const popularServices = [
    {
      name: 'Home Nursing',
      msg: 'Habari, nataka kuomba huduma ya Uuguzi wa Nyumbani. / Hello, I would like to book Skilled Home Nursing care.',
    },
    {
      name: 'Elderly Care',
      msg: 'Habari, nataka kuomba huduma ya Utunzaji wa Wazee. / Hello, I would like to book Elderly Care.',
    },
    {
      name: 'Post-Surgery',
      msg: 'Habari, nataka msaada baada ya upasuaji. / Hello, I need Post-Surgery Recovery support.',
    },
  ];

  return (
    <div className="bg-bone min-h-screen">
      {/* Mini Header / Breadcrumbs */}
      <section className="bg-navy py-8 text-white no-radius border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold mb-2">
              <Link href="/" className="hover:underline">Home</Link>
              <span className="text-white/40">/</span>
              <span className="text-white/80">Book a Consultation</span>
            </nav>
            <h1 className="font-display font-bold text-2xl md:text-3xl">Panga Uchunguzi</h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="pulse-dot bg-gold mr-1"></span>
            <span className="text-[10px] font-bold tracking-wider uppercase text-gold">Accepting New Patients</span>
          </div>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT COLUMN: TRUST PANEL (5/12) */}
            <div className="lg:col-span-5 space-y-8 bg-navy text-white p-8 md:p-12 border border-white/10 no-radius shadow-md">
              <div>
                <span className="text-[11px] font-bold tracking-[0.2em] text-gold uppercase block mb-3">Why Book With Us</span>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-white">Clinical Care at Home</h3>
                <div className="w-12 h-[2px] bg-roray-green mt-3"></div>
              </div>

              {/* Trust Items List */}
              <div className="space-y-6">
                {/* Item 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 flex items-center justify-center shrink-0 no-radius border border-white/10 text-roray-greenlight">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="square" strokeLinejoin="miter" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white text-base">Licensed Clinical Staff</h4>
                    <p className="text-white/70 text-xs mt-1 leading-relaxed">
                      Every provider is registered, vetted, and supervised by Dr. Getrude Mande.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 flex items-center justify-center shrink-0 no-radius border border-white/10 text-roray-greenlight">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="square" strokeLinejoin="miter" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white text-base">24/7 Emergency Response</h4>
                    <p className="text-white/70 text-xs mt-1 leading-relaxed">
                      Our active clinical emergency lines are open around the clock.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 flex items-center justify-center shrink-0 no-radius border border-white/10 text-roray-greenlight">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="square" strokeLinejoin="miter" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <circle cx="12" cy="11" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white text-base">Home-Based — No Travel Needed</h4>
                    <p className="text-white/70 text-xs mt-1 leading-relaxed">
                      Avoid the stress, time, and health risks of traveling to busy clinics.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 my-6"></div>

              {/* Phone Block */}
              <div className="space-y-4">
                <span className="text-[10px] font-bold tracking-wider uppercase text-gold block">Speak to a Coordinator</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                  <a href={`tel:${SITE_INFO.phoneClean}`} className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors no-radius">
                    <svg className="w-5 h-5 text-roray-greenlight" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="square" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm font-semibold">{SITE_INFO.phone}</span>
                  </a>
                  <a href={`tel:${SITE_INFO.phoneSecondaryClean}`} className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors no-radius">
                    <svg className="w-5 h-5 text-roray-greenlight" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="square" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm font-semibold">{SITE_INFO.phoneSecondary}</span>
                  </a>
                </div>
              </div>

              {/* WhatsApp Quick Book Strip */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <span className="text-[10px] font-bold tracking-wider uppercase text-gold block">Instant Booking via WhatsApp</span>
                <div className="flex flex-col gap-2">
                  {popularServices.map((svc) => (
                    <a
                      key={svc.name}
                      href={`https://wa.me/255685095109?text=${encodeURIComponent(svc.msg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20 transition-all no-radius text-xs font-bold uppercase tracking-wider cursor-pointer"
                    >
                      <span>{svc.name}</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: BOOKING FORM (7/12) */}
            <div className="lg:col-span-7">
              <BookingForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
