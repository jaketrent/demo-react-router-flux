import autobind from 'autobind-decorator'
import axios from 'axios'
import React from 'react'
import Router from 'react-router'

import * as actions from './actions'
import store from './store'

const { RouteHandler, Link } = Router

@autobind
export default class Books extends React.Component {
  state = this.getStateFromStores()
  componentWillMount() {
    store.listen(this.onStoreChange)
    actions.fetch()
  }
  componentWillUnmount() {
    store.unlisten(this.onStoreChange)
  }
  onStoreChange() {
    this.setState(this.getStateFromStores())
  }
  getStateFromStores() {
    return {
      books: store.getBooks()
    }
  }
  renderBook(book) {
    return (
      <li key={book.id}>
        <Link to="book" params={{ id: book.id }}>{book.title}</Link>
      </li>
    )
  }
  renderBooks(books) {
    return books.map(this.renderBook)
  }
  render() {
    return (
      <div>
        <h2>Books</h2>
        <ul>
          {this.renderBooks(this.state.books)}
        </ul>
        <RouteHandler />
      </div>
    )
  }
}
