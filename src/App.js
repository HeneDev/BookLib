import React, { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import BookList from './BookList'
import { Button, Message, Field } from './ui/index.js'

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
        <Field labelText="Title" id="book-title">
          <input
            type="text"
            value={book.title}
            onChange={onChange}
            name="title"
            id="book_title"
          />
        </Field>

        <Field labelText="Number of pages" id="book-pages">
          <input
            type="number"
            value={book.pages}
            onChange={onChange}
            name="pages"
            id="book_pages"
          />
        </Field>

        <Field labelText="Date of publishing" id="book-publish-date">
          <input
            type="date"
            value={book.publishingDate}
            onChange={onChange}
            name="publishDate"
            id="book_publishing_date"
          />
        </Field>

        <div>
          <Button loading={loading} label="Save" type="submit" />
        </div>
        <Message message={error} type="error" />
      </form>
      <BookList books={books} />
    </div>
  )
}

export default App
