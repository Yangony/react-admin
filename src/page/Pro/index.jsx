import React, { Component } from 'react'

export default class ProIndex extends Component {
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
      <div className="outer">
        <div className="news_details">
          ProIndex
        </div>
      </div>
    )
  }
}
