import React, { Component } from 'react'
import { connect } from 'react-redux'
import Feed from '../components/Feed'

class BlogPost extends Component {
  constructor(props){
    super(props)
    console.log(props)
  }

  componentWillMount(){
    this.props.updateSlug(this.props.postData.slug)
  }

  htmlMarkup(__html){
    return {__html}
  }

  render(){
    const { postData } = this.props
    return(
      <Feed>
        <h2 dangerouslySetInnerHTML={this.htmlMarkup(postData.title.rendered)}></h2>
        <div dangerouslySetInnerHTML={this.htmlMarkup(postData.content.rendered)}></div>
      </Feed>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    updateSlug: (slug) => dispatch({
      type: 'CHANGE_SLUG',
      slug: 'blog'
    })
  })
}

export default connect(
  null,
  mapDispatchToProps
)(BlogPost)
