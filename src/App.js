import React, { useState, useEffect } from 'react'
import firebase from 'firebase/app'

function App() {
  const db = firebase.firestore()

  const [book, setBook] = useState({
    title: '',
    pages: '',
    publishDate: '',
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [books, setBooks] = useState([])

  useEffect(() => {
    async function fetchData() {
      const snapshot = await db.collection('books').get()
      snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data())
      })
      const booksArray = []

      snapshot.forEach((doc) => {
        booksArray.push({
          id: doc.id,
          ...doc.data(),
        })
      })
      setBooks(booksArray)
    }

    fetchData()
  }, [])

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
        publishDate: new Date(book.publishDate).toDateString(),
      })

      setBook({
        title: '',
        pages: '',
        publishDate: '',
      })
      setLoading(false)
    } catch (e) {
      console.log('error: ', error)
      setError('An error occurred while saving the book')
      setLoading(false)
    }
  }

  return (
    <div>
      <h1>Book Library</h1>

      <h2>Add new Book</h2>
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

      <div className="book-list">
        <h2>Book List</h2>
        {books.map((book) => (
          <div className="book-item">
            <h4>{book.title}</h4>
            <span>
              <strong>Pages: </strong> {book.pages}
            </span>
            <span>
              <strong> Publishing Date: </strong> {book.publishDate}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
