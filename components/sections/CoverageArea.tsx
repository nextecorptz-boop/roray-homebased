import Image from 'next/image';
import { IMAGES } from '@/lib/images';
import Eyebrow from '@/components/ui/Eyebrow';

const AREAS = [
  'Dodoma City',
  'Makulu',
  'Nzuguni',
  'Kikuyu',
  'Chamwino',
  'Bahi',
  'Kondoa',
  'Mpwapwa',
];

export default function CoverageArea() {
  return (
    <section className="relative py-20 md:py-32 bg-navy-deep text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image src={IMAGES.communityWork} alt="" fill className="object-cover" sizes="100vw" />
      </div>
      <div className="absolute inset-0 bg-navy-deep/90" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow light>Service Area</Eyebrow>
            <h2 className="font-display font-bold text-white text-3xl md:text-4xl leading-tight mb-4">
              We Serve Dodoma
              <br />
              <span className="text-roray-greenlight">&amp; Surrounding Areas.</span>
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-8">
              Our team makes home visits across Dodoma Region. Not sure if we reach you? Call
              and we will confirm.
            </p>
            <a
              href="tel:+255685095109"
              className="font-display text-sm font-semibold tracking-[0.12em] uppercase text-roray-greenlight hover:text-white transition-colors"
            >
              +255 685 095 109 →
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            {AREAS.map((area) => (
              <span
                key={area}
                className="font-display text-sm font-medium tracking-wider uppercase px-4 py-2 border border-white/20 text-white/80 hover:border-roray-greenlight hover:text-white transition-colors no-radius"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
