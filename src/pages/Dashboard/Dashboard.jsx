import React from 'react'
import StatsGrid from '../../components/dashboard/StatsGrid/StatsGrid'
import RevenueChart from '../../components/ui/Charts/RevenueChart'
import PieChart from '../../components/ui/Charts/PieChart'
import RecentActivity from '../../components/dashboard/RecentActivity/RecentActivity'
import MarketOverview from '../../components/dashboard/MarketOverview/MarketOverview'
import './Dashboard.css'

const Dashboard = () => {
  const portfolioData = [
    { name: 'Stocks', value: 45, color: '#2563eb' },
    { name: 'Bonds', value: 25, color: '#10b981' },
    { name: 'Crypto', value: 20, color: '#f59e0b' },
    { name: 'Real Estate', value: 10, color: '#06b6d4' },
  ]

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
        <p className="dashboard-subtitle">Welcome back! Here's what's happening with your finances today.</p>
      </div>
      
      <StatsGrid />
      
      <div className="dashboard-grid">
        <div className="dashboard-grid-item grid-span-2">
          <RevenueChart />
        </div>
        <div className="dashboard-grid-item">
          <PieChart data={portfolioData} title="Portfolio Distribution" subtitle="Asset allocation breakdown" />
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-grid-item">
          <RecentActivity />
        </div>
        <div className="dashboard-grid-item grid-span-2">
          <MarketOverview />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
