import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../ui/Card';
import Button from '../ui/Button';
import { Wifi, QrCode, Download, Plus, Trash2 } from 'lucide-react';

const WireGuardConfig: React.FC = () => {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Wifi size={18} className="mr-2 text-blue-400" />
            WireGuard Configuration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <div className="text-sm text-gray-400 mb-1">Public Key</div>
              <div className="p-3 bg-gray-800 border border-gray-700 rounded-md text-white text-sm font-mono overflow-hidden text-ellipsis">
                HxUVw48763KMds987Rw9g87Jhfrt5DnOkm8URcxcvY=
              </div>
            </div>
            
            <div>
              <div className="text-sm text-gray-400 mb-1">Endpoint</div>
              <div className="p-3 bg-gray-800 border border-gray-700 rounded-md text-white text-sm">
                wg.nexusvpn.example.com:51820
              </div>
            </div>
            
            <div>
              <div className="text-sm text-gray-400 mb-1">Allowed IPs</div>
              <div className="p-3 bg-gray-800 border border-gray-700 rounded-md text-white text-sm">
                0.0.0.0/0, ::/0
              </div>
            </div>
            
            <div>
              <div className="text-sm text-gray-400 mb-1">DNS</div>
              <div className="p-3 bg-gray-800 border border-gray-700 rounded-md text-white text-sm">
                1.1.1.1, 8.8.8.8
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <div className="text-sm text-gray-400">Interface Configuration</div>
              <button className="text-blue-400 text-xs hover:text-blue-300">Edit</button>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-md p-3 font-mono text-xs text-white overflow-x-auto">
              <pre>{`[Interface]
PrivateKey = kJHLdj376JHd873bJHFGkjsdh487tJH8iH3874tu=
Address = 10.7.0.2/24
DNS = 1.1.1.1, 8.8.8.8

[Peer]
PublicKey = HxUVw48763KMds987Rw9g87Jhfrt5DnOkm8URcxcvY=
AllowedIPs = 0.0.0.0/0, ::/0
Endpoint = wg.nexusvpn.example.com:51820
PersistentKeepalive = 25`}</pre>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2 justify-between border-t border-gray-800">
          <Button variant="outline" size="sm" leftIcon={<QrCode size={16} />}>
            Show QR Code
          </Button>
          <Button size="sm" leftIcon={<Download size={16} />}>
            Download Config
          </Button>
        </CardFooter>
      </Card>
      
      <Card>
        <CardHeader className="flex items-center justify-between">
          <CardTitle className="flex items-center">
            <Wifi size={18} className="mr-2 text-blue-400" />
            Peer Management
          </CardTitle>
          <Button size="sm" leftIcon={<Plus size={16} />}>
            Add Peer
          </Button>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-800/50">
                <tr className="text-xs text-gray-400">
                  <th className="py-2 px-3 text-left">Name</th>
                  <th className="py-2 px-3 text-left">Public Key</th>
                  <th className="py-2 px-3 text-left">Allowed IPs</th>
                  <th className="py-2 px-3 text-left">Last Handshake</th>
                  <th className="py-2 px-3 text-left">Transfer</th>
                  <th className="py-2 px-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr className="text-sm text-gray-300">
                  <td className="py-2 px-3">iPhone</td>
                  <td className="py-2 px-3 font-mono text-xs">HxUV...xcvY=</td>
                  <td className="py-2 px-3">10.7.0.2/32</td>
                  <td className="py-2 px-3">3 minutes ago</td>
                  <td className="py-2 px-3">
                    <div className="flex items-center">
                      <span className="mr-2">↓ 1.2 GB</span>
                      <span>↑ 234 MB</span>
                    </div>
                  </td>
                  <td className="py-2 px-3 text-right">
                    <button className="text-gray-400 hover:text-rose-400">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
                <tr className="text-sm text-gray-300">
                  <td className="py-2 px-3">MacBook</td>
                  <td className="py-2 px-3 font-mono text-xs">djK8...aBc7=</td>
                  <td className="py-2 px-3">10.7.0.3/32</td>
                  <td className="py-2 px-3">Just now</td>
                  <td className="py-2 px-3">
                    <div className="flex items-center">
                      <span className="mr-2">↓ 4.6 GB</span>
                      <span>↑ 853 MB</span>
                    </div>
                  </td>
                  <td className="py-2 px-3 text-right">
                    <button className="text-gray-400 hover:text-rose-400">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
                <tr className="text-sm text-gray-300">
                  <td className="py-2 px-3">Linux Server</td>
                  <td className="py-2 px-3 font-mono text-xs">Rtg7...0pQw=</td>
                  <td className="py-2 px-3">10.7.0.4/32</td>
                  <td className="py-2 px-3">1 hour ago</td>
                  <td className="py-2 px-3">
                    <div className="flex items-center">
                      <span className="mr-2">↓ 8.7 GB</span>
                      <span>↑ 1.2 GB</span>
                    </div>
                  </td>
                  <td className="py-2 px-3 text-right">
                    <button className="text-gray-400 hover:text-rose-400">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WireGuardConfig;