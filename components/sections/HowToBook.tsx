import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';

const STEPS = [
  {
    number: '01',
    title: 'Call or WhatsApp',
    titleSw: 'Piga Simu au WhatsApp',
    desc: "Reach us at +255 685 095 109. Tell us the patient's name and what they need.",
  },
  {
    number: '02',
    title: 'Free Assessment Call',
    titleSw: 'Tathmini ya Bure kwa Simu',
    desc: "A nurse calls you back within hours to understand the patient's condition.",
  },
  {
    number: '03',
    title: 'Care Begins',
    titleSw: 'Huduma Inaanza',
    desc: 'Your assigned professional arrives at your home on the agreed schedule.',
  },
];

export default function HowToBook() {
  return (
    <section className="section-pad bg-bone-warm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="flex justify-center">
            <Eyebrow>Book A Visit</Eyebrow>
          </div>
          <h2 className="font-display font-bold text-navy text-3xl md:text-5xl mb-2">
            Getting Care Is Simple.
          </h2>
          <p className="text-roray-green font-display text-xl">Kupata Huduma Ni Rahisi.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-gray-200 border border-gray-200 mb-12">
          {STEPS.map((step) => (
            <div key={step.number} className="bg-white p-8 lg:p-10">
              <div className="font-display text-7xl font-bold text-roray-green/15 leading-none mb-4">
                {step.number}
              </div>
              <h3 className="font-display font-bold text-navy text-lg uppercase tracking-wider mb-1">
                {step.title}
              </h3>
              <p className="font-display text-roray-green text-xs tracking-wider mb-4">
                {step.titleSw}
              </p>
              <p className="text-ink-soft text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="primary" href="/book">
            Book Now / Weka Miadi
          </Button>
        </div>
      </div>
    </section>
  );
}
