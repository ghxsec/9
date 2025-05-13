import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  variant?: 'default' | 'glass' | 'gradient';
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  className,
  children,
  variant = 'default',
  hoverEffect = false,
}) => {
  const baseClasses = 'rounded-xl backdrop-blur-sm p-4 transition-all duration-300';
  
  const variantClasses = 
    variant === 'default' 
      ? 'bg-gray-900 border border-gray-800' 
      : variant === 'glass' 
      ? 'bg-black/30 border border-gray-800/50' 
      : 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700/50';
  
  const hoverClasses = hoverEffect 
    ? 'hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] hover:border-blue-500/40' 
    : '';

  return (
    <div className={cn(baseClasses, variantClasses, hoverClasses, className)}>
      {children}
    </div>
  );
};

interface CardHeaderProps {
  className?: string;
  children: React.ReactNode;
}

const CardHeader: React.FC<CardHeaderProps> = ({ className, children }) => {
  return (
    <div className={cn('mb-4', className)}>
      {children}
    </div>
  );
};

interface CardTitleProps {
  className?: string;
  children: React.ReactNode;
}

const CardTitle: React.FC<CardTitleProps> = ({ className, children }) => {
  return (
    <h3 className={cn('text-lg font-medium text-white', className)}>
      {children}
    </h3>
  );
};

interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

const CardContent: React.FC<CardContentProps> = ({ className, children }) => {
  return (
    <div className={cn('text-gray-300', className)}>
      {children}
    </div>
  );
};

interface CardFooterProps {
  className?: string;
  children: React.ReactNode;
}

const CardFooter: React.FC<CardFooterProps> = ({ className, children }) => {
  return (
    <div className={cn('mt-4 pt-4 border-t border-gray-800/50', className)}>
      {children}
    </div>
  );
};

export { Card, CardHeader, CardTitle, CardContent, CardFooter };