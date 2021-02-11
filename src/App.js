import React, { useState } from 'react'
import firebase from 'firebase/app'

function App() {
  const db = firebase.firestore()

  const [book, setBook] = useState({
    title: '',
    pages: '',
    publishDate: '',
  })

  const [loading, setLoading] = useState(false)

  const [error, setError] = useState('')

  const onChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    })
  }

  const onBookSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const docRef = await db.collection('books').add({
        ...book,
        pages: parseInt(book.pages),
        publishDate: new Date(book.publishDate),
      })

      console.log(docRef.id)
      setBook({
        title: '',
        pages: '',
        publishDate: '',
      })
    } catch (e) {
      console.log('error: ', error)
      setError('An error occurred while saving the book')
      setLoading(false)
    }
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
          <button type="submit">{loading ? 'Loading' : 'Save'}</button>
        </div>
        {error && <p className="err">{error}</p>}
      </form>
    </div>
  )
}

export default App
