interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export default function Eyebrow({ children, className = '', light = false }: EyebrowProps) {
  return (
    <div className={`flex items-center gap-4 mb-4 ${className}`}>
      <span className="w-12 h-px bg-roray-green"></span>
      <span className={`text-[13px] font-bold tracking-[0.1em] uppercase ${light ? 'text-roray-greenlight' : 'text-roray-green'}`}>
        {children}
      </span>
    </div>
  );
}
