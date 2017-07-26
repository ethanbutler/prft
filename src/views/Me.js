import React, { Component } from 'react'
import { connect } from 'react-redux'
import Feed from '../components/Feed'
import './Me.scss';

const workHistory = [
  {
    title:    'Freelance Full-Stack Developer',
    company:  'Self-Employed',
    duration: 'July 16 – Present'
  },
  {
    title:    'Adjunct Lecturer',
    company:  'University of North Carolina at Chapel Hill',
    duration: 'July 16 – Present'
  },
  {
    title:    'Front End Developer',
    company:  'Cuberis',
    location: 'Durham, NC',
    duration: 'July 14 – June 2016'
  },
  {
    title:    'Web Design Intern',
    company:  'Swarm Interactive',
    location: 'Chapel Hill, NC',
    duration: 'July 16 – Present'
  },
]

class Me extends Component {
  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.props.updateSlug()
  }

  render(){
    return(
      <Feed>
        <h2>About Me</h2>
        <p>My name is Ethan Butler. I'm a freelance web developer based in downtown Durham, NC. My main loves are JavaScript and WordPress development, but I'm always looking for new things to learn.</p>
        <p>I've been involved in every part of a project lifecycle, from discovery to prototyping to development to maintenance to project management. I've worked with clients across a variety of sectors, but most notably in the museum/cultural institution space.</p>
        <p>I'm adept at HTML5, CSS3, JavaScript, and PHP. Other technologies I've recently enjoyed working with are React, Ionic 2, Sequelize, Express, and Socket.io. I also cherish any opportunities to flex my Creative Suite muscles.</p>
        <p>If you'd like to see what I'm capable of, please check out the projects on this site.</p>
        <p>When I'm not coding, I nerd out about hip-hop, electronic music production, biking, and vegetarian cooking. I also work as an adjunct lecturer at the University of North Carolina's School of Media in Journalism where I teach coding and infographic design for storytelling.</p>
        <p>If you think we'd work well together, shoot me an email at <strong>e.thom.butler (at) gmail.com</strong>.</p>
        <h2>Work History</h2>
        <div className={`work`}>
        {workHistory.map(work => {
          return (
            <div key={work.title} className={`work-item`}>
              <strong className={`work-title`}>{work.title}</strong>
              &nbsp;
              <span className={`work-company`}>{work.company}</span>
              <br/>
              <address className={`work-address`}>{work.location}</address>,
              <span className={`work-duration`}>{work.duration}</span>
              <p>{work.description}</p>
            </div>
          )
        })}
        </div>
      </Feed>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    updateSlug: () => dispatch({
      type: 'CHANGE_SLUG',
      slug: 'me'
    })
  })
}

export default connect(
  null,
  mapDispatchToProps
)(Me)
