import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SearchBar({ onSearch, placeholder = 'Search for articles...' }) {
  const [value, setValue] = useState('')
  const navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault()
    const q = value.trim()
    if (!q) return
    if (onSearch) {
      onSearch(q)
    } else {
      navigate(`/search?q=${encodeURIComponent(q)}`)
    }
  }

  return (
    <form className="search-bar" onSubmit={submit} role="search">
      <span className="search-icon" aria-hidden="true">🔍</span>
      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        aria-label="Search articles"
      />
      <button type="submit">Search</button>
    </form>
  )
}
