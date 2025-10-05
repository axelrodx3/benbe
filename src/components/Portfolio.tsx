import { useState } from 'react';
import { 
  CurrencyDollarIcon,
  TrendingUpIcon,
  TrendingDownIcon,
  EyeIcon,
  EyeSlashIcon
} from '@heroicons/react/24/outline';

const Portfolio = () => {
  const [showBalances, setShowBalances] = useState(true);

  const holdings = [
    { symbol: 'BNB', name: 'Binance Coin', amount: '5.6789', value: '1,395.67', change: '+12.5%', changeValue: '+155.23' },
    { symbol: 'BTC', name: 'Bitcoin', amount: '0.1234', value: '5,204.89', change: '+8.3%', changeValue: '+399.45' },
    { symbol: 'ETH', name: 'Ethereum', value: '2,456.89', amount: '1.0000', change: '+6.7%', changeValue: '+154.32' },
    { symbol: 'ADA', name: 'Cardano', amount: '500.0000', value: '228.00', change: '-8.2%', changeValue: '-20.35' },
    { symbol: 'DOT', name: 'Polkadot', amount: '50.0000', value: '394.50', change: '-5.4%', changeValue: '-22.51' },
    { symbol: 'LINK', name: 'Chainlink', amount: '20.0000', value: '246.80', change: '-3.1%', changeValue: '-7.89' },
  ];

  const totalValue = holdings.reduce((sum, holding) => sum + parseFloat(holding.value.replace(',', '')), 0);
  const totalChange = holdings.reduce((sum, holding) => sum + parseFloat(holding.changeValue.replace(/[+,]/g, '')), 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-primary-500">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-secondary-800 mb-2">
              Portfolio Overview
            </h1>
            <p className="text-secondary-600">
              Track your cryptocurrency holdings and performance
            </p>
          </div>
          <button
            onClick={() => setShowBalances(!showBalances)}
            className="p-2 text-secondary-600 hover:text-secondary-800 transition-colors"
          >
            {showBalances ? <EyeSlashIcon className="h-6 w-6" /> : <EyeIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Portfolio Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-primary-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-secondary-600">Total Portfolio Value</p>
              <p className="text-2xl font-bold text-secondary-800">
                {showBalances ? `$${totalValue.toLocaleString()}` : '••••••'}
              </p>
            </div>
            <CurrencyDollarIcon className="h-8 w-8 text-primary-500" />
          </div>
          <div className="mt-4 flex items-center text-sm">
            {totalChange >= 0 ? (
              <div className="flex items-center text-green-600">
                <TrendingUpIcon className="h-4 w-4 mr-1" />
                {showBalances ? `+$${totalChange.toFixed(2)}` : '+••••'}
              </div>
            ) : (
              <div className="flex items-center text-red-600">
                <TrendingDownIcon className="h-4 w-4 mr-1" />
                {showBalances ? `$${totalChange.toFixed(2)}` : '••••'}
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-secondary-600">Total Gainers</p>
              <p className="text-2xl font-bold text-secondary-800">3</p>
            </div>
            <TrendingUpIcon className="h-8 w-8 text-green-500" />
          </div>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <TrendingUpIcon className="h-4 w-4 mr-1" />
            50% of holdings
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-secondary-600">Total Losers</p>
              <p className="text-2xl font-bold text-secondary-800">3</p>
            </div>
            <TrendingDownIcon className="h-8 w-8 text-red-500" />
          </div>
          <div className="mt-4 flex items-center text-sm text-red-600">
            <TrendingDownIcon className="h-4 w-4 mr-1" />
            50% of holdings
          </div>
        </div>
      </div>

      {/* Holdings Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-secondary-200">
          <h2 className="text-xl font-bold text-secondary-800">Holdings</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-secondary-200">
            <thead className="bg-secondary-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Asset
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Value
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  24h Change
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-secondary-200">
              {holdings.map((holding, index) => (
                <tr key={index} className="hover:bg-secondary-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 bg-primary-100 rounded-full flex items-center justify-center">
                        <span className="text-primary-600 font-bold text-sm">{holding.symbol[0]}</span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-secondary-800">{holding.symbol}</div>
                        <div className="text-sm text-secondary-500">{holding.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-secondary-800">
                      {showBalances ? holding.amount : '••••'}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-secondary-800">
                      {showBalances ? `$${holding.value}` : '••••'}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`text-sm font-medium ${
                      holding.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {showBalances ? holding.change : '••••'}
                    </div>
                    <div className={`text-xs ${
                      holding.changeValue.startsWith('+') ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {showBalances ? holding.changeValue : '••••'}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-primary-600 hover:text-primary-900 mr-4">
                      Trade
                    </button>
                    <button className="text-secondary-600 hover:text-secondary-900">
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Allocation Chart Placeholder */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-secondary-800 mb-4">Portfolio Allocation</h2>
        <div className="h-64 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="h-16 w-16 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <CurrencyDollarIcon className="h-8 w-8 text-primary-600" />
            </div>
            <p className="text-secondary-600">Portfolio allocation chart</p>
            <p className="text-sm text-secondary-500">Visual representation of holdings</p>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-secondary-800 mb-4">Performance Metrics</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-secondary-600">Total Return</span>
              <span className="font-medium text-green-600">+15.67%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-secondary-600">Annualized Return</span>
              <span className="font-medium text-green-600">+23.45%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-secondary-600">Sharpe Ratio</span>
              <span className="font-medium text-secondary-800">1.23</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-secondary-600">Max Drawdown</span>
              <span className="font-medium text-red-600">-8.90%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-secondary-800 mb-4">Risk Metrics</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-secondary-600">Portfolio Beta</span>
              <span className="font-medium text-secondary-800">1.15</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-secondary-600">Volatility</span>
              <span className="font-medium text-secondary-800">18.45%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-secondary-600">VaR (95%)</span>
              <span className="font-medium text-red-600">-3.21%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-secondary-600">Diversification Ratio</span>
              <span className="font-medium text-secondary-800">0.78</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
