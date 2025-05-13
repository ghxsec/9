import React from 'react';
import ConnectionSummary from '../components/dashboard/ConnectionSummary';
import BandwidthUsage from '../components/dashboard/BandwidthUsage';
import ActiveSessions from '../components/dashboard/ActiveSessions';
import ServerMap from '../components/dashboard/ServerMap';
import QuickConnect from '../components/dashboard/QuickConnect';

const DashboardPage: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Stats Summary */}
      <ConnectionSummary />
      
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <BandwidthUsage />
          <ServerMap />
          <ActiveSessions />
        </div>
        
        <div className="lg:col-span-1">
          <QuickConnect />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;