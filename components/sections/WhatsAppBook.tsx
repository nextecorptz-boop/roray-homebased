import Eyebrow from '@/components/ui/Eyebrow';

const WA_BASE = 'https://wa.me/255685095109?text=';

const SERVICES_WA = [
  {
    label: 'Home Nursing',
    msg: 'Habari, nataka kuomba huduma ya Uuguzi wa Nyumbani. / Hello, I would like to book Home Nursing care.',
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
    msg: 'Habari, nataka huduma ya Physiotherapy. / Hello, I would like Physiotherapy Support.',
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
    <section className="section-pad bg-roray-green text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4">
            <Eyebrow light>Instant Booking</Eyebrow>
            <h2 className="font-display font-bold text-white text-3xl md:text-4xl leading-tight mb-4">
              Book via WhatsApp.
              <br />
              <span className="text-white/80 text-2xl font-medium">
                Weka Miadi kwa WhatsApp.
              </span>
            </h2>
            <p className="text-white/80 text-base leading-relaxed">
              Tap a service. WhatsApp opens with a pre-written message in Swahili and English.
              Just hit send.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-3">
            {SERVICES_WA.map((svc) => (
              <a
                key={svc.label}
                href={`${WA_BASE}${encodeURIComponent(svc.msg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/30 p-4 text-white hover:bg-white hover:text-roray-green transition-all duration-300 cursor-pointer font-display text-xs font-semibold tracking-wider uppercase leading-snug flex items-center justify-between gap-2 no-radius"
              >
                <span>{svc.label}</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="flex-shrink-0"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654z" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
