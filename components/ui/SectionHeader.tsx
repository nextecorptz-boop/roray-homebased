import Eyebrow from './Eyebrow';

interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  light?: boolean;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({ 
  eyebrow, 
  title, 
  description, 
  light = false, 
  centered = false,
  className = ''
}: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} ${className}`}>
      <div className={centered ? 'flex justify-center' : ''}>
        <Eyebrow light={light}>{eyebrow}</Eyebrow>
      </div>
      <h2 className={`font-display font-bold text-3xl md:text-5xl tracking-tight mb-6 leading-[1.1] ${light ? 'text-white' : 'text-navy-deep'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg md:text-xl leading-relaxed ${light ? 'text-gray-300' : 'text-ink-soft'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
