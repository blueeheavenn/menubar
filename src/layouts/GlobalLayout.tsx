import { Outlet } from 'react-router-dom'
import GlobalMenubar from '../components/GlobalMenubar'
import '../styles/layouts.css'

function GlobalLayout() {
  return (
    <div className="global-layout">
      <GlobalMenubar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  )
}

export default GlobalLayout
