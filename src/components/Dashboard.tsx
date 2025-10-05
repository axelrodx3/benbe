import { 
  TrendingUpIcon, 
  TrendingDownIcon, 
  CurrencyDollarIcon,
  ChartBarIcon 
} from '@heroicons/react/24/outline';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-primary-500">
        <h1 className="text-3xl font-bold text-secondary-800 mb-2">
          Trading Dashboard
        </h1>
        <p className="text-secondary-600">
          Monitor your trading performance and market overview
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-secondary-600">Total Portfolio Value</p>
              <p className="text-2xl font-bold text-secondary-800">$12,345.67</p>
            </div>
            <CurrencyDollarIcon className="h-8 w-8 text-green-500" />
          </div>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <TrendingUpIcon className="h-4 w-4 mr-1" />
            +2.5% from yesterday
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-secondary-600">24h P&L</p>
              <p className="text-2xl font-bold text-secondary-800">+$234.56</p>
            </div>
            <TrendingUpIcon className="h-8 w-8 text-blue-500" />
          </div>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <TrendingUpIcon className="h-4 w-4 mr-1" />
            +1.9% gain
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-secondary-600">Active Positions</p>
              <p className="text-2xl font-bold text-secondary-800">8</p>
            </div>
            <ChartBarIcon className="h-8 w-8 text-red-500" />
          </div>
          <div className="mt-4 flex items-center text-sm text-red-600">
            <TrendingDownIcon className="h-4 w-4 mr-1" />
            3 positions down
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-primary-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-secondary-600">Win Rate</p>
              <p className="text-2xl font-bold text-secondary-800">67%</p>
            </div>
            <TrendingUpIcon className="h-8 w-8 text-primary-500" />
          </div>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <TrendingUpIcon className="h-4 w-4 mr-1" />
            +5% this week
          </div>
        </div>
      </div>

      {/* Market Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-secondary-800 mb-4">Top Gainers</h2>
          <div className="space-y-3">
            {[
              { symbol: 'BNB/USDT', price: '$245.67', change: '+12.5%' },
              { symbol: 'BTC/USDT', price: '$42,156.78', change: '+8.3%' },
              { symbol: 'ETH/USDT', price: '$2,456.89', change: '+6.7%' },
            ].map((coin, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div>
                  <p className="font-semibold text-secondary-800">{coin.symbol}</p>
                  <p className="text-sm text-secondary-600">{coin.price}</p>
                </div>
                <span className="text-green-600 font-bold">{coin.change}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-secondary-800 mb-4">Top Losers</h2>
          <div className="space-y-3">
            {[
              { symbol: 'ADA/USDT', price: '$0.456', change: '-8.2%' },
              { symbol: 'DOT/USDT', price: '$7.89', change: '-5.4%' },
              { symbol: 'LINK/USDT', price: '$12.34', change: '-3.1%' },
            ].map((coin, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <div>
                  <p className="font-semibold text-secondary-800">{coin.symbol}</p>
                  <p className="text-sm text-secondary-600">{coin.price}</p>
                </div>
                <span className="text-red-600 font-bold">{coin.change}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-secondary-800 mb-4">Recent Activity</h2>
        <div className="space-y-3">
          {[
            { action: 'Bought', symbol: 'BNB/USDT', amount: '10 BNB', price: '$245.67', time: '2 hours ago' },
            { action: 'Sold', symbol: 'BTC/USDT', amount: '0.5 BTC', price: '$42,156.78', time: '4 hours ago' },
            { action: 'Bought', symbol: 'ETH/USDT', amount: '2 ETH', price: '$2,456.89', time: '6 hours ago' },
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  activity.action === 'Bought' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {activity.action}
                </span>
                <div>
                  <p className="font-semibold text-secondary-800">{activity.symbol}</p>
                  <p className="text-sm text-secondary-600">{activity.amount} at {activity.price}</p>
                </div>
              </div>
              <span className="text-sm text-secondary-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
