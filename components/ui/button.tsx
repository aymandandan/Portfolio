import { ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: ReactNode;
  href: string;
  variant?: 'primary' | 'outline';
  className?: string;
  target?: string;
  rel?: string;
}

export function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'font-medium py-3 px-6 rounded-lg transition-all duration-200 text-center';
  
  const variants = {
    primary: 'bg-primary-500 hover:bg-primary-600 text-white hover:shadow-lg hover:shadow-primary-500/20',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:shadow-md hover:shadow-primary-500/10',
  };

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}

// Button with button element (for forms, etc.)
interface ButtonElementProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  children: ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
}

export function ButtonElement({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonElementProps) {
  const baseStyles = 'font-medium py-3 px-6 rounded-lg transition-all duration-200 text-center';
  
  const variants = {
    primary: 'bg-primary-500 hover:bg-primary-600 text-white hover:shadow-lg hover:shadow-primary-500/20',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:shadow-md hover:shadow-primary-500/10',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
