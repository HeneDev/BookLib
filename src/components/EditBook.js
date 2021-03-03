import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { ToasterContext } from '../ui/ToasterContext'
import firebase from 'firebase/app'
import BookForm from './BookForm'

function EditBook(props) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const bookObj = {
    title: props.book.title,
    pages: props.book.pages,
    publishDate: props.book.publishDate,
  }

  const [book, setBook] = useState({ ...bookObj })

  const onBookSubmit = async (addToast, e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await firebase
        .firestore()
        .collection('books')
        .doc(props.id)
        .set(
          {
            ...book,
            pages: parseInt(book.pages),
            publishDate: new Date(book.publishDate),
          },
          { merge: true }
        )

      setBook({ ...bookObj })
      setLoading(false)
      addToast({ text: 'Succesfully updated the book', type: 'success' })
    } catch (e) {
      console.log('error: ', error)
      setError('An error occurred while editing the book')
      setLoading(false)
    }
  }

  return (
    <ToasterContext.Consumer>
      {({ addToast }) => (
        <div>
          <BookForm
            {...{ loading, book, setBook, error }}
            onSubmit={onBookSubmit.bind(this, addToast)}
          ></BookForm>
        </div>
      )}
    </ToasterContext.Consumer>
  )
}

export default EditBook
