import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import StatusIndicator from '../ui/StatusIndicator';
import { Globe, Clock, Trash2 } from 'lucide-react';

interface Session {
  id: string;
  protocol: string;
  location: string;
  ip: string;
  connected: string;
  device: string;
  status: 'online' | 'offline' | 'warning';
}

// Mock data
const sessions: Session[] = [
  {
    id: '1',
    protocol: 'WireGuard',
    location: 'Tokyo, Japan',
    ip: '203.0.113.1',
    connected: '2h 45m ago',
    device: 'MacBook Pro',
    status: 'online'
  },
  {
    id: '2',
    protocol: 'SSH',
    location: 'San Francisco, USA',
    ip: '198.51.100.23',
    connected: '1h 12m ago',
    device: 'Windows PC',
    status: 'online'
  },
  {
    id: '3',
    protocol: 'V2Ray',
    location: 'London, UK',
    ip: '192.0.2.45',
    connected: '4h 33m ago',
    device: 'iPhone 15',
    status: 'warning'
  }
];

const ActiveSessions: React.FC = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle>Active Sessions</CardTitle>
        <button className="text-sm text-blue-400 hover:text-blue-300">View All</button>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left py-3 px-2 text-xs font-medium text-gray-400">Status</th>
                <th className="text-left py-3 px-2 text-xs font-medium text-gray-400">Protocol</th>
                <th className="text-left py-3 px-2 text-xs font-medium text-gray-400">Location</th>
                <th className="text-left py-3 px-2 text-xs font-medium text-gray-400">IP Address</th>
                <th className="text-left py-3 px-2 text-xs font-medium text-gray-400">Connected</th>
                <th className="text-left py-3 px-2 text-xs font-medium text-gray-400">Device</th>
                <th className="text-right py-3 px-2 text-xs font-medium text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((session) => (
                <tr key={session.id} className="border-b border-gray-800/50 hover:bg-gray-800/20">
                  <td className="py-3 px-2">
                    <StatusIndicator status={session.status} size="sm" />
                  </td>
                  <td className="py-3 px-2 text-sm text-gray-300">{session.protocol}</td>
                  <td className="py-3 px-2">
                    <div className="flex items-center">
                      <Globe size={14} className="text-gray-400 mr-2" />
                      <span className="text-sm text-gray-300">{session.location}</span>
                    </div>
                  </td>
                  <td className="py-3 px-2 text-sm text-gray-300">{session.ip}</td>
                  <td className="py-3 px-2">
                    <div className="flex items-center">
                      <Clock size={14} className="text-gray-400 mr-2" />
                      <span className="text-sm text-gray-300">{session.connected}</span>
                    </div>
                  </td>
                  <td className="py-3 px-2 text-sm text-gray-300">{session.device}</td>
                  <td className="py-3 px-2 text-right">
                    <button className="text-gray-400 hover:text-rose-400 p-1">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActiveSessions;