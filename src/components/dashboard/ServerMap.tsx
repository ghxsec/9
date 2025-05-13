import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';

// Mock data for server locations
const serverLocations = [
  { id: 1, lat: 37.7749, lon: -122.4194, name: 'San Francisco', status: 'online', load: 65 },
  { id: 2, lat: 40.7128, lon: -74.0060, name: 'New York', status: 'online', load: 78 },
  { id: 3, lat: 51.5074, lon: -0.1278, name: 'London', status: 'online', load: 45 },
  { id: 4, lat: 35.6762, lon: 139.6503, name: 'Tokyo', status: 'warning', load: 89 },
  { id: 5, lat: -33.8688, lon: 151.2093, name: 'Sydney', status: 'online', load: 32 },
];

const ServerMap: React.FC = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Global Server Network</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative">
          {/* World Map - Using a simplified world map background image */}
          <div className="h-[300px] bg-gray-900 rounded-lg overflow-hidden relative">
            <div 
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: `url('https://images.pexels.com/photos/4737484/pexels-photo-4737484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></div>
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            
            {/* Server location dots - In a real app, these would be positioned based on geo-coordinates */}
            {serverLocations.map((location) => (
              <div 
                key={location.id}
                className="absolute w-3 h-3 rounded-full transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${((location.lon + 180) / 360) * 100}%`,
                  top: `${((90 - location.lat) / 180) * 100}%`,
                  backgroundColor: location.status === 'online' ? '#10B981' : '#FBBF24',
                  boxShadow: location.status === 'online' 
                    ? '0 0 0 2px rgba(16, 185, 129, 0.2), 0 0 8px rgba(16, 185, 129, 0.6)' 
                    : '0 0 0 2px rgba(251, 191, 36, 0.2), 0 0 8px rgba(251, 191, 36, 0.6)'
                }}
              >
                <div className="absolute top-0 left-0 w-full h-full rounded-full animate-ping opacity-75"
                  style={{
                    backgroundColor: location.status === 'online' ? '#10B981' : '#FBBF24',
                    animationDuration: '3s'
                  }}
                ></div>
                <div 
                  className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-1 whitespace-nowrap bg-gray-800 text-xs text-white px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity"
                >
                  {location.name} ({location.load}% load)
                </div>
              </div>
            ))}
            
            {/* Server stats */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between">
              <div className="bg-gray-900/70 backdrop-blur-sm px-3 py-2 rounded-lg">
                <p className="text-xs text-gray-400">Total Servers</p>
                <p className="text-lg font-bold text-white">156</p>
              </div>
              <div className="bg-gray-900/70 backdrop-blur-sm px-3 py-2 rounded-lg">
                <p className="text-xs text-gray-400">Active Regions</p>
                <p className="text-lg font-bold text-white">24</p>
              </div>
              <div className="bg-gray-900/70 backdrop-blur-sm px-3 py-2 rounded-lg">
                <p className="text-xs text-gray-400">Avg. Latency</p>
                <p className="text-lg font-bold text-white">42ms</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServerMap;