import type { Metadata } from 'next';
import Image from 'next/image';
import { IMAGES } from '@/lib/images';
import PageHero from '@/components/ui/PageHero';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import RolesStrip from '@/components/sections/RolesStrip';

export const metadata: Metadata = {
  title: 'Our Team | Roray Homebased Medical Services',
  description:
    'Meet Dr. Gertrude Mande, Medical Director of Roray Homebased Medical Services in Dodoma, Tanzania.',
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        title="Led by Dr. Gertrude Mande"
        description="Medical Director · Roray Homebased Medical Services Ltd"
        imagePath={IMAGES.clinical}
      />

      {/* Dr. Gertrude Mande Feature */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12">
            {/* Image — 5/12 */}
            <div className="lg:col-span-5 relative min-h-[500px] lg:min-h-[700px]">
              <Image
                src={IMAGES.drMande}
                alt="Dr. Gertrude Mande, Medical Director, Roray Homebased Medical Services"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>

            {/* Content — 7/12 */}
            <div className="lg:col-span-7 bg-bone p-10 lg:p-16 flex flex-col justify-center">
              <Eyebrow>Medical Director</Eyebrow>
              <h2 className="font-display font-bold text-navy text-4xl lg:text-5xl mb-2">
                Dr. Gertrude Mande
              </h2>
              <p className="text-roray-green font-display text-sm tracking-[0.2em] uppercase mb-8">
                MD · MPH
              </p>

              <div className="space-y-4 mb-10">
                <p className="text-ink-soft text-base leading-relaxed">
                  Dr. Gertrude Mande founded Roray Homebased Medical Services Ltd with a deep passion for
                  improving access to compassionate and professional healthcare for patients who
                  need medical support in the comfort of their homes.
                </p>
                <p className="text-ink-soft text-base leading-relaxed">
                  Her practice focuses on home-based primary care, chronic disease management,
                  and the health and dignity of elderly patients.
                </p>
                <p className="text-ink-soft text-base leading-relaxed">
                  She directs a vetted network of registered nurses, caregivers, and
                  physiotherapists who deliver care under her clinical protocols.
                </p>
              </div>

              <div className="mb-10">
                <h3 className="font-display font-bold text-navy text-xs tracking-[0.2em] uppercase mb-4">
                  Areas of Focus
                </h3>
                <ul className="space-y-2">
                  {[
                    'Home-Based Primary Care',
                    'Chronic Disease Management',
                    'Elderly Wellbeing',
                    'Palliative Coordination',
                    'Post-Surgery Recovery',
                  ].map((s) => (
                    <li key={s} className="flex items-center gap-3 text-ink-soft text-sm">
                      <span className="w-1 h-1 bg-roray-green flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" href="/book">
                  Book Consultation
                </Button>
                <Button variant="ghost" href="/contact">
                  Contact the Practice
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RolesStrip />

      {/* CTA */}
      <section className="py-20 bg-bone text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display font-bold text-navy text-3xl mb-4">
            Ready to Begin Care?
          </h2>
          <p className="text-ink-soft mb-8">
            Book a consultation and Dr. Gertrude Mande&apos;s team will contact you within hours.
          </p>
          <Button variant="primary" href="/book">
            Book a Home Visit
          </Button>
        </div>
      </section>
    </>
  );
}
