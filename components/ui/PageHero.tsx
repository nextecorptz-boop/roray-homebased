import Image from 'next/image';
import { IMAGES } from '@/lib/images';

interface PageHeroProps {
  title: string;
  description?: string;
  imagePath?: string;
}

export default function PageHero({ title, description, imagePath = IMAGES.consultation }: PageHeroProps) {
  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-navy-deep">
      <div className="absolute inset-0 z-0">
        <Image 
          src={imagePath} 
          alt={title}
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
        <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-6">
          {title}
        </h1>
        {description && (
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
