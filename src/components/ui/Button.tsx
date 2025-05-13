import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    isLoading = false, 
    leftIcon, 
    rightIcon,
    children, 
    disabled, 
    ...props 
  }, ref) => {
    
    // Generate the base classes based on variant
    const baseClasses = 
      variant === 'primary' 
        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white' 
        : variant === 'secondary' 
        ? 'bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white' 
        : variant === 'outline' 
        ? 'bg-transparent border border-gray-600 hover:border-gray-400 text-gray-200' 
        : variant === 'ghost' 
        ? 'bg-transparent hover:bg-gray-800 text-gray-200' 
        : variant === 'danger'
        ? 'bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 text-white'
        : '';

    // Generate the size classes
    const sizeClasses = 
      size === 'sm' 
        ? 'px-3 py-1.5 text-sm rounded-md' 
        : size === 'md' 
        ? 'px-4 py-2 text-base rounded-lg' 
        : 'px-6 py-3 text-lg rounded-lg';

    // Common classes for all buttons
    const commonClasses = 'font-medium transition-all duration-200 flex items-center justify-center gap-2';
    
    // Disabled classes
    const disabledClasses = (disabled || isLoading) 
      ? 'opacity-70 cursor-not-allowed pointer-events-none' 
      : '';

    // Special effects for web3 style
    const effectClasses = 'shadow-lg hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]';

    return (
      <button
        className={cn(
          baseClasses,
          sizeClasses,
          commonClasses,
          disabledClasses,
          effectClasses,
          className
        )}
        disabled={disabled || isLoading}
        ref={ref}
        {...props}
      >
        {isLoading && (
          <span className="animate-spin mr-2">
            <svg className="h-4 w-4" viewBox="0 0 24 24">
              <circle 
                className="opacity-25" 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4"
                fill="none"
              />
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </span>
        )}
        {!isLoading && leftIcon && <span>{leftIcon}</span>}
        {children}
        {!isLoading && rightIcon && <span>{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;