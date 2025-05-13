import React from 'react';
import ProtocolTabs from '../components/protocols/ProtocolTabs';
import SSHConfig from '../components/protocols/SSHConfig';
import WireGuardConfig from '../components/protocols/WireGuardConfig';

type Protocol = 'ssh' | 'v2ray' | 'trojan' | 'wireguard';

const ProtocolsPage: React.FC = () => {
  const [activeProtocol, setActiveProtocol] = React.useState<Protocol>('ssh');

  const renderProtocolContent = () => {
    switch (activeProtocol) {
      case 'ssh':
        return <SSHConfig />;
      case 'wireguard':
        return <WireGuardConfig />;
      case 'v2ray':
      case 'trojan':
        // For demo purposes, these protocols show placeholder content
        return (
          <div className="p-8 text-center">
            <h3 className="text-xl text-gray-300 mb-2">
              {activeProtocol === 'v2ray' ? 'V2Ray' : 'Trojan'} Configuration
            </h3>
            <p className="text-gray-400">
              This protocol configuration interface is similar to the others.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white mb-6">Protocol Configuration</h1>
      
      <ProtocolTabs 
        activeProtocol={activeProtocol} 
        onChange={setActiveProtocol}
      />
      
      <div className="mt-6">
        {renderProtocolContent()}
      </div>
    </div>
  );
};

export default ProtocolsPage;