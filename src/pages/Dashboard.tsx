import { useState } from 'react'
import ModuleMenubar from '../components/ModuleMenubar'
import '../styles/pages.css'

function Dashboard() {
  const [message, setMessage] = useState('')

  const handleAction = (action: string) => {
    setMessage(`Action executed: ${action}`)
    setTimeout(() => setMessage(''), 3000)
  }

  const moduleItems = [
    { label: 'Refresh', onClick: () => handleAction('Refresh') },
    { label: 'Export', onClick: () => handleAction('Export') },
    { label: 'Share', onClick: () => handleAction('Share') },
  ]

  return (
    <div className="page-container">
      <ModuleMenubar title="Dashboard" items={moduleItems} />
      
      <div className="page-content">
        <div className="card">
          <h3>Welcome to Dashboard</h3>
          <p>This is a global menu system that persists across all pages.</p>
          <p>Use the menu at the top to navigate between sections.</p>
        </div>

        <div className="card">
          <h3>Module-level Actions</h3>
          <p>Each page has its own module menu with contextual actions.</p>
          <p>Click the menu icon (⋮) above to see available actions for this page.</p>
        </div>

        {message && <div className="message">{message}</div>}
      </div>
    </div>
  )
}

export default Dashboard
