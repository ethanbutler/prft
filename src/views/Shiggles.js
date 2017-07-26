import React, { Component } from 'react'
import { connect } from 'react-redux'
import data from '../data/projects.json'
import Feed from '../components/Feed'
import Item from '../components/Item'
import './Shiggles.scss'

const baseTermId = 15

const shigBase = 'shiggles'

class Shig extends Component {
  constructor(props){
    super(props)
    this.projects = data.projects.filter(project => {
      return project.project_type.includes(baseTermId)
    })
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
    console.log('terms', terms)
    return(
      <Feed>
        <div className={`${shigBase}-intro`}>
          <h2>For-Fun Projects</h2>
          <p>Below are some things that I've worked on that I've released to the public – but that <em>probably</em> aren't going to be useful to anyone.</p>
          <p>My favorite way to learn new technologies is by building frivolous projects, so consider this section a monument to that.</p>
        </div>
        <div>
          {projects.map(project => {
            let quoteHtml, toolsHtml, downloadHtml

            const options = project.project_options

            const { download, timeframe, url } = options
            const quote = options.project_quote
            const tools = options.tools_used

            if(download){
              downloadHtml = <a href={download}>Download Project</a>
            }

            if(quote){
              quoteHtml = <small className={`${shigBase}-quote`}>{quote}</small>
            }

            if(tools){
              toolsHtml = <div>
                <span>Tools used:</span>
                <ul className={`${shigBase}-tools tools`}>
                  {tools.split('\n').map(tool => {
                    return <li className={`tools-single`}>{tool}</li>
                  })}
                </ul>
              </div>
            }

            return (
              <Item classBase={`${shigBase}`}>
                <div className={`img-wrap`}>
                  <img src={project.featured_media_objects[2][0]} alt={`${project.title.rendered} Screenshot`} />
                </div>
                <div className={`${shigBase}-inner`}>
                  <h3 className={`${shigBase}-heading`}>{project.title.rendered}</h3>
                  <small>{timeframe}</small>
                  {quoteHtml}
                  <div dangerouslySetInnerHTML={this.htmlMarkup(project.content.rendered)}></div>
                  <a target="_blank" rel="noopener noreferrer" className="projectLink" href={url}>View Project</a>
                  {downloadHtml}
                  {toolsHtml}
                </div>
              </Item>
            )
          })}
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
      slug: 'shiggles'
    })
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shig)
