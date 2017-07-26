import React, { Component } from 'react'
import './Item.scss'

const itemBase = 'item'

class Item extends Component {
  render() {
    const { children, classBase } = this.props
    return (
      <article className={`${itemBase} ${itemBase}--${classBase} ${classBase}`}>
        <div className={`${itemBase}-inner`}>
          {children}
        </div>
      </article>
    )
  }
}

export default Item
