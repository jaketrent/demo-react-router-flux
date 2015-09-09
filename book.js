import autobind from 'autobind-decorator'
import React from 'react'

import store from './store'

@autobind
export default class Book extends React.Component {
  state = this.getStateFromStores(this.props)
  componentWillMount() {
    store.listen(this.onStoreChange)
  }
  componentWillUnmount() {
    store.unlisten(this.onStoreChange)
  }
  componentWillReceiveProps(newProps) {
    this.setState(this.getStateFromStores(newProps))
  }
  onStoreChange() {
    this.setState(this.getStateFromStores(this.props))
  }
  getStateFromStores(props) {
    return {
      book: store.findBook(props.params.id) || {}
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.book.title} ({this.props.params.id})</h1>
        <img src={this.state.book.cover_url} alt={this.state.book.title} />
        <p>
          {this.state.book.description}
        </p>
      </div>
    )
  }
}
