import Link from 'next/link';
import { Icons, IconName } from '../icons';

interface ServiceCardProps {
  id: string;
  title: string;
  tagline: string;
  icon: string;
  description: string;
  href: string;
}

export default function ServiceCard({ title, tagline, icon, description, href }: ServiceCardProps) {
  const Icon = Icons[icon as IconName] || Icons.nursing;

  return (
    <Link href={href} className="group flex flex-col h-full bg-white border border-gray-200 p-8 hover:border-roray-green transition-colors duration-300 relative overflow-hidden no-radius">
      {/* Hover accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-roray-green scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></div>
      
      <div className="w-14 h-14 bg-bone flex items-center justify-center text-navy-deep group-hover:bg-roray-green group-hover:text-white transition-colors duration-300 mb-6 no-radius">
        <Icon className="w-7 h-7" />
      </div>
      
      <h3 className="font-display font-bold text-xl text-navy-deep mb-2 group-hover:text-roray-green transition-colors">{title}</h3>
      <p className="text-roray-green text-xs font-bold tracking-widest uppercase mb-4">{tagline}</p>
      
      <div className="divider-pulse my-6 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <p className="text-ink-soft mb-6 line-clamp-3 leading-relaxed">
        {description}
      </p>
      
      <div className="flex items-center gap-2 text-[13px] font-bold tracking-widest uppercase text-navy group-hover:text-roray-green transition-colors">
        <span>Explore Service</span>
        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
      </div>
    </Link>
  );
}
