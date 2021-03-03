import React from 'react'
import EditBook from '../EditBook'

function BookGeneral({ book }) {
  return (
    <div>
      <h3>General</h3>
      <EditBook book={book} />
    </div>
  )
}

export default BookGeneral
