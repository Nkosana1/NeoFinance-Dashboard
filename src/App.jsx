import React, { useState } from 'react'
import Sidebar from './components/Layout/Sidebar'
import Header from './components/Layout/Header'
import Dashboard from './components/Dashboard/Dashboard'
import './styles/App.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="app">
      <Sidebar isOpen={sidebarOpen} />
      <div className={`app-main ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="app-content">
          <Dashboard />
        </main>
      </div>
    </div>
  )
}

export default App
