import { useState } from 'react';
import { 
  ClockIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  FunnelIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

const History = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const trades = [
    {
      id: '1',
      type: 'buy',
      symbol: 'BNB/USDT',
      amount: '10.0000',
      price: '245.67',
      total: '2,456.70',
      fee: '2.46',
      time: '2024-01-15 14:30:25',
      status: 'completed'
    },
    {
      id: '2',
      type: 'sell',
      symbol: 'BTC/USDT',
      amount: '0.5000',
      price: '42,156.78',
      total: '21,078.39',
      fee: '21.08',
      time: '2024-01-15 12:15:10',
      status: 'completed'
    },
    {
      id: '3',
      type: 'buy',
      symbol: 'ETH/USDT',
      amount: '2.0000',
      price: '2,456.89',
      total: '4,913.78',
      fee: '4.91',
      time: '2024-01-15 10:45:33',
      status: 'completed'
    },
    {
      id: '4',
      type: 'sell',
      symbol: 'ADA/USDT',
      amount: '500.0000',
      price: '0.456',
      total: '228.00',
      fee: '0.23',
      time: '2024-01-14 16:20:15',
      status: 'completed'
    },
    {
      id: '5',
      type: 'buy',
      symbol: 'DOT/USDT',
      amount: '50.0000',
      price: '7.89',
      total: '394.50',
      fee: '0.39',
      time: '2024-01-14 09:30:45',
      status: 'completed'
    },
    {
      id: '6',
      type: 'sell',
      symbol: 'LINK/USDT',
      amount: '20.0000',
      price: '12.34',
      total: '246.80',
      fee: '0.25',
      time: '2024-01-13 20:15:22',
      status: 'completed'
    },
    {
      id: '7',
      type: 'buy',
      symbol: 'BNB/USDT',
      amount: '5.0000',
      price: '240.50',
      total: '1,202.50',
      fee: '1.20',
      time: '2024-01-13 15:45:18',
      status: 'completed'
    },
    {
      id: '8',
      type: 'sell',
      symbol: 'BTC/USDT',
      amount: '0.2500',
      price: '41,890.45',
      total: '10,472.61',
      fee: '10.47',
      time: '2024-01-12 18:30:55',
      status: 'completed'
    }
  ];

  const filteredTrades = trades.filter(trade => {
    const matchesFilter = filter === 'all' || trade.type === filter;
    const matchesSearch = trade.symbol.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-primary-500">
        <h1 className="text-3xl font-bold text-secondary-800 mb-2">
          Trading History
        </h1>
        <p className="text-secondary-600">
          View and analyze your trading activity and performance
        </p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-primary-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-secondary-600">Total Trades</p>
              <p className="text-2xl font-bold text-secondary-800">{trades.length}</p>
            </div>
            <ClockIcon className="h-8 w-8 text-primary-500" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-secondary-600">Buy Orders</p>
              <p className="text-2xl font-bold text-secondary-800">
                {trades.filter(t => t.type === 'buy').length}
              </p>
            </div>
            <ArrowUpIcon className="h-8 w-8 text-green-500" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-secondary-600">Sell Orders</p>
              <p className="text-2xl font-bold text-secondary-800">
                {trades.filter(t => t.type === 'sell').length}
              </p>
            </div>
            <ArrowDownIcon className="h-8 w-8 text-red-500" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-secondary-600">Total Volume</p>
              <p className="text-2xl font-bold text-secondary-800">
                ${trades.reduce((sum, trade) => sum + parseFloat(trade.total.replace(',', '')), 0).toLocaleString()}
              </p>
            </div>
            <ClockIcon className="h-8 w-8 text-blue-500" />
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FunnelIcon className="h-5 w-5 text-secondary-500" />
              <span className="text-sm font-medium text-secondary-700">Filter:</span>
            </div>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-secondary-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Trades</option>
              <option value="buy">Buy Orders</option>
              <option value="sell">Sell Orders</option>
            </select>
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-secondary-400" />
            </div>
            <input
              type="text"
              placeholder="Search by symbol..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-secondary-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent w-64"
            />
          </div>
        </div>
      </div>

      {/* Trades Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-secondary-200">
          <h2 className="text-xl font-bold text-secondary-800">Trade History</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-secondary-200">
            <thead className="bg-secondary-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Symbol
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Fee
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-secondary-200">
              {filteredTrades.map((trade) => (
                <tr key={trade.id} className="hover:bg-secondary-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      trade.type === 'buy'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {trade.type === 'buy' ? (
                        <>
                          <ArrowUpIcon className="h-3 w-3 mr-1" />
                          Buy
                        </>
                      ) : (
                        <>
                          <ArrowDownIcon className="h-3 w-3 mr-1" />
                          Sell
                        </>
                      )}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-secondary-800">{trade.symbol}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-secondary-800">{trade.amount}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-secondary-800">${trade.price}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-secondary-800">${trade.total}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-secondary-600">${trade.fee}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-secondary-600">{trade.time}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {trade.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredTrades.length === 0 && (
          <div className="text-center py-12">
            <ClockIcon className="h-12 w-12 text-secondary-400 mx-auto mb-4" />
            <p className="text-secondary-600">No trades found matching your criteria</p>
          </div>
        )}
      </div>

      {/* Export Options */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-secondary-800 mb-4">Export Data</h2>
        <div className="flex flex-wrap gap-4">
          <button className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
            Export to CSV
          </button>
          <button className="px-4 py-2 bg-secondary-500 text-white rounded-lg hover:bg-secondary-600 transition-colors">
            Export to Excel
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default History;
