import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="brand-mark">M</span>
          <span>My Funded Futures Help Center</span>
        </div>

        <div className="footer-social">
          <a href="https://www.youtube.com/@MyFundedFuturesPropFirm" target="_blank" rel="noreferrer" aria-label="YouTube">YouTube</a>
          <a href="https://www.instagram.com/myfundedfutures/" target="_blank" rel="noreferrer" aria-label="Instagram">Instagram</a>
          <a href="https://www.twitter.com/MyFundedFutures" target="_blank" rel="noreferrer" aria-label="X">X</a>
          <a href="https://www.linkedin.com/company/myfundedfutures/" target="_blank" rel="noreferrer" aria-label="LinkedIn">LinkedIn</a>
        </div>

        <nav className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/collection/getting-started">Getting Started</Link>
          <Link to="/collection/traders-evaluation">Evaluation</Link>
          <Link to="/collection/payout-information">Payouts</Link>
          <Link to="/collection/trading-platforms">Platforms</Link>
        </nav>

        <p className="footer-copy">© {new Date().getFullYear()} My Funded Futures. All rights reserved.</p>
      </div>
    </footer>
  )
}
