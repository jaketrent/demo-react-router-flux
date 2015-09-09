var _books = []

export function setBooks(books) {
  _books = books
}

export function getBooks() {
  return _books
}

export function findBook(id) {
  const matches = (_books || []).filter(book => book.id === parseInt(id))
  return !!matches ? matches[0] : null
}