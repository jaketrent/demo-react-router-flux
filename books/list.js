var React = require('react')
var axios = require('axios')

var Router = require('react-router')

var Link = Router.Link
var RouteHandler = Router.RouteHandler

var actions = require('./actions')
var store = require('./store')

var Books = React.createClass({
  getInitialState() {
    return this.getStateFromStore()
  },
  componentWillMount: function () {
    store.listen(this.onStoreChanged)
    actions.fetch()
  },
  componentWillUnmount: function () {
    store.unlisten(this.onStoreChanged)
  },
  onStoreChanged: function () {
    this.setState(this.getStateFromStore())
  },
  getStateFromStore: function () {
    return {
      books: store.getBooks()
    }
  },
  render: function () {
    return (
      <div style={styles.container}>
        <nav style={styles.nav}>
          {
            this.state.books.map(function (book) {
              return (
                <li style={styles.navItem} key={book.id}>
                  <Link to="book" params={{ id: book.id }}>
                    {book.title}
                  </Link>
                </li>
              )
            })
          }
        </nav>
        <main style={styles.main}>
          <RouteHandler />
        </main>
      </div>
    )
  }
})

var styles = {
  container: {
    display: 'flex'
  },
  nav: {
    width: 250,
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

module.exports = Books