var React = require('react')

var store = require('./store')

var Book = React.createClass({
  getInitialState() {
    return this.getStateFromStore(this.props)
  },
  componentWillMount: function () {
    store.listen(this.onStoreChanged)
  },
  componentWillUnmount: function () {
    store.unlisten(this.onStoreChanged)
  },
  componentWillReceiveProps: function (newProps) {
    this.setState(this.getStateFromStore(newProps))
  },
  onStoreChanged: function () {
    this.setState(this.getStateFromStore(this.props))
  },
  getStateFromStore: function (props) {
    return {
      book: store.findBooks(props.params.id) || {}
    }
  },
  render: function () {
    return (
      <div>
        <h1>{this.state.book.title} ({this.props.params.id})</h1>
        <div>{this.state.book.author}</div>
        <p>{this.state.book.description}</p>
        <img src={this.state.book.cover_url} alt={this.state.book.title} />
      </div>
    )
  }
})

module.exports = Book










