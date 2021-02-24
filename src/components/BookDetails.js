import React, { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import { useParams, useRouteMatch, Route, Switch, Link } from 'react-router-dom'
import Loading from '../ui/Loading'
import BookGeneral from './book-details/BookGeneral'
import BookAuthors from './book-details/BookAuthors'
import BookPhotos from './book-details/BookPhotos'
import BookMenu from './book-details/BookMenu'

function BookDetails() {
  const { id } = useParams()
  const [book, setBook] = useState(null)
  const match = useRouteMatch()

  useEffect(() => {
    const getBookFromFb = async () => {
      try {
        const docRef = await firebase.firestore().collection('books').doc(id)
        const doc = await docRef.get()
        setBook(doc.data())
      } catch (error) {
        console.error(error)
      }
    }
    getBookFromFb()
  }, [id])

  return (
    <div>
      <h2>Book Details</h2>
      <BookMenu url={match.url} />
      {book ? (
        <Switch>
          <Route path={`${match.path}`} exact>
            <BookGeneral book={book} />
          </Route>
          <Route path={`${match.path}authors`}>
            <BookAuthors book={book} />
          </Route>
          <Route path={`${match.path}photos`}>
            <BookPhotos book={book} />
          </Route>
        </Switch>
      ) : (
        <Loading />
      )}
    </div>
  )
}

export default BookDetails
