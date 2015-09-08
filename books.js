import React from 'react'
import Router from 'react-router'

const { RouteHandler, Link } = Router

export default class Books extends React.Component {
  render() {
    return (
      <div>
        <h2>Books</h2>
        <nav>
          <Link to="book" params={{ id: 'drive' }}>Drive Book</Link>
        </nav>
        <RouteHandler />
      </div>
    )
  }
}
