import React from 'react'
import Router from 'react-router'

import App from './app'
import AppIndex from './app-index'
import Book from './book'
import Books from './books'

const { Route, DefaultRoute } = Router

const routes = (
  <Route handler={App}>
    <DefaultRoute handler={AppIndex} />
    <Route name="books" path="books" handler={Books}>
      <Route name="book" path=":id" handler={Book} />
    </Route>
  </Route>
)

Router.run(routes, Router.HashLocation, Root => {
  React.render(<Root />, document.getElementById('app'))
})
