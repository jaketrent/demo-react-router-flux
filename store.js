import autobind from 'autobind-decorator'
import EventEmitter from 'events'

import appDispatcher from './app-dispatcher'

@autobind
class Store extends EventEmitter {
  constructor() {
    super()
    this._books = []
    appDispatcher.register(this.handleMessage)
  }
  listen(listener) {
    this.addListener('change', listener)
  }
  unlisten(listener) {
    this.removeListener('change', listener)
  }
  emitChange() {
    this.emit('change')
  }
  getBooks() {
    return this._books
  }
  findBook(id) {
    const matches = (this._books || []).filter(book => book.id === parseInt(id))
    return !!matches ? matches[0] : null
  }
  handleMessage(payload) {
    switch(payload.type) {
      case 'FETCH_SUCCESS':
        this._books = payload.books
        this.emitChange()
        break
    }
  }
}

const store = new Store()

export default store





//var _books = []
//
//export function setBooks(books) {
//  _books = books
//}
//
//export function getBooks() {
//  return _books
//}
//
//export function findBook(id) {
//}