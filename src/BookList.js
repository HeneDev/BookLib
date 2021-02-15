import React from 'react'

function BookList({ books }) {
  return (
    <div className="book-list">
      <h2>Book List</h2>
      {books.map((book) => (
        <div className="book-item" key={book.id}>
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
  )
}

export default BookList
