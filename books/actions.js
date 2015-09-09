var api = require('./api')

var appDispatcher = require('./app-dispatcher')

function fetch() {
  api.fetch()
    .then(function (res) {
      console.log('res', res)
      fetchSuccess(res.data.books)
    })

  appDispatcher.dispatch({
    type: 'FETCH'
  })
}

function fetchSuccess(books) {
  console.log('books in success', books)
  appDispatcher.dispatch({
    type: 'FETCH_SUCCESS',
    books: books
  })
}

exports.fetch = fetch