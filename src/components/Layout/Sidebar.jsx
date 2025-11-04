import React from 'react'
import { 
  LayoutDashboard, 
  TrendingUp, 
  Wallet, 
  PieChart, 
  BarChart3, 
  Settings,
  Briefcase,
  Users
} from 'lucide-react'
import './Sidebar.css'

const Sidebar = ({ isOpen }) => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: TrendingUp, label: 'Analytics' },
    { icon: Wallet, label: 'Portfolio' },
    { icon: PieChart, label: 'Assets' },
    { icon: BarChart3, label: 'Reports' },
    { icon: Briefcase, label: 'Transactions' },
    { icon: Users, label: 'Clients' },
    { icon: Settings, label: 'Settings' },
  ]

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="logo-icon">NF</div>
          {isOpen && <span className="logo-text">NeoFinance</span>}
        </div>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item, index) => {
          const Icon = item.icon
          return (
            <a
              key={index}
              href="#"
              className={`nav-item ${item.active ? 'active' : ''}`}
              onClick={(e) => e.preventDefault()}
            >
              <Icon size={20} />
              {isOpen && <span>{item.label}</span>}
            </a>
          )
        })}
      </nav>
      <div className="sidebar-footer">
        {isOpen && (
          <div className="upgrade-card">
            <div className="upgrade-icon">✨</div>
            <h4>Upgrade to Pro</h4>
            <p>Unlock advanced features</p>
            <button className="upgrade-btn">Upgrade Now</button>
          </div>
        )}
      </div>
    </aside>
  )
}

export default Sidebar
