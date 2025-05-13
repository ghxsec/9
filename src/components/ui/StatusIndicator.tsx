import React from 'react';
import { cn } from '../../utils/cn';

type StatusType = 'online' | 'offline' | 'warning' | 'connecting';

interface StatusIndicatorProps {
  status: StatusType;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  status,
  label,
  size = 'md',
  className,
}) => {
  const sizeClasses = {
    sm: 'h-2 w-2',
    md: 'h-3 w-3',
    lg: 'h-4 w-4'
  };

  const labelSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  const statusClasses = {
    online: 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]',
    offline: 'bg-gray-400',
    warning: 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.7)]',
    connecting: 'bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.7)]'
  };

  const statusLabel = label || {
    online: 'Online',
    offline: 'Offline',
    warning: 'Degraded',
    connecting: 'Connecting'
  }[status];

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <span className={cn(
        'rounded-full flex-shrink-0', 
        sizeClasses[size], 
        statusClasses[status]
      )} />
      {statusLabel && (
        <span className={cn(
          'font-medium', 
          labelSizeClasses[size],
          status === 'online' ? 'text-emerald-400' : 
          status === 'warning' ? 'text-amber-400' : 
          status === 'connecting' ? 'text-blue-400' : 
          'text-gray-400'
        )}>
          {statusLabel}
        </span>
      )}
    </div>
  );
};

export default StatusIndicator;