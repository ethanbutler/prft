import React, { Component } from 'react'
import './Feed.scss'

const feedBase = 'feed'

class Feed extends Component {
  render() {
    const { children } = this.props
    return (
      <section className={`${feedBase}`}>
        {children}
      </section>
    )
  }
}

export default Feed
