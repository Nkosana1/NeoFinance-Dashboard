import React, { useState } from 'react'
import Sidebar from './components/layout/Sidebar/Sidebar'
import Header from './components/layout/Header/Header'
import Dashboard from './pages/Dashboard/Dashboard'
import Footer from './components/layout/Footer/Footer'
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
        <Footer />
      </div>
    </div>
  )
}

export default App
