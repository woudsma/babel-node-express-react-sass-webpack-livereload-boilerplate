import React from 'react'

export default class Title extends React.Component {

  constructor() {
    super()
  }

  render() {
    return (
      <h1>{ this.props.text }</h1>
    )
  }

}
