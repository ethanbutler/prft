import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Talks.scss';

import Feed from '../components/Feed'
import Item from '../components/Item'
import { talks } from '../data/talks'

const talkBase = 'talk'

class Talks extends Component {
  constructor(props){
    super(props)
    this.talks = talks
  }

  componentWillMount(){
    this.props.updateSlug()
  }

  htmlMarkup(__html){
    return {__html}
  }

  render(){
    const { talks } = this
    return(
      <Feed>
        {talks.map(talk => {
          const opts = talk.talk_options

          return (
            <Item classBase={`${talkBase}`}>
              <header className={`${talkBase}-header`}>
                <h2 className={`${talkBase}-heading`}>{talk.title.rendered}</h2>
                <small className={`${talkBase}-location`}>{opts.location}</small>
              </header>
              <div className={`${talkBase}-body`}>
                <div className={`${talkBase}-videowrap`}>
                  <div className={`${talkBase}-video`}>
                    <iframe title={talk.title.rendered} src={`https://videopress.com/embed/${opts.embed_code}`} frameborder="0" allowfullscreen></iframe>
                  </div>
                  <script src="https://videopress.com/videopress-iframe.js"></script>
                </div>
                <div className={`${talkBase}-excerptwrap`}>
                  <div className={`${talkBase}-excerpt`} dangerouslySetInnerHTML={this.htmlMarkup(talk.content.rendered)}></div>
                </div>
              </div>
            </Item>
          )
        })}
      </Feed>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    updateSlug: () => dispatch({
      type: 'CHANGE_SLUG',
      slug: 'talks'
    })
  })
}

export default connect(
  null,
  mapDispatchToProps
)(Talks)
