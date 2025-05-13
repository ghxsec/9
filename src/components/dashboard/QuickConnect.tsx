import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import Button from '../ui/Button';
import { Zap, Globe, ArrowDown, ShieldCheck } from 'lucide-react';
import StatusIndicator from '../ui/StatusIndicator';

interface ServerOption {
  id: string;
  name: string;
  location: string;
  latency: number;
  load: number;
  status: 'online' | 'offline' | 'warning';
}

// Mock data
const serverOptions: ServerOption[] = [
  {
    id: 'server1',
    name: 'Tokyo Secure',
    location: 'Japan',
    latency: 42,
    load: 65,
    status: 'online'
  },
  {
    id: 'server2',
    name: 'SF Premium',
    location: 'United States',
    latency: 28,
    load: 45,
    status: 'online'
  },
  {
    id: 'server3',
    name: 'London Edge',
    location: 'United Kingdom',
    latency: 78,
    load: 35,
    status: 'online'
  }
];

const QuickConnect: React.FC = () => {
  const [selectedServer, setSelectedServer] = React.useState(serverOptions[0].id);
  const [isConnecting, setIsConnecting] = React.useState(false);
  const [connectionStatus, setConnectionStatus] = React.useState<'online' | 'offline' | 'connecting'>('offline');

  const handleConnect = () => {
    setIsConnecting(true);
    setConnectionStatus('connecting');
    
    // Simulate connection
    setTimeout(() => {
      setIsConnecting(false);
      setConnectionStatus('online');
    }, 2000);
  };

  const handleDisconnect = () => {
    setConnectionStatus('offline');
  };

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle>Quick Connect</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col h-full">
          {/* Status indicator */}
          <div className="mb-6 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-gray-800 rounded-full flex items-center justify-center">
                {connectionStatus === 'online' ? (
                  <ShieldCheck size={32} className="text-emerald-400" />
                ) : connectionStatus === 'connecting' ? (
                  <div className="animate-spin">
                    <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  </div>
                ) : (
                  <Globe size={32} className="text-gray-400" />
                )}
              </div>
              <div className="mt-2 flex justify-center">
                <StatusIndicator 
                  status={connectionStatus}
                  label={connectionStatus === 'online' ? 'Connected' : connectionStatus === 'connecting' ? 'Connecting' : 'Disconnected'}
                />
              </div>
              
              {connectionStatus === 'online' && (
                <div className="mt-2 text-sm text-gray-400">
                  <div className="flex justify-center items-center">
                    <ArrowDown size={14} className="text-blue-400 mr-1" />
                    <span>42.8 Mbps</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Server selection */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400 mb-2">Select Server</label>
            <div className="grid gap-2">
              {serverOptions.map((server) => (
                <div 
                  key={server.id}
                  className={`
                    p-3 rounded-lg border cursor-pointer transition-all duration-200
                    ${selectedServer === server.id 
                      ? 'bg-blue-900/20 border-blue-500/50' 
                      : 'bg-gray-800/50 border-gray-700/50 hover:border-gray-600'
                    }
                  `}
                  onClick={() => setSelectedServer(server.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Globe size={18} className="text-gray-400" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-white">{server.name}</p>
                        <p className="text-xs text-gray-400">{server.location}</p>
                      </div>
                    </div>
                    <StatusIndicator status={server.status} size="sm" />
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-xs text-gray-400">
                    <div>Latency: <span className="text-white">{server.latency}ms</span></div>
                    <div>Load: <span className="text-white">{server.load}%</span></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Connect button */}
          <div className="mt-auto">
            {connectionStatus === 'online' ? (
              <Button 
                variant="outline" 
                className="w-full"
                onClick={handleDisconnect}
              >
                Disconnect
              </Button>
            ) : (
              <Button 
                className="w-full" 
                isLoading={isConnecting}
                onClick={handleConnect}
                leftIcon={<Zap size={16} />}
              >
                Connect Now
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickConnect;