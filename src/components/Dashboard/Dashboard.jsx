import React from 'react'
import MetricsCards from './MetricsCards'
import RevenueChart from './Charts/RevenueChart'
import PortfolioChart from './Charts/PortfolioChart'
import RecentTransactions from './RecentTransactions'
import MarketOverview from './MarketOverview'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
        <p className="dashboard-subtitle">Welcome back! Here's what's happening with your finances today.</p>
      </div>
      
      <MetricsCards />
      
      <div className="dashboard-grid">
        <div className="dashboard-grid-item grid-span-2">
          <RevenueChart />
        </div>
        <div className="dashboard-grid-item">
          <PortfolioChart />
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-grid-item">
          <RecentTransactions />
        </div>
        <div className="dashboard-grid-item grid-span-2">
          <MarketOverview />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
