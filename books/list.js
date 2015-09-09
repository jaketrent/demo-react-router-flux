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
      <li style={styles.navItem} key={book.id}>
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
        <div style={styles.container}>
          <ul style={styles.nav}>
            {this.renderBooks(this.state.books)}
          </ul>
          <main style={styles.main}>
            <RouteHandler />
          </main>
        </div>
      </div>
    )
  }
}


const styles = {
  container: {
    display: 'flex'
  },
  nav: {
    width: 200,
    fontSize: '.8em',
    listStyle: 'none',
    padding: '0 20px 0 0'
  },
  navItem: {
    marginBottom: 6
  },
  main: {
    flex: 1
  }
}