// Mock WebSocket implementation for demo purposes
export class MockWebSocket {
  private callbacks: Record<string, ((...args: any[]) => void)[]> = {};
  private intervalId: ReturnType<typeof setInterval> | null = null;
  private connected: boolean = false;

  constructor(private url: string) {}

  connect() {
    if (this.connected) return;
    
    this.connected = true;
    setTimeout(() => {
      this.trigger('open', {});
      this.startMockDataTransfer();
    }, 1000);
  }

  disconnect() {
    if (!this.connected) return;
    
    this.connected = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.trigger('close', {});
  }

  on(event: string, callback: (...args: any[]) => void) {
    if (!this.callbacks[event]) {
      this.callbacks[event] = [];
    }
    this.callbacks[event].push(callback);
    return this;
  }

  off(event: string, callback?: (...args: any[]) => void) {
    if (!callback) {
      delete this.callbacks[event];
    } else if (this.callbacks[event]) {
      this.callbacks[event] = this.callbacks[event].filter(cb => cb !== callback);
    }
    return this;
  }

  private trigger(event: string, ...args: any[]) {
    if (this.callbacks[event]) {
      this.callbacks[event].forEach(callback => callback(...args));
    }
  }

  private startMockDataTransfer() {
    this.intervalId = setInterval(() => {
      if (!this.connected) return;
      
      // Generate random traffic data
      const data = {
        type: 'traffic_update',
        timestamp: new Date().toISOString(),
        download: Math.random() * 10 + 1, // 1-11 Mbps
        upload: Math.random() * 5 + 0.5, // 0.5-5.5 Mbps
        latency: Math.floor(Math.random() * 50) + 20, // 20-70ms
      };
      
      this.trigger('message', { data: JSON.stringify(data) });
    }, 5000); // Update every 5 seconds
  }
}

export function createConnection(url: string) {
  const socket = new MockWebSocket(url);
  return socket;
}