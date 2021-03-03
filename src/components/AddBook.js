import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Modal } from '../ui'
import { ToasterContext } from '../ui/ToasterContext'
import firebase from 'firebase/app'
import BookForm from './BookForm'

function AddBook() {
  const [loading, setLoading] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [error, setError] = useState(null)

  const history = useHistory()

  const bookObj = {
    title: '',
    pages: '',
    publishDate: '',
  }

  const [book, setBook] = useState({ ...bookObj })

  const onBookSubmit = async (addToast, e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const docRef = await firebase
        .firestore()
        .collection('books')
        .add({
          ...book,
          pages: parseInt(book.pages),
          publishDate: new Date(book.publishDate).toDateString(),
        })

      setBook({ ...bookObj })
      setLoading(false)
      setIsModalVisible(false)
      addToast({ text: 'Succesfully created a new book', type: 'success' })
      history.push(`/book/${docRef.id}`)
    } catch (e) {
      console.log('error: ', error)
      setError('An error occurred while saving the book')
      setLoading(false)
    }
  }

  return (
    <ToasterContext.Consumer>
      {({ addToast }) => (
        <div>
          <div>
            <Button onClick={() => setIsModalVisible(true)}>
              Add new book
            </Button>
          </div>
          <Modal
            title="Add new Book"
            show={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          >
            <BookForm
              {...{ loading, book, setBook, error }}
              onSubmit={onBookSubmit.bind(this, addToast)}
            ></BookForm>
          </Modal>
        </div>
      )}
    </ToasterContext.Consumer>
  )
}

export default AddBook
