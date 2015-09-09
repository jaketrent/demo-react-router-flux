import React from 'react'
import Router from 'react-router'

const { RouteHandler, Link } = Router

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Books Browser</h1>
        <nav>
          <Link to="books">Books</Link>
        </nav>
        <RouteHandler />
      </div>
    )
  }
}
