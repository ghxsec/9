import React from 'react';
import { Wifi, HardDrive, Activity, Clock } from 'lucide-react';
import StatCard from '../ui/StatCard';

const ConnectionSummary: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        title="Active Connections"
        value="42"
        icon={<Wifi size={20} />}
        trend={{ value: 12, isPositive: true }}
        description="from last 24h"
      />
      
      <StatCard
        title="Available Servers"
        value="156"
        icon={<HardDrive size={20} />}
        description="in 24 countries"
      />
      
      <StatCard
        title="Network Speed"
        value="212 Mbps"
        icon={<Activity size={20} />}
        trend={{ value: 5, isPositive: true }}
        description="avg download"
      />
      
      <StatCard
        title="Uptime"
        value="99.98%"
        icon={<Clock size={20} />}
        description="last 30 days"
      />
    </div>
  );
};

export default ConnectionSummary;