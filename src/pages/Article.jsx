import { useParams, Link } from 'react-router-dom'
import { getArticle, getCollection, getArticlesForCollection } from '../data.js'
import Breadcrumbs from '../components/Breadcrumbs.jsx'

function Block({ block }) {
  switch (block.type) {
    case 'h':
      return <h2 className="article-h">{block.text}</h2>
    case 'p':
      return <p className="article-p">{block.text}</p>
    case 'list':
      return (
        <ul className="article-list-inline">
          {block.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      )
    case 'note':
      return <div className="callout note">{block.text}</div>
    case 'warn':
      return <div className="callout warn">{block.text}</div>
    default:
      return null
  }
}

export default function Article() {
  const { slug } = useParams()
  const article = getArticle(slug)

  if (!article) {
    return (
      <div className="page">
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Not found' }]} />
        <p>Article not found. <Link to="/">Return home</Link>.</p>
      </div>
    )
  }

  const collection = getCollection(article.collection)
  const siblings = getArticlesForCollection(article.collection)

  return (
    <div className="page article-page">
      <Breadcrumbs
        items={[
          { label: 'Home', to: '/' },
          { label: collection.title, to: `/collection/${collection.slug}` },
          { label: article.title }
        ]}
      />

      <div className="article-layout">
        <article className="article-main">
          <span className="article-collection">{collection.title}</span>
          <h1 className="article-title">{article.title}</h1>
          <p className="article-updated">Last updated: {article.updated}</p>

          <div className="article-body">
            {article.content.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>

          <div className="article-feedback">
            <span>Was this article helpful?</span>
            <button>👍 Yes</button>
            <button>👎 No</button>
          </div>
        </article>

        <aside className="article-side">
          <h3>In this collection</h3>
          <ul className="side-list">
            {siblings.map((a) => (
              <li key={a.slug}>
                <Link
                  to={`/article/${a.slug}`}
                  className={a.slug === slug ? 'active' : ''}
                >
                  {a.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  )
}
