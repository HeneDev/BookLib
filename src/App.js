import React from 'react'
import BookList from './components/BookList.js'
import BookDetails from './components/BookDetails'
import { ToasterProvider } from './ui/ToasterContext'
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom'
import './styles.css'

function App() {
  return (
    <ToasterProvider>
      <div>
        <Router>
          <h1>
            <Link to="/">Book Library</Link>
          </h1>
          <Switch>
            <Route path="/" exact>
              <BookList />
            </Route>

            <Route path="/book/:id">
              <BookDetails />
            </Route>
          </Switch>
        </Router>
      </div>
    </ToasterProvider>
  )
}

export default App
