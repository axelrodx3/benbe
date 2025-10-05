import { useState } from 'react';
import { 
  ArrowUpIcon, 
  ArrowDownIcon,
  CurrencyDollarIcon,
  ChartBarIcon 
} from '@heroicons/react/24/outline';

const Trade = () => {
  const [orderType, setOrderType] = useState<'market' | 'limit'>('market');
  const [tradeType, setTradeType] = useState<'buy' | 'sell'>('buy');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-primary-500">
        <h1 className="text-3xl font-bold text-secondary-800 mb-2">
          Trading Interface
        </h1>
        <p className="text-secondary-600">
          Execute your trading strategies with precision
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Trading Panel */}
        <div className="lg:col-span-2 space-y-6">
          {/* Chart Placeholder */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-secondary-800 mb-4">Price Chart</h2>
            <div className="h-96 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <ChartBarIcon className="h-16 w-16 text-primary-400 mx-auto mb-4" />
                <p className="text-secondary-600">Chart will be displayed here</p>
                <p className="text-sm text-secondary-500">Real-time price data integration</p>
              </div>
            </div>
          </div>

          {/* Order Book Placeholder */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-secondary-800 mb-4">Order Book</h2>
            <div className="space-y-2">
              {[
                { price: '245.89', amount: '125.67', total: '30,891.23' },
                { price: '245.88', amount: '89.45', total: '21,987.65' },
                { price: '245.87', amount: '156.78', total: '38,543.21' },
                { price: '245.86', amount: '203.45', total: '50,123.45' },
                { price: '245.85', amount: '78.90', total: '19,398.76' },
              ].map((order, index) => (
                <div key={index} className="flex justify-between items-center p-2 bg-red-50 rounded text-sm">
                  <span className="text-red-600 font-medium">{order.price}</span>
                  <span className="text-secondary-600">{order.amount}</span>
                  <span className="text-secondary-500">{order.total}</span>
                </div>
              ))}
              
              <div className="h-8 bg-primary-100 rounded flex items-center justify-center">
                <span className="text-primary-600 font-bold text-lg">245.67</span>
              </div>
              
              {[
                { price: '245.66', amount: '98.76', total: '24,321.09' },
                { price: '245.65', amount: '134.56', total: '33,065.78' },
                { price: '245.64', amount: '87.34', total: '21,456.78' },
                { price: '245.63', amount: '156.89', total: '38,543.21' },
                { price: '245.62', amount: '203.12', total: '49,876.54' },
              ].map((order, index) => (
                <div key={index} className="flex justify-between items-center p-2 bg-green-50 rounded text-sm">
                  <span className="text-green-600 font-medium">{order.price}</span>
                  <span className="text-secondary-600">{order.amount}</span>
                  <span className="text-secondary-500">{order.total}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trading Form */}
        <div className="space-y-6">
          {/* Trading Pair */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-secondary-800 mb-4">Trading Pair</h2>
            <div className="space-y-3">
              <select className="w-full p-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option>BNB/USDT</option>
                <option>BTC/USDT</option>
                <option>ETH/USDT</option>
                <option>ADA/USDT</option>
              </select>
              <div className="text-center">
                <span className="text-2xl font-bold text-primary-600">245.67 USDT</span>
                <p className="text-sm text-secondary-600">Current Price</p>
              </div>
            </div>
          </div>

          {/* Order Type */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-secondary-800 mb-4">Order Type</h2>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setOrderType('market')}
                className={`p-3 rounded-lg font-medium transition-colors ${
                  orderType === 'market'
                    ? 'bg-primary-500 text-white'
                    : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                }`}
              >
                Market
              </button>
              <button
                onClick={() => setOrderType('limit')}
                className={`p-3 rounded-lg font-medium transition-colors ${
                  orderType === 'limit'
                    ? 'bg-primary-500 text-white'
                    : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                }`}
              >
                Limit
              </button>
            </div>
          </div>

          {/* Buy/Sell Toggle */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-secondary-800 mb-4">Trade Type</h2>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setTradeType('buy')}
                className={`p-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 ${
                  tradeType === 'buy'
                    ? 'bg-green-500 text-white'
                    : 'bg-green-50 text-green-700 hover:bg-green-100'
                }`}
              >
                <ArrowUpIcon className="h-5 w-5" />
                <span>Buy</span>
              </button>
              <button
                onClick={() => setTradeType('sell')}
                className={`p-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 ${
                  tradeType === 'sell'
                    ? 'bg-red-500 text-white'
                    : 'bg-red-50 text-red-700 hover:bg-red-100'
                }`}
              >
                <ArrowDownIcon className="h-5 w-5" />
                <span>Sell</span>
              </button>
            </div>
          </div>

          {/* Order Form */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-secondary-800 mb-4">Place Order</h2>
            <div className="space-y-4">
              {orderType === 'limit' && (
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Limit Price (USDT)
                  </label>
                  <input
                    type="number"
                    placeholder="245.67"
                    className="w-full p-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Amount (BNB)
                </label>
                <input
                  type="number"
                  placeholder="0.00"
                  className="w-full p-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Total (USDT)
                </label>
                <input
                  type="number"
                  placeholder="0.00"
                  className="w-full p-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <button
                className={`w-full p-4 rounded-lg font-bold text-white transition-colors ${
                  tradeType === 'buy'
                    ? 'bg-green-500 hover:bg-green-600'
                    : 'bg-red-500 hover:bg-red-600'
                }`}
              >
                {tradeType === 'buy' ? 'Buy BNB' : 'Sell BNB'}
              </button>
            </div>
          </div>

          {/* Balance */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-secondary-800 mb-4">Balance</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-secondary-600">USDT:</span>
                <span className="font-medium">1,234.56</span>
              </div>
              <div className="flex justify-between">
                <span className="text-secondary-600">BNB:</span>
                <span className="font-medium">5.6789</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trade;
