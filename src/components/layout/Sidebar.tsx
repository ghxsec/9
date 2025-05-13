import React from 'react';
import { 
  Home, 
  LineChart, 
  Settings, 
  Shield, 
  Terminal,
  User,
  Wifi,
  HardDrive,
  BarChart3,
  Map,
  Zap,
  Globe,
  Menu,
  X,
} from 'lucide-react';
import { cn } from '../../utils/cn';

interface SidebarProps {
  isMobileOpen: boolean;
  setIsMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const navItems = [
  { 
    section: 'Main', 
    items: [
      { name: 'Dashboard', icon: <Home size={20} />, path: '/' },
      { name: 'Analytics', icon: <BarChart3 size={20} />, path: '/analytics' },
      { name: 'Servers', icon: <HardDrive size={20} />, path: '/servers' },
    ] 
  },
  { 
    section: 'Protocols', 
    items: [
      { name: 'SSH', icon: <Terminal size={20} />, path: '/ssh' },
      { name: 'V2Ray', icon: <Shield size={20} />, path: '/v2ray' },
      { name: 'Trojan', icon: <Zap size={20} />, path: '/trojan' },
      { name: 'WireGuard', icon: <Wifi size={20} />, path: '/wireguard' },
    ] 
  },
  { 
    section: 'User', 
    items: [
      { name: 'Account', icon: <User size={20} />, path: '/account' },
      { name: 'Usage', icon: <LineChart size={20} />, path: '/usage' },
      { name: 'Global Map', icon: <Globe size={20} />, path: '/map' },
      { name: 'Settings', icon: <Settings size={20} />, path: '/settings' },
    ] 
  }
];

const Sidebar: React.FC<SidebarProps> = ({ isMobileOpen, setIsMobileOpen }) => {
  const [activePath, setActivePath] = React.useState('/');

  const handleNavigation = (path: string) => {
    setActivePath(path);
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
      
      {/* Mobile Toggle */}
      <button
        className="fixed top-4 right-4 z-50 rounded-full p-2 bg-gray-800 text-gray-200 lg:hidden"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-gray-900 to-black border-r border-gray-800/50 z-50 transition-transform duration-300 ease-in-out',
          'flex flex-col',
          isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
        {/* Logo */}
        <div className="px-6 py-6 flex items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <Shield size={20} className="text-white" />
          </div>
          <div className="ml-3">
            <h1 className="text-xl font-bold text-white">NexusVPN</h1>
            <p className="text-xs text-blue-300">Secure Connection</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 overflow-y-auto">
          {navItems.map((section, idx) => (
            <div key={idx} className="mb-6">
              <h2 className="px-4 mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                {section.section}
              </h2>
              <ul className="space-y-1">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <button
                      onClick={() => handleNavigation(item.path)}
                      className={cn(
                        'w-full flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200',
                        'group hover:bg-gray-800',
                        activePath === item.path
                          ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30 text-blue-300 border-l-2 border-blue-500'
                          : 'text-gray-400 hover:text-gray-200'
                      )}
                    >
                      <span className={cn(
                        'mr-3 transition-colors',
                        activePath === item.path
                          ? 'text-blue-400'
                          : 'text-gray-500 group-hover:text-gray-300'
                      )}>
                        {item.icon}
                      </span>
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Pro Banner */}
        <div className="p-4 m-3 rounded-lg bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border border-blue-700/20">
          <p className="text-sm text-blue-300 font-medium">Upgrade to Pro</p>
          <p className="text-xs text-gray-400 mt-1">Get priority servers & support</p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;