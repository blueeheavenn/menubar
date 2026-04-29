import { useState } from 'react'
import '../styles/module-menubar.css'

interface ModuleMenubarProps {
  title: string
  items?: Array<{
    label: string
    onClick: () => void
  }>
}

function ModuleMenubar({ title, items = [] }: ModuleMenubarProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="module-menubar">
      <div className="module-header">
        <h2 className="module-title">{title}</h2>
        {items.length > 0 && (
          <button
            className={`module-toggle ${isExpanded ? 'expanded' : ''}`}
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label="Toggle module actions"
          >
            ⋮
          </button>
        )}
      </div>
      
      {items.length > 0 && isExpanded && (
        <ul className="module-actions">
          {items.map((item, index) => (
            <li key={index}>
              <button 
                onClick={item.onClick}
                className="module-action-btn"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ModuleMenubar
