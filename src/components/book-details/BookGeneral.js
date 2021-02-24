import React from 'react'

function BookGeneral({ book }) {
  return (
    <div>
      <h3>General</h3>
      <p>{book.title}</p>
    </div>
  )
}

export default BookGeneral
