import React, { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import BookList from './components/BookList.js'
import BookForm from './components/BookForm.js'
import './styles.css'

function App() {
  const db = firebase.firestore()

  const [book, setBook] = useState({
    title: '',
    pages: '',
    publishDate: '',
  })

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

  return (
    <div>
      <h1>Book Library</h1>
      <BookForm book={book} setBook={setBook} />
      <BookList books={books} />
    </div>
  )
}

export default App
