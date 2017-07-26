import React, { Component } from 'react'
import { connect } from 'react-redux'
import data from '../data/projects.json'
import Feed from '../components/Feed'
import Filter from '../components/Filter'
import Item from '../components/Item'
import './ClientWork.scss'

const baseTermId = 11
const itemBase = 'client'

class ClientWork extends Component {
  constructor(props){
    super(props)
    this.projects = data.projects.filter(project => project.project_type.includes(baseTermId))
    this.termList = [
      {
        id: 17,
        term: 'Commercial'
      },
      {
        id: 12,
        term: 'Digitalization'
      },
      {
        id: 14,
        term: 'Higher Education'
      },
      {
        id: 16,
        term: 'Storytelling'
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
    const terms = this.props.termData.client
    let hasItems = false
    return(
      <Feed>
        <Filter terms={terms} termList={this.termList} handler={this.props.updateTerms} />
        {projects.map(project => {
          const { url } = project.project_options

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

          let toolsHtml

          const tools = project.project_options.tools_used

          if(tools){
            toolsHtml = <div>
              <strong>Features:</strong>
              <ul className={`${itemBase}-tools tools`}>
                {tools.split('\n').map(tool => {
                  return <li className={`tools-single`}>{tool}</li>
                })}
              </ul>
            </div>
          }

          return (
            <Item classBase={`${itemBase}`}>
              <div className={`img-wrap`}>
                <img src={project.featured_media_objects[2][0]} alt={`${project.title.rendered} Screenshot`} />
              </div>
              <div className={`${itemBase}-inner`}>
                <h2 className={`${itemBase}-heading`}>{project.title.rendered}</h2>
                <div dangerouslySetInnerHTML={this.htmlMarkup(project.content.rendered)}></div>
                <a target="_blank" rel="noopener noreferrer" className="projectLink" href={url}>View Project</a>
                {toolsHtml}
              </div>
            </Item>
          )
        })}
        {!hasItems ? null : <div>
          <p className={`alert`}>Sorry, no items matched your filters.</p>
        </div>}
      </Feed>
    )
  }
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => {
  return ({
    updateSlug: () => dispatch({
      type: 'CHANGE_SLUG',
      slug: 'clientwork'
    }),
    updateTerms: (termId) => dispatch({
      type:        'TOGGLE_TERM',
      contentType: 'client',
      termId
    })
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientWork)
