import React from 'react';
import { Card, CardContent } from '../ui/Card';
import { Terminal, Shield, Zap, Wifi } from 'lucide-react';
import { cn } from '../../utils/cn';

type Protocol = 'ssh' | 'v2ray' | 'trojan' | 'wireguard';

interface ProtocolTabsProps {
  activeProtocol: Protocol;
  onChange: (protocol: Protocol) => void;
}

const protocols = [
  { id: 'ssh', name: 'SSH', icon: <Terminal size={20} /> },
  { id: 'v2ray', name: 'V2Ray', icon: <Shield size={20} /> },
  { id: 'trojan', name: 'Trojan', icon: <Zap size={20} /> },
  { id: 'wireguard', name: 'WireGuard', icon: <Wifi size={20} /> }
];

const ProtocolTabs: React.FC<ProtocolTabsProps> = ({ 
  activeProtocol,
  onChange 
}) => {
  return (
    <Card className="bg-gray-900/50 border-gray-800/50">
      <CardContent className="p-0">
        <div className="flex flex-wrap md:flex-nowrap">
          {protocols.map((protocol) => (
            <button
              key={protocol.id}
              className={cn(
                'flex items-center justify-center flex-1 py-4 px-3 text-center text-sm font-medium transition-all duration-200',
                'border-b-2 focus:outline-none',
                activeProtocol === protocol.id
                  ? 'text-blue-400 border-blue-500'
                  : 'text-gray-400 border-transparent hover:text-gray-300 hover:border-gray-700'
              )}
              onClick={() => onChange(protocol.id as Protocol)}
            >
              <span className="mr-2">{protocol.icon}</span>
              {protocol.name}
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProtocolTabs;