import { Link } from 'react-router-dom'
import { collections, articles } from '../data.js'
import SearchBar from '../components/SearchBar.jsx'

export default function Home() {
  const featured = [
    'industry-leading-futures-prop-firm',
    'getting-the-most-out-of-support',
    'navigating-your-dashboard',
    'restricted-countries-policy',
    'news-trading-policy'
  ]

  return (
    <div className="page home">
      <section className="hero">
        <div className="hero-inner">
          <h1>MyFundedFutures Resource overida222</h1>
          <p className="hero-sub">Search our knowledge base or browse by category.</p>
          <SearchBar />
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Featured Articles</h2>
        <div className="featured-grid">
          {featured.map((slug) => {
            const a = articles[slug]
            const col = collections.find((c) => c.slug === a.collection)
            return (
              <Link key={slug} to={`/article/${slug}`} className="featured-card">
                <span className="featured-tag">{col?.title}</span>
                <h3>{a.title}</h3>
                <p>{a.excerpt}</p>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Browse Collections</h2>
        <div className="collection-grid">
          {collections.map((c) => (
            <Link key={c.slug} to={`/collection/${c.slug}`} className="collection-card">
              <span className="collection-icon" aria-hidden="true">{c.icon}</span>
              <h3>{c.title}</h3>
              <p>{c.description}</p>
              <span className="collection-count">{c.articles.length} articles</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
