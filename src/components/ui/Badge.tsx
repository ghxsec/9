import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md';
  className?: string;
  pulsing?: boolean;
}

const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className,
  pulsing = false
}) => {
  const baseClasses = 'inline-flex items-center font-medium rounded-full';

  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm';

  // Web3-style colors with gradients
  const variantClasses = 
    variant === 'primary' 
      ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white' 
      : variant === 'success' 
      ? 'bg-gradient-to-r from-emerald-600 to-emerald-500 text-white' 
      : variant === 'warning' 
      ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-white' 
      : variant === 'danger' 
      ? 'bg-gradient-to-r from-rose-600 to-rose-500 text-white' 
      : 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white';

  const pulsingClasses = pulsing 
    ? 'animate-pulse' 
    : '';

  return (
    <span className={cn(baseClasses, sizeClasses, variantClasses, pulsingClasses, className)}>
      {children}
    </span>
  );
};

export default Badge;