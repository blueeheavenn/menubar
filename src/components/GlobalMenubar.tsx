import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../styles/menubar.css'

interface MenuLink {
  path: string
  label: string
}

const menuLinks: MenuLink[] = [
  { path: '/', label: 'Dashboard' },
  { path: '/settings', label: 'Settings' },
]

function GlobalMenubar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string): boolean => {
    return location.pathname === path
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="global-menubar">
      <div className="menubar-container">
        <div className="menubar-logo">
          <span>Menu</span>
        </div>
        
        <button 
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`menubar-links ${isOpen ? 'active' : ''}`}>
          {menuLinks.map((link) => (
            <li key={link.path}>
              <a 
                href={link.path}
                className={`menu-link ${isActive(link.path) ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default GlobalMenubar
