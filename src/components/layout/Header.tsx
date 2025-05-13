import React from 'react';
import { Bell, UserCircle, Search } from 'lucide-react';
import Button from '../ui/Button';
import StatusIndicator from '../ui/StatusIndicator';
import { cn } from '../../utils/cn';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn('bg-gray-900/30 backdrop-blur-md border-b border-gray-800/50 flex h-16 items-center px-4 lg:px-6', className)}>
      <div className="flex flex-1 items-center justify-between">
        {/* Page Title */}
        <div>
          <h1 className="text-xl font-semibold text-white">Dashboard</h1>
        </div>
        
        {/* Search and Actions */}
        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Search Box */}
          <div className="hidden md:flex items-center relative">
            <Search size={18} className="absolute left-3 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-gray-950/50 border border-gray-800 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 pl-10 pr-4 py-2 w-56"
            />
          </div>
          
          {/* Connection Status */}
          <div className="hidden lg:flex">
            <StatusIndicator status="online" label="Connected" />
          </div>
          
          {/* Quick Connect Button */}
          <div className="hidden sm:block">
            <Button size="sm" variant="primary">
              Quick Connect
            </Button>
          </div>
          
          {/* Notifications */}
          <button className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-gray-800">
            <Bell size={20} />
          </button>
          
          {/* User Menu */}
          <button className="flex items-center text-gray-400 hover:text-white">
            <span className="hidden md:block mr-2 font-medium text-sm">John Doe</span>
            <UserCircle size={28} className="text-gray-400" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;