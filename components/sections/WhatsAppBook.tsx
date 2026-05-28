import { SITE_INFO } from '@/lib/content';

const SERVICES_WA = [
  {
    label: 'Home Nursing',
    msg: 'Habari, nataka kuomba huduma ya Uuguzi wa Nyumbani. / Hello, I would like to book Skilled Home Nursing care.',
  },
  {
    label: 'Elderly Care',
    msg: 'Habari, nataka kuomba huduma ya Utunzaji wa Wazee. / Hello, I would like to book Elderly Care.',
  },
  {
    label: 'Post-Surgery',
    msg: 'Habari, nataka msaada baada ya upasuaji. / Hello, I need Post-Surgery Recovery support.',
  },
  {
    label: 'Physiotherapy',
    msg: 'Habari, nataka huduma ya Physiotherapy nyumbani. / Hello, I would like in-home Physiotherapy Support.',
  },
  {
    label: 'Palliative Care',
    msg: 'Habari, nataka maelezo kuhusu huduma ya Palliative. / Hello, I need information about Palliative Care.',
  },
  {
    label: 'Chronic Disease',
    msg: 'Habari, nataka msaada wa udhibiti wa ugonjwa sugu. / Hello, I need Chronic Disease Management support.',
  },
];

export default function WhatsAppBook() {
  return (
    <section className="py-20 md:py-28 text-white" style={{ backgroundColor: '#1A3A2A' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column info */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase" style={{ color: '#D4AF37' }}>
              INSTANT BOOKING
            </span>
            
            <h2 className="font-display font-bold text-white text-3xl md:text-5xl leading-tight">
              Book in 10 Seconds.
            </h2>
            
            <p className="text-white/80 font-display text-sm font-semibold tracking-wider uppercase">
              Weka Miadi — Swahili & English
            </p>

            <p className="text-white/70 text-sm leading-relaxed max-w-md">
              Tap any service. WhatsApp opens instantly on your phone or desktop with a pre-written clinical request.
            </p>

            {/* Official WhatsApp logo info */}
            <div className="flex items-center gap-4 pt-4">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="#25D366"
                className="shrink-0"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
              </svg>
              <span className="text-xs text-white/80 font-bold uppercase tracking-wider leading-snug">
                Opens WhatsApp directly on your phone
              </span>
            </div>
          </div>

          {/* Right Column service grid */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-4">
            {SERVICES_WA.map((svc) => (
              <a
                key={svc.label}
                href={`${SITE_INFO.whatsappLink}?text=${encodeURIComponent(svc.msg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#1A3A2A] border-l-[3px] border-l-[#2E7D4F] p-5 hover:bg-[#2E7D4F] hover:text-white hover:border-l-white hover:border hover:border-white transition-all duration-200 cursor-pointer font-display text-[11px] font-bold tracking-wider uppercase leading-snug flex items-center justify-between gap-3 no-radius"
              >
                <span>{svc.label}</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="shrink-0"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
                </svg>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
