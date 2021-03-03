import React, { useState, useEffect } from 'react'
import BookItem from './BookItem'
import AddBook from './AddBook'
import Loading from '../ui/Loading'
import firebase from 'firebase/app'

function BookList() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const db = firebase.firestore()

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
    <div className="book-list">
      <AddBook />
      <h2>Book List</h2>
      {!books.length ? (
        <Loading />
      ) : (
        books.map((book) => <BookItem book={book} key={book.id} />)
      )}
    </div>
  )
}

export default BookList
