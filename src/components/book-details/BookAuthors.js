import React from 'react'
function BookAuthors({ book }) {
  return (
    <div>
      <h4>{book.authors ? book.authors[0] : 'No Authors'}</h4>
    </div>
  )
}

export default BookAuthors
