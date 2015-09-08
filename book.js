import React from 'react'

export default class Book extends React.Component {
  render() {
    return (
      <div>
        Book id: {this.props.params.id}!
      </div>
    )
  }
}
