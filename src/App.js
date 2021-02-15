import React, { useState } from 'react'
import BookList from './components/BookList.js'
import BookForm from './components/BookForm.js'
import { ToasterProvider } from './ui/ToasterContext'
import './styles.css'

function App() {
  return (
    <ToasterProvider>
      <div>
        <h1>Book Library</h1>
        <BookForm />
        <BookList />
      </div>
    </ToasterProvider>
  )
}

export default App
