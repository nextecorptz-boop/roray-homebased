import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({ 
  children, 
  href, 
  variant = 'primary', 
  className = '', 
  onClick,
  type = 'button',
  disabled = false
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center px-[32px] py-[16px] text-[13px] font-bold tracking-[0.08em] uppercase transition-all duration-300 no-radius";
  
  const variants = {
    primary: "bg-roray-green text-white hover:bg-navy-deep hover:text-white",
    secondary: "bg-navy text-white hover:bg-roray-green",
    outline: "border-2 border-navy text-navy hover:bg-navy hover:text-white",
    ghost: "bg-transparent text-navy hover:text-roray-green px-0 py-0"
  };

  const classes = `${baseClasses} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
