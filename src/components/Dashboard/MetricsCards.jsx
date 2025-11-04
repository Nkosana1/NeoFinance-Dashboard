import React from 'react'
import { TrendingUp, DollarSign, Users, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import './MetricsCards.css'

const MetricsCards = () => {
  const metrics = [
    {
      title: 'Total Revenue',
      value: '$45,231',
      change: '+12.5%',
      changeType: 'positive',
      icon: DollarSign,
      gradient: 'var(--gradient-primary)',
      delay: 0
    },
    {
      title: 'Active Users',
      value: '2,340',
      change: '+8.2%',
      changeType: 'positive',
      icon: Users,
      gradient: 'var(--gradient-success)',
      delay: 0.1
    },
    {
      title: 'Total Profit',
      value: '$12,450',
      change: '-3.1%',
      changeType: 'negative',
      icon: TrendingUp,
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      delay: 0.2
    },
    {
      title: 'Growth Rate',
      value: '24.8%',
      change: '+4.7%',
      changeType: 'positive',
      icon: ArrowUpRight,
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
      delay: 0.3
    }
  ]

  return (
    <div className="metrics-cards">
      {metrics.map((metric, index) => {
        const Icon = metric.icon
        return (
          <div 
            key={index} 
            className="metric-card"
            style={{ animationDelay: `${metric.delay}s` }}
          >
            <div className="metric-header">
              <div className="metric-icon" style={{ background: metric.gradient }}>
                <Icon size={24} color="white" />
              </div>
              <div className={`metric-change ${metric.changeType}`}>
                {metric.changeType === 'positive' ? (
                  <ArrowUpRight size={16} />
                ) : (
                  <ArrowDownRight size={16} />
                )}
                <span>{metric.change}</span>
              </div>
            </div>
            <div className="metric-content">
              <h3 className="metric-title">{metric.title}</h3>
              <p className="metric-value">{metric.value}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MetricsCards
