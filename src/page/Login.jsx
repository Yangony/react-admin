import React, { Component } from 'react'

export default class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dat: []
    }
  }

  componentDidMount () {
  }

  render () {
    return (
      <div className="login">
        <div className="news_details">
          Login
        </div>
      </div>
    )
  }
}
