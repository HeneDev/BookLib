import React, { useState } from 'react'

function App() {
  const [book, setBook] = useState({
    title: '',
    pages: '',
    publishDate: '',
  })

  const onChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    })
  }

  const onBookSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <h1>Book Library</h1>

      <form onSubmit={onBookSubmit}>
        <div>
          <label htmlFor="book-title">Title:</label>
          <input
            type="text"
            value={book.title}
            onChange={onChange}
            name="title"
            id="book_title"
          />
        </div>

        <div>
          <label htmlFor="book-pages">Number of pages:</label>
          <input
            type="number"
            value={book.pages}
            onChange={onChange}
            name="pages"
            id="book_pages"
          />
        </div>

        <div>
          <label htmlFor="book-publish-date">Date of publishing:</label>
          <input
            type="date"
            value={book.publishingDate}
            onChange={onChange}
            name="publishDate"
            id="book_publishing_date"
          />
        </div>

        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  )
}

export default App
