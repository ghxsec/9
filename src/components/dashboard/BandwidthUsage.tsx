import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import AreaChart from '../charts/AreaChart';
import { DownloadCloud, UploadCloud } from 'lucide-react';

// Mock data for download/upload
const downloadData = [
  { label: '12AM', value: 5 },
  { label: '3AM', value: 2 },
  { label: '6AM', value: 4 },
  { label: '9AM', value: 12 },
  { label: '12PM', value: 25 },
  { label: '3PM', value: 30 },
  { label: '6PM', value: 40 },
  { label: '9PM', value: 35 },
  { label: 'Now', value: 28 },
];

const uploadData = [
  { label: '12AM', value: 2 },
  { label: '3AM', value: 1 },
  { label: '6AM', value: 2 },
  { label: '9AM', value: 5 },
  { label: '12PM', value: 10 },
  { label: '3PM', value: 15 },
  { label: '6PM', value: 12 },
  { label: '9PM', value: 8 },
  { label: 'Now', value: 6 },
];

const BandwidthUsage: React.FC = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle>Bandwidth Usage</CardTitle>
        <div className="flex space-x-4 text-sm">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
            <span className="text-gray-300">Download</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-indigo-500 mr-2"></div>
            <span className="text-gray-300">Upload</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <DownloadCloud size={18} className="text-blue-500 mr-2" />
                <span className="text-gray-300 text-sm">Download</span>
              </div>
              <div className="text-xl font-medium text-white">243.8 GB</div>
            </div>
            <AreaChart 
              data={downloadData} 
              height={140}
              color="#3B82F6"
              gradientFrom="rgba(59, 130, 246, 0.4)"
              gradientTo="rgba(59, 130, 246, 0.0)"
            />
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <UploadCloud size={18} className="text-indigo-500 mr-2" />
                <span className="text-gray-300 text-sm">Upload</span>
              </div>
              <div className="text-xl font-medium text-white">54.2 GB</div>
            </div>
            <AreaChart 
              data={uploadData} 
              height={140}
              color="#6366F1"
              gradientFrom="rgba(99, 102, 241, 0.4)"
              gradientTo="rgba(99, 102, 241, 0.0)"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BandwidthUsage;