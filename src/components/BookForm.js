import React from 'react'
import { Button, Message, Field, Modal } from '../ui'

function BookForm({ loading, onSubmit, book, setBook, error }) {
  const onChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
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
    </div>
  )
}

export default BookForm
