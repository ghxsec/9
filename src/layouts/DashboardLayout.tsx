import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Sidebar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />
      
      <div className="lg:ml-64">
        <Header />
        
        <main className="container mx-auto px-4 py-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;