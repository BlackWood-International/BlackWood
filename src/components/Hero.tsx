import React, { useRef } from 'react';
import { motion } from 'motion/react';
import Button from './Button';

interface HeroProps {
  subtitle?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  primaryAction?: { label: string; to: string };
  secondaryAction?: { label: string; to: string };
  align?: 'left' | 'center';
  background?: 'mineral' | 'glass' | 'metallic' | 'dark' | 'light';
  children?: React.ReactNode;
}

export default function Hero({
  subtitle,
  title,
  description,
  primaryAction,
  secondaryAction,
  align = 'left',
  background = 'dark',
  children
}: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isCenter = align === 'center';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section 
      ref={containerRef} 
      className={`relative min-h-[60vh] flex items-center overflow-hidden pt-48 pb-24 ${isCenter ? 'justify-center text-center' : ''}`}
    >
      {/* Background Elements - Simplified for perfect color matching */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.01)_0%,transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`max-w-5xl ${isCenter ? 'mx-auto flex flex-col items-center' : ''} text-black`}
        >
          {subtitle && (
            <motion.div variants={itemVariants} className="mb-8">
              <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-black/40">
                {subtitle}
              </span>
            </motion.div>
          )}

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-[90px] font-serif font-medium leading-[0.95] tracking-tight mb-10 text-black"
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p 
              variants={itemVariants}
              className={`text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-2xl text-black/60 ${isCenter ? 'mx-auto' : ''}`}
            >
              {description}
            </motion.p>
          )}

          {(primaryAction || secondaryAction) && (
            <motion.div 
              variants={itemVariants}
              className={`flex flex-col sm:flex-row gap-4 mt-16 ${isCenter ? 'justify-center' : ''}`}
            >
              {primaryAction && (
                <Button 
                  label={primaryAction.label} 
                  to={primaryAction.to} 
                  variant="primary" 
                  showArrow 
                />
              )}
              {secondaryAction && (
                <Button 
                  label={secondaryAction.label} 
                  to={secondaryAction.to} 
                  variant="outline" 
                />
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
      {children}
    </section>
  );
}