import React, { Component } from 'react'
import './Filter.scss';

const filterBase = 'filter'

class Filter extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const { termList, terms } = this.props
    return(
      <div className={`${filterBase}`}>
        <span className={`${filterBase}-label`}>Filter:</span>
        <ul className={`${filterBase}-list`}>
          {termList.map(item => {
            return(
              <li
                className={`${filterBase}-item ${terms.includes(item.id) ? `${filterBase}-item--active` : ''}`}
                onClick={() => this.props.handler(item.id)}
                onKeyPress={() => this.props.handler(item.id)}
              >{item.term}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Filter
