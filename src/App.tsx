import React from 'react';
import DashboardLayout from './layouts/DashboardLayout';
import DashboardPage from './pages/DashboardPage';
import ProtocolsPage from './pages/ProtocolsPage';

function App() {
  const [currentPage, setCurrentPage] = React.useState<'dashboard' | 'protocols'>('dashboard');

  // For demonstration purposes, automatically show the protocols page after 3 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPage('protocols');
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <DashboardLayout>
      {currentPage === 'dashboard' ? (
        <DashboardPage />
      ) : (
        <ProtocolsPage />
      )}
    </DashboardLayout>
  );
}

export default App;