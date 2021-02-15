import React from 'react'

function BookItem({ book }) {
  return (
    <div className="book-item">
      <h4>{book.title}</h4>
      <span>
        <strong>Pages: </strong> {book.pages}
      </span>
      <span>
        <strong> Publishing Date: </strong> {book.publishDate}
      </span>
    </div>
  )
}

export default BookItem
