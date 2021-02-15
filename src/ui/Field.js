import React from 'react'

function Field(props) {
  return (
    <div>
      <label htmlFor="book-pages">{props.labelText}: </label>
      {props.children}
    </div>
  )
}

export default Field
