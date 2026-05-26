import PageHero from '@/components/ui/PageHero';
import TeamProfileSection from '@/components/sections/TeamProfileSection';
import { IMAGES } from '@/lib/images';

export const metadata = {
  title: 'Our Medical Director | Roray Homebased Medical Services',
  description:
    'Dr. Gertrude Mande, MD MPH — Medical Director and founder of Roray Homebased Medical Services. Professional home healthcare in Dodoma, Tanzania.',
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        title="Led by Dr. Gertrude Mande"
        description="Medical Director · Roray Homebased Medical Services"
        imagePath={IMAGES.elderlyCare}
      />
      <TeamProfileSection />
    </>
  );
}
