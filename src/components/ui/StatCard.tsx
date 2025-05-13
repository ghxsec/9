import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './Card';
import { cn } from '../../utils/cn';

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  description?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  description,
  trend,
  className,
}) => {
  return (
    <Card className={cn('h-full', className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-normal text-gray-400">{title}</CardTitle>
        {icon && <div className="text-gray-400">{icon}</div>}
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex flex-col">
          <div className="text-2xl font-bold text-white">{value}</div>
          
          {(description || trend) && (
            <div className="mt-1 flex items-center text-sm">
              {trend && (
                <span 
                  className={cn(
                    'mr-1 flex items-center', 
                    trend.isPositive ? 'text-emerald-400' : 'text-rose-400'
                  )}
                >
                  <span className="mr-1">
                    {trend.isPositive ? '↑' : '↓'}
                  </span>
                  {trend.value}%
                </span>
              )}
              
              {description && (
                <span className="text-gray-400">
                  {description}
                </span>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;