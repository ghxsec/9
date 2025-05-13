import React from 'react';

interface DataPoint {
  value: number;
  label: string;
}

interface AreaChartProps {
  data: DataPoint[];
  height?: number;
  color?: string;
  gradientFrom?: string;
  gradientTo?: string;
  className?: string;
}

const AreaChart: React.FC<AreaChartProps> = ({
  data,
  height = 100,
  color = '#3B82F6',
  gradientFrom = 'rgba(59, 130, 246, 0.5)',
  gradientTo = 'rgba(59, 130, 246, 0.0)',
  className = '',
}) => {
  const chartId = React.useId();
  const gradientId = `gradient-${chartId}`;

  const maxValue = Math.max(...data.map(d => d.value)) * 1.1; // Add 10% padding
  const minValue = Math.min(...data.map(d => d.value)) * 0.9; // Subtract 10% padding

  // Normalize values to chart height
  const normalizeValue = (value: number) => {
    return height - ((value - minValue) / (maxValue - minValue)) * height;
  };

  // Create path for area chart
  const createPath = () => {
    if (data.length === 0) return '';
    
    const width = 100; // percentage
    const step = width / (data.length - 1);
    
    let path = `M 0,${normalizeValue(data[0].value)}`;
    
    data.forEach((d, i) => {
      if (i === 0) return; // Skip first point as it's already in the initial M command
      path += ` L ${i * step},${normalizeValue(d.value)}`;
    });
    
    // Complete the area by drawing to the bottom right, then bottom left, then back to start
    path += ` L ${width},${height}`;
    path += ` L 0,${height}`;
    path += ` Z`;
    
    return path;
  };

  // Create path for line (just the top part of the area)
  const createLinePath = () => {
    if (data.length === 0) return '';
    
    const width = 100; // percentage
    const step = width / (data.length - 1);
    
    let path = `M 0,${normalizeValue(data[0].value)}`;
    
    data.forEach((d, i) => {
      if (i === 0) return; // Skip first point
      path += ` L ${i * step},${normalizeValue(d.value)}`;
    });
    
    return path;
  };

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg
        width="100%"
        height={height}
        viewBox={`0 0 100 ${height}`}
        preserveAspectRatio="none"
        className="overflow-visible"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={gradientFrom} />
            <stop offset="100%" stopColor={gradientTo} />
          </linearGradient>
        </defs>
        
        {/* Area fill */}
        <path
          d={createPath()}
          fill={`url(#${gradientId})`}
          className="transition-all duration-300"
        />
        
        {/* Line on top */}
        <path
          d={createLinePath()}
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          className="transition-all duration-300"
        />
        
        {/* Data points */}
        {data.map((d, i) => {
          const width = 100; // percentage
          const step = width / (data.length - 1);
          const x = i * step;
          const y = normalizeValue(d.value);
          
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="2"
              fill={color}
              className="transition-all duration-300"
            />
          );
        })}
      </svg>
    </div>
  );
};

export default AreaChart;