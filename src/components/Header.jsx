import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const go = (path) => {
    setOpen(false)
    navigate(path)
  }

  return (
    <header className="site-header">
      <div className="bar">
        <div className="bar-inner">
          <Link to="/" className="brand" aria-label="Home">
            <span className="brand-mark">M</span>
            <span className="brand-text">My Funded Futures<br />Help Center</span>
          </Link>

          <nav className="top-nav">
            <button className="nav-link" onClick={() => go('/')}>Home</button>
            <button className="nav-link" onClick={() => go('/collection/getting-started')}>Collections</button>
            <a className="nav-link ext" href="https://myfundedfutures.com/" target="_blank" rel="noreferrer">Go to website</a>
            <a className="nav-link ext" href="https://discord.gg/myfundedfutures" target="_blank" rel="noreferrer">Discord</a>
            <a className="nav-link ext" href="https://youtube.com/@myfundedfuturespropfirm" target="_blank" rel="noreferrer">YouTube</a>
          </nav>

          <button className="menu-toggle" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            ☰
          </button>
        </div>

        {open && (
          <div className="mobile-menu">
            <button onClick={() => go('/')}>Home</button>
            <button onClick={() => go('/collection/getting-started')}>Collections</button>
            <a href="https://myfundedfutures.com/" target="_blank" rel="noreferrer">Go to website</a>
            <a href="https://discord.gg/myfundedfutures" target="_blank" rel="noreferrer">Discord</a>
            <a href="https://youtube.com/@myfundedfuturespropfirm" target="_blank" rel="noreferrer">YouTube</a>
          </div>
        )}
      </div>
    </header>
  )
}
