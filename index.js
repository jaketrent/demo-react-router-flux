var React = require('react')
var Router = require('react-router')

var Books = require('./books/list')
var Book = require('./books/show')

var Route = Router.Route
var RouteHandler = Router.RouteHandler
var Link = Router.Link
var DefaultRoute = Router.DefaultRoute

var App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Books Browser</h1>
        <nav>
          <Link to="booksPage">Books</Link>
        </nav>
        <main>
          <RouteHandler />
        </main>
      </div>
    )
  }
})

var AppIndex = React.createClass({
  render: function () {
    return (
      <h2>Welcome, ya'll!</h2>
    )
  }
})

var routes = (
  <Route handler={App}>
    <DefaultRoute handler={AppIndex} />
    <Route name="booksPage" path="books" handler={Books}>
      <Route name="book" path=":id" handler={Book} />
    </Route>
  </Route>
)

Router.run(routes, Router.HashLocation, function (Root) {
  React.render(<Root />, document.getElementById('app'))
})
