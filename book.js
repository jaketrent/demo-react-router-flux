import React from 'react'

import * as store from './store'

export default class Book extends React.Component {
  getBook() {
    return store.findBook(this.props.params.id) || {}
  }
  render() {
    const book = this.getBook(this.props.params.id)
    return (
      <div>
        <h1>{book.title} ({this.props.params.id})</h1>
        <img src={book.cover_url} alt={book.title} />
        <p>
          {book.description}
        </p>
      </div>
    )
  }
}
