import * as api from './api'

import appDispatcher from './app-dispatcher'

export function fetch() {
  appDispatcher.dispatch({
    type: 'FETCH'
  })
  api.fetch()
    .then(res => {
      appDispatcher.dispatch({
        type: 'FETCH_SUCCESS',
        books: res.data.books
      })
    })
}