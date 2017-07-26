import React, { Component } from 'react'
import { connect } from 'react-redux'
import data from '../data/projects.json'
import Feed from '../components/Feed'
import Filter from '../components/Filter'
import Item from '../components/Item'
import './Oss.scss'

const baseTermId = 18
const ossBase = 'oss'

class Oss extends Component {
  constructor(props){
    super(props)
    this.projects = data.projects.filter(project => {
      return project.project_type.includes(baseTermId)
    })
    this.termList = [
      {
        id: 20,
        term: 'JavaScript'
      },
      {
        id: 19,
        term: 'WordPress'
      }
    ]
  }

  componentWillMount(){
    this.props.updateSlug()
  }

  htmlMarkup(__html){
    return {__html}
  }

  render(){
    const { projects } = this
    const terms = this.props.termData.oss
    let hasItems = false
    return(
      <Feed>
        <div className={`${ossBase}-intro`}>
          <h2>Open Source Projects</h2>
          <p>Below are projects that I've worked on that I've released to the public.</p>
          <p>The only thing that makes me happier than others opening GitHub issues is when I close those issues, so have at it.</p>
          <Filter terms={terms} termList={this.termList} handler={this.props.updateTerms} />
        </div>
        <div>
          {projects.map(project => {
            if(terms.length){
              hasItems = true
              let skip = false
              terms.map(termId => {
                if(termId === baseTermId) return false
                if(project.project_type.indexOf(termId) < 0){
                  skip = true
                } else {
                  return false
                }
                return false
              })

              if(skip) return false
            }

            let quoteHtml, toolsHtml, downloadHtml

            const options = project.project_options

            const { download, timeframe, url } = options
            const quote = options.project_quote
            const tools = options.tools_used

            if(quote){
              quoteHtml = <small className={`${ossBase}-quote`}>{quote}</small>
            }

            if(download){
              downloadHtml = <a href={download}>Download Project</a>
            }

            if(tools){
              toolsHtml = <div>
                <span>Tools used:</span>
                <ul className={`${ossBase}-tools tools`}>
                  {tools.split('\n').map(tool => {
                    return <li className={`tools-single`}>{tool}</li>
                  })}
                </ul>
              </div>
            }

            return (
              <Item classBase={`${ossBase}`}>
                <h3 className={`${ossBase}-heading`}>{project.title.rendered}</h3>
                <small>{timeframe}</small>
                {quoteHtml}
                <div dangerouslySetInnerHTML={this.htmlMarkup(project.content.rendered)}></div>
                <a target="_blank" rel="noopener noreferrer" className="projectLink" href={url}>View Project</a>
                {downloadHtml}
                {toolsHtml}
              </Item>
            )
          })}
          {!hasItems ? null : <div>
            <p className={`alert`}>Sorry, no items matched your filters.</p>
          </div>}
        </div>
      </Feed>
    )
  }
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => {
  return ({
    updateSlug: () => dispatch({
      type: 'CHANGE_SLUG',
      slug: 'oss'
    }),
    updateTerms: (termId) => dispatch({
      type:        'TOGGLE_TERM',
      contentType: 'oss',
      termId
    })
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Oss)
