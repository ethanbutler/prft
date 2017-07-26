import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import Feed from '../components/Feed'
import Item from '../components/Item'

class Blog extends Component {
  constructor(props){
    super(props)
    console.log(props)
  }

  componentWillMount(){
    this.props.updateSlug()
  }

  htmlMarkup(__html){
    return {__html}
  }

  render(){
    const { props } = this
    const { blogPosts } = props
    return(
      <Feed>
        {blogPosts.map(post => {
          return (
            <Item key={post.title.rendered}>
              <h2 dangerouslySetInnerHTML={this.htmlMarkup(post.title.rendered)}></h2>
              <div dangerouslySetInnerHTML={this.htmlMarkup(post.excerpt.rendered)}></div>
              <span onClick={() => props.goTo(post.slug)} className={`projectLink`}>Read More</span>
            </Item>
          )
        })}
      </Feed>
    )
  }
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => bindActionCreators({
  goTo: path => push(path),
  updateSlug: () => dispatch({
    type: 'CHANGE_SLUG',
    slug: 'blog'
  })
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog)
