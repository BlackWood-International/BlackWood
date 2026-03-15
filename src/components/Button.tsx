import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  label: string;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  showArrow?: boolean;
  target?: string;
}

export default function Button({
  label,
  to,
  href,
  onClick,
  variant = 'primary',
  className = '',
  showArrow = false,
  target
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-[14px] font-medium rounded-full transition-all duration-500 active:scale-[0.95]";
  
  const variants = {
    primary: "bg-black text-white hover:bg-zinc-800 hover:shadow-2xl hover:shadow-black/20",
    secondary: "bg-zinc-100 text-black hover:bg-zinc-200",
    outline: "border border-black/10 text-black hover:bg-black/5",
    ghost: "text-black/60 hover:text-black hover:bg-black/5"
  };

  const content = (
    <span className="relative z-10 flex items-center gap-2">
      {label}
      {showArrow && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
    </span>
  );

  if (to) {
    return (
      <Link to={to} className={`${baseStyles} ${variants[variant]} group ${className}`}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a 
        href={href} 
        target={target} 
        rel={target === '_blank' ? 'noopener noreferrer' : undefined} 
        className={`${baseStyles} ${variants[variant]} group ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} group ${className}`}>
      {content}
    </button>
  );
}
