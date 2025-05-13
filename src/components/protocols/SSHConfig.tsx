import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../ui/Card';
import Button from '../ui/Button';
import { Terminal, Key, Code, Copy, Download } from 'lucide-react';

const SSHConfig: React.FC = () => {
  const [keyType, setKeyType] = React.useState('RSA');
  
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Terminal size={18} className="mr-2 text-blue-400" />
            SSH Connection Details
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <div className="text-sm text-gray-400 mb-1">Host</div>
              <div className="flex">
                <input 
                  type="text" 
                  value="ssh.nexusvpn.example.com" 
                  readOnly
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-l-md px-3 py-2 text-white text-sm"
                />
                <button className="bg-gray-700 border border-gray-600 rounded-r-md px-2">
                  <Copy size={16} className="text-gray-400" />
                </button>
              </div>
            </div>
            
            <div>
              <div className="text-sm text-gray-400 mb-1">Port</div>
              <div className="flex">
                <input 
                  type="text" 
                  value="22" 
                  readOnly
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-l-md px-3 py-2 text-white text-sm"
                />
                <button className="bg-gray-700 border border-gray-600 rounded-r-md px-2">
                  <Copy size={16} className="text-gray-400" />
                </button>
              </div>
            </div>
            
            <div>
              <div className="text-sm text-gray-400 mb-1">Username</div>
              <div className="flex">
                <input 
                  type="text" 
                  value="user-nexus-443" 
                  readOnly
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-l-md px-3 py-2 text-white text-sm"
                />
                <button className="bg-gray-700 border border-gray-600 rounded-r-md px-2">
                  <Copy size={16} className="text-gray-400" />
                </button>
              </div>
            </div>
            
            <div>
              <div className="text-sm text-gray-400 mb-1">Authentication</div>
              <div className="p-3 bg-gray-800 border border-gray-700 rounded-md text-white text-sm">
                Public Key
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <div className="text-sm text-gray-400">Connection Command</div>
              <button className="text-blue-400 text-xs hover:text-blue-300 flex items-center">
                <Copy size={14} className="mr-1" />
                Copy Command
              </button>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-md p-3 font-mono text-sm text-white overflow-x-auto">
              <code>ssh user-nexus-443@ssh.nexusvpn.example.com -p 22 -i ~/.ssh/id_rsa</code>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Key size={18} className="mr-2 text-blue-400" />
            SSH Key Management
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Key Type</label>
              <div className="flex space-x-2">
                {['RSA', 'ED25519', 'ECDSA'].map((type) => (
                  <button
                    key={type}
                    className={`px-3 py-1.5 text-sm rounded ${
                      keyType === type 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                    onClick={() => setKeyType(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-400">Public Key</label>
                <button className="text-blue-400 text-xs hover:text-blue-300 flex items-center">
                  <Copy size={14} className="mr-1" />
                  Copy
                </button>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-md p-3 font-mono text-xs text-gray-300 overflow-x-auto h-16">
                ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC0pA4vzwH0YOhp0nizO9XK9XnX9cVXQ...
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t border-gray-800">
          <Button variant="outline" size="sm" leftIcon={<Key size={16} />}>
            Generate New Key
          </Button>
          <Button size="sm" leftIcon={<Download size={16} />}>
            Download Key Pair
          </Button>
        </CardFooter>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Code size={18} className="mr-2 text-blue-400" />
            Port Forwarding
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <label className="block text-sm font-medium text-gray-400">Active Forwards</label>
                <button className="text-sm text-blue-400 hover:text-blue-300">+ Add New</button>
              </div>
              <table className="w-full">
                <thead className="bg-gray-800/50">
                  <tr className="text-xs text-gray-400">
                    <th className="py-2 px-3 text-left">Type</th>
                    <th className="py-2 px-3 text-left">Local Port</th>
                    <th className="py-2 px-3 text-left">Remote Host</th>
                    <th className="py-2 px-3 text-left">Remote Port</th>
                    <th className="py-2 px-3 text-left">Status</th>
                    <th className="py-2 px-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  <tr className="text-sm text-gray-300">
                    <td className="py-2 px-3">Local</td>
                    <td className="py-2 px-3">8080</td>
                    <td className="py-2 px-3">web-internal.local</td>
                    <td className="py-2 px-3">80</td>
                    <td className="py-2 px-3">
                      <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>
                      Active
                    </td>
                    <td className="py-2 px-3 text-right">
                      <button className="text-gray-400 hover:text-rose-400">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 6H5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr className="text-sm text-gray-300">
                    <td className="py-2 px-3">Remote</td>
                    <td className="py-2 px-3">3306</td>
                    <td className="py-2 px-3">db-server.local</td>
                    <td className="py-2 px-3">3306</td>
                    <td className="py-2 px-3">
                      <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>
                      Active
                    </td>
                    <td className="py-2 px-3 text-right">
                      <button className="text-gray-400 hover:text-rose-400">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 6H5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SSHConfig;