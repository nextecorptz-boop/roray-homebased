'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Icons, IconName } from '../icons';

interface ServiceCardProps {
  id: string;
  title: string;
  tagline: string;
  icon: string;
  description: string;
  href: string;
  cardImage?: string;
  comingSoon?: boolean;
}

export default function ServiceCard({
  title,
  tagline,
  icon,
  description,
  href,
  cardImage,
  comingSoon = false,
}: ServiceCardProps) {
  const Icon = Icons[icon as IconName] || Icons.nursing;
  const t = useTranslations('services');

  const cardClasses =
    'group flex flex-col h-full bg-white border border-gray-200 hover:border-l-[3px] hover:border-l-roray-green hover:-translate-y-1 hover:shadow-lg transition-all duration-300 relative overflow-hidden no-radius';

  const content = (
    <>
      {/* Hover accent line top */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-roray-green scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></div>

      {/* Coming soon badge */}
      {comingSoon && (
        <span
          className="absolute top-3 right-3 z-10 text-[10px] font-bold tracking-[0.1em] px-2 py-[3px] no-radius"
          style={{ background: '#D4AF37', color: '#0B2447' }}
        >
          {t('coming_soon')}
        </span>
      )}

      {/* Card image */}
      {cardImage && (
        <div className="relative h-48 w-full overflow-hidden no-radius">
          <Image
            src={cardImage}
            alt={title}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />
        </div>
      )}

      <div className="flex flex-col flex-1 p-8">
        <div className="w-14 h-14 bg-bone flex items-center justify-center text-navy-deep group-hover:bg-roray-green group-hover:text-white transition-colors duration-300 mb-6 no-radius">
          <Icon className="w-7 h-7" />
        </div>

        <h3 className="font-display font-bold text-xl text-navy-deep mb-2 group-hover:text-roray-green transition-colors">
          {title}
        </h3>
        <p className="text-roray-green text-xs font-bold tracking-widest uppercase mb-4">{tagline}</p>

        <div className="divider-pulse my-6 opacity-0 group-hover:opacity-100 transition-opacity"></div>

        <p className="text-ink-soft mb-6 line-clamp-3 leading-relaxed flex-1">{description}</p>

        {!comingSoon && (
          <div className="flex items-center gap-2 text-[13px] font-bold tracking-widest uppercase text-navy group-hover:text-roray-green transition-colors mt-auto">
            <span>{t('explore')}</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        )}
      </div>
    </>
  );

  if (comingSoon) {
    return <div className={cardClasses}>{content}</div>;
  }

  return (
    <Link href={href} className={cardClasses}>
      {content}
    </Link>
  );
}
