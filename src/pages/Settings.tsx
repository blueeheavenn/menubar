import { useState } from 'react'
import ModuleMenubar from '../components/ModuleMenubar'
import '../styles/pages.css'

function Settings() {
  const [message, setMessage] = useState('')

  const handleAction = (action: string) => {
    setMessage(`Settings action: ${action}`)
    setTimeout(() => setMessage(''), 3000)
  }

  const moduleItems = [
    { label: 'Save', onClick: () => handleAction('Settings saved') },
    { label: 'Reset', onClick: () => handleAction('Settings reset') },
    { label: 'Help', onClick: () => handleAction('Help opened') },
  ]

  return (
    <div className="page-container">
      <ModuleMenubar title="Settings" items={moduleItems} />
      
      <div className="page-content">
        <div className="card">
          <h3>Application Settings</h3>
          <p>Manage your application preferences here.</p>
        </div>

        <div className="card">
          <h3>Menu System</h3>
          <p><strong>Global Menubar:</strong> Always visible at the top for navigation</p>
          <p><strong>Module Menubar:</strong> Page-specific actions and settings</p>
          <p>This architecture allows consistent navigation while maintaining page-specific functionality.</p>
        </div>

        {message && <div className="message">{message}</div>}
      </div>
    </div>
  )
}

export default Settings
