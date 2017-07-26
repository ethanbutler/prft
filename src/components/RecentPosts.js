import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Feed from './Feed'
import './RecentPosts.scss'

const postsBase = 'recent'

class RecentPosts extends Component {
  constructor(props){
    super(props)
    this.posts = props.blogPosts.slice(0, 2)
  }

  htmlMarkup(__html){
    return {__html}
  }

  render() {
    return (
      <div className={postsBase}>
          <h2 className={`${postsBase}-sectionHeading`}>Recently Published</h2>
          <div className={`${postsBase}-list`}>
            {this.posts.map(post => {
              return (
                <article className={`${postsBase}-article`}>
                  <div className={`${postsBase}-inner`}>
                    <h3 className={`${postsBase}-heading}`} dangerouslySetInnerHTML={this.htmlMarkup(post.title.rendered)}></h3>
                    <div dangerouslySetInnerHTML={this.htmlMarkup(post.excerpt.rendered)}></div>
                    <span onClick={() => this.props.goTo(post.slug)} className={`projectLink`}>Read More</span>
                  </div>
                </article>
              )
            })}
          </div>
      </div>
    )
  }
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => bindActionCreators({
  goTo: path => push(path)
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecentPosts)
