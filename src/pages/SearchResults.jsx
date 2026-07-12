import { useSearchParams, Link } from 'react-router-dom'
import { searchArticles, getCollection } from '../data.js'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import SearchBar from '../components/SearchBar.jsx'

export default function SearchResults() {
  const [params] = useSearchParams()
  const q = params.get('q') || ''
  const results = searchArticles(q)

  return (
    <div className="page">
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Search' }]} />

      <h1 className="search-title">Search results</h1>
      <div className="collection-search">
        <SearchBar />
      </div>

      {q && (
        <p className="search-meta">
          {results.length} result{results.length === 1 ? '' : 's'} for “{q}”
        </p>
      )}

      {results.length > 0 ? (
        <ul className="article-list">
          {results.map((a) => {
            const col = getCollection(a.collection)
            return (
              <li key={a.slug}>
                <Link to={`/article/${a.slug}`} className="article-row">
                  <span className="article-row-tag">{col?.title}</span>
                  <span className="article-row-title">{a.title}</span>
                  <span className="article-row-excerpt">{a.excerpt}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      ) : (
        q && (
          <div className="empty-state">
            <p>No articles matched your search.</p>
            <Link to="/" className="btn">Browse all collections</Link>
          </div>
        )
      )}
    </div>
  )
}
