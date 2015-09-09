var assign = require('lodash/object/assign')
var Events = require('events')

var appDispatcher = require('./app-dispatcher')

var _books = []

var booksStore = assign({}, Events.EventEmitter.prototype, {
  listen: function (listener) {
    this.addListener('change', listener)
  },
  unlisten: function () {
    this.removeListener('change', listener)
  },
  emitChange: function () {
    this.emit('change')
  },
  getBooks: function () {
    return _books
  },
  findBooks: function (id) {
    return _books.filter(function (book) {
      return book.id === parseInt(id)
    })[0]
  }
})

booksStore.dispatchToken = appDispatcher.register(function (payload) {
  switch(payload.type) {
    case 'FETCH_SUCCESS':
      _books = payload.books
      this.emitChange()
      break
  }
}.bind(booksStore))

module.exports = booksStore