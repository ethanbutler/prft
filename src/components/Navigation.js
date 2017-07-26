import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import './Navigation.scss'

const baseName = 'header'

const Navigation = props => (
  <header className={`${baseName} bg`}>
    <nav className={`${baseName}-nav`}>
      <ul className={`${baseName}-menu ${baseName}-primary`}>
        <li tabIndex={0} className={`${baseName}-item`} onClick={() => props.goTo('/oss')}>Open Source</li>
        <li tabIndex={0} className={`${baseName}-item`} onClick={() => props.goTo('/clients')}>Client Work</li>
        <li tabIndex={0} className={`${baseName}-item`} onClick={() => props.goTo('/shiggles')}>Shiggles</li>
        <li tabIndex={0} className={`${baseName}-item`} onClick={() => props.goTo('/talks')}>Talks</li>
        <li tabIndex={0} className={`${baseName}-item`} onClick={() => props.goTo('/')}>Me</li>
        <li tabIndex={0} className={`${baseName}-item`} onClick={() => props.goTo('/blaaaagh')}>Blog</li>
      </ul>
      <ul className={`${baseName}-menu ${baseName}-secondary`}>
        <li className={`${baseName}-item ${baseName}-icon icon icon--twitter`}>
          <a rel="noopener noreferrer" target="_blank" className={`${baseName}-link`} href="https://twitter.com/ethanfbutler">Twitter</a>
        </li>
        <li className={`${baseName}-item ${baseName}-icon icon icon--github`}>
          <a rel="noopener noreferrer" target="_blank" className={`${baseName}-link`} href="https://github.com/ethanbutler">GitHub</a>
        </li>
        <li className={`${baseName}-item ${baseName}-icon icon icon--codepen`}>
          <a rel="noopener noreferrer" target="_blank" className={`${baseName}-link`} href="https://codepen.io/squints">CodePen</a>
        </li>
      </ul>
    </nav>
  </header>
)

const mapDispatchToProps = dispatch => bindActionCreators({
  goTo: path => push(path)
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(Navigation)
