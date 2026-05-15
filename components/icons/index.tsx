export const Icons = {
  nursing: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path strokeLinecap="square" strokeLinejoin="miter" d="M12 2v20M2 12h20" />
      <path strokeLinecap="square" strokeLinejoin="miter" d="M19.5 7.5L4.5 22.5M22.5 4.5L7.5 19.5" />
    </svg>
  ),
  elderly: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path strokeLinecap="square" strokeLinejoin="miter" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
      <path strokeLinecap="square" strokeLinejoin="miter" d="M12 12a3 3 0 100-6 3 3 0 000 6z" />
      <path strokeLinecap="square" strokeLinejoin="miter" d="M19.74 15.39C18.15 13.91 15.65 13 12 13s-6.15.91-7.74 2.39" />
    </svg>
  ),
  surgery: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path strokeLinecap="square" strokeLinejoin="miter" d="M3 12h18M12 3v18" />
      <path strokeLinecap="square" strokeLinejoin="miter" d="M8 8l8 8M16 8l-8 8" />
    </svg>
  ),
  physio: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path strokeLinecap="square" strokeLinejoin="miter" d="M22 12A10 10 0 1112 2a10 10 0 0110 10z" />
      <path strokeLinecap="square" strokeLinejoin="miter" d="M12 8v8M8 12h8" />
    </svg>
  ),
  palliative: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path strokeLinecap="square" strokeLinejoin="miter" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  ),
  chronic: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path strokeLinecap="square" strokeLinejoin="miter" d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
};

export type IconName = keyof typeof Icons;
