import React, { useState } from 'react'
import { Button, Message, Field, Modal } from '../ui'
import { ToasterContext } from '../ui/ToasterContext'
import firebase from 'firebase/app'

function BookForm() {
  const [loading, setLoading] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [error, setError] = useState(null)

  const [book, setBook] = useState({
    title: '',
    pages: '',
    publishDate: '',
  })

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

      setBook({
        title: '',
        pages: '',
        publishDate: '',
      })
      setLoading(false)
      setIsModalVisible(false)
      addToast({ text: 'Succesfully created a new book', type: 'success' })
    } catch (e) {
      console.log('error: ', error)
      setError('An error occurred while saving the book')
      setLoading(false)
    }
  }

  const onChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    })
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
            <form onSubmit={onBookSubmit.bind(this, addToast)}>
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
                <Button loading={loading} type="submit">
                  Save
                </Button>
              </div>

              <Message message={error} type="error" />
            </form>
          </Modal>
        </div>
      )}
    </ToasterContext.Consumer>
  )
}

export default BookForm
