import React, { Component } from 'react'
import './Footer.scss'

const footerBase = 'footer'

class Footer extends Component {
  render() {
    return (
      <footer className={`${footerBase}`}>
        <small className={`${footerBase}-copy`}>&copy; 2017 Ethan Butler. Proudly built with WordPress, serve-the-base, medusa, and create-react-app.</small>
      </footer>
    )
  }
}

export default Footer
