import React from 'react'
import { TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import './MarketOverview.css'

const MarketOverview = () => {
  const marketData = [
    {
      symbol: 'AAPL',
      name: 'Apple Inc.',
      price: 175.43,
      change: 2.34,
      changePercent: 1.35,
      volume: '45.2M',
      trend: 'up'
    },
    {
      symbol: 'GOOGL',
      name: 'Alphabet Inc.',
      price: 142.56,
      change: -1.23,
      changePercent: -0.85,
      volume: '28.5M',
      trend: 'down'
    },
    {
      symbol: 'MSFT',
      name: 'Microsoft Corp.',
      price: 378.85,
      change: 4.12,
      changePercent: 1.10,
      volume: '32.1M',
      trend: 'up'
    },
    {
      symbol: 'AMZN',
      name: 'Amazon.com Inc.',
      price: 151.94,
      change: 0.87,
      changePercent: 0.58,
      volume: '41.3M',
      trend: 'up'
    },
    {
      symbol: 'TSLA',
      name: 'Tesla Inc.',
      price: 248.50,
      change: -3.45,
      changePercent: -1.37,
      volume: '89.7M',
      trend: 'down'
    },
    {
      symbol: 'META',
      name: 'Meta Platforms',
      price: 485.39,
      change: 5.67,
      changePercent: 1.18,
      volume: '22.4M',
      trend: 'up'
    }
  ]

  return (
    <div className="market-overview-container">
      <div className="market-overview-header">
        <div>
          <h3 className="market-overview-title">Market Overview</h3>
          <p className="market-overview-subtitle">Real-time market data and trends</p>
        </div>
        <button className="refresh-btn">
          Refresh
        </button>
      </div>
      <div className="market-table">
        <div className="market-table-header">
          <div className="table-col symbol-col">Symbol</div>
          <div className="table-col name-col">Name</div>
          <div className="table-col price-col">Price</div>
          <div className="table-col change-col">Change</div>
          <div className="table-col volume-col">Volume</div>
        </div>
        <div className="market-table-body">
          {marketData.map((stock, index) => (
            <div key={index} className="market-table-row">
              <div className="table-col symbol-col">
                <span className="symbol">{stock.symbol}</span>
              </div>
              <div className="table-col name-col">
                <span className="stock-name">{stock.name}</span>
              </div>
              <div className="table-col price-col">
                <span className="price">${stock.price.toFixed(2)}</span>
              </div>
              <div className={`table-col change-col ${stock.trend}`}>
                <div className="change-content">
                  {stock.trend === 'up' ? (
                    <TrendingUp size={16} />
                  ) : (
                    <TrendingDown size={16} />
                  )}
                  <span className="change-value">${Math.abs(stock.change).toFixed(2)}</span>
                  <span className="change-percent">({stock.changePercent > 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%)</span>
                </div>
              </div>
              <div className="table-col volume-col">
                <span className="volume">{stock.volume}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MarketOverview
