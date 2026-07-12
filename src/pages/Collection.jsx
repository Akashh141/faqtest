import { useParams, Link } from 'react-router-dom'
import { getCollection, getArticlesForCollection } from '../data.js'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import SearchBar from '../components/SearchBar.jsx'

export default function Collection() {
  const { slug } = useParams()
  const collection = getCollection(slug)
  const articles = getArticlesForCollection(slug)

  if (!collection) {
    return (
      <div className="page">
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Not found' }]} />
        <p>Collection not found. <Link to="/">Return home</Link>.</p>
      </div>
    )
  }

  return (
    <div className="page">
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: collection.title }]} />

      <header className="collection-header">
        <span className="collection-icon big" aria-hidden="true">{collection.icon}</span>
        <div>
          <h1>{collection.title}</h1>
          <p>{collection.description}</p>
          <span className="collection-count">{articles.length} articles</span>
        </div>
      </header>

      <div className="collection-search">
        <SearchBar placeholder={`Search "${collection.title}"...`} />
      </div>

      <ul className="article-list">
        {articles.map((a) => (
          <li key={a.slug}>
            <Link to={`/article/${a.slug}`} className="article-row">
              <span className="article-row-title">{a.title}</span>
              <span className="article-row-excerpt">{a.excerpt}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
