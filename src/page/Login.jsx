import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
          <Link to="/pro">login</Link>

        </div>
      </div>
    )
  }
}
