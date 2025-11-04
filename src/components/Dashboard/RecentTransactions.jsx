import React from 'react'
import { ArrowDownCircle, ArrowUpCircle, ExternalLink } from 'lucide-react'
import './RecentTransactions.css'

const RecentTransactions = () => {
  const transactions = [
    {
      id: 1,
      type: 'deposit',
      description: 'Salary Deposit',
      amount: 5000,
      date: '2024-01-15',
      status: 'completed',
      category: 'Income'
    },
    {
      id: 2,
      type: 'withdrawal',
      description: 'Investment Purchase',
      amount: -2500,
      date: '2024-01-14',
      status: 'completed',
      category: 'Investment'
    },
    {
      id: 3,
      type: 'deposit',
      description: 'Dividend Payment',
      amount: 150,
      date: '2024-01-13',
      status: 'completed',
      category: 'Dividend'
    },
    {
      id: 4,
      type: 'withdrawal',
      description: 'Monthly Rent',
      amount: -1200,
      date: '2024-01-12',
      status: 'pending',
      category: 'Expense'
    },
    {
      id: 5,
      type: 'deposit',
      description: 'Freelance Payment',
      amount: 800,
      date: '2024-01-11',
      status: 'completed',
      category: 'Income'
    },
  ]

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'var(--success)'
      case 'pending':
        return 'var(--warning)'
      case 'failed':
        return 'var(--error)'
      default:
        return 'var(--neutral-400)'
    }
  }

  return (
    <div className="transactions-container">
      <div className="transactions-header">
        <div>
          <h3 className="transactions-title">Recent Transactions</h3>
          <p className="transactions-subtitle">Latest financial activity</p>
        </div>
        <button className="view-all-btn">
          View All
          <ExternalLink size={16} />
        </button>
      </div>
      <div className="transactions-list">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="transaction-item">
            <div className="transaction-icon">
              {transaction.type === 'deposit' ? (
                <ArrowDownCircle size={24} color="var(--success)" />
              ) : (
                <ArrowUpCircle size={24} color="var(--error)" />
              )}
            </div>
            <div className="transaction-details">
              <div className="transaction-main">
                <span className="transaction-description">{transaction.description}</span>
                <span 
                  className={`transaction-amount ${transaction.type === 'deposit' ? 'positive' : 'negative'}`}
                >
                  {transaction.type === 'deposit' ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
                </span>
              </div>
              <div className="transaction-meta">
                <span className="transaction-date">{formatDate(transaction.date)}</span>
                <span className="transaction-category">{transaction.category}</span>
                <span 
                  className="transaction-status"
                  style={{ color: getStatusColor(transaction.status) }}
                >
                  {transaction.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentTransactions
