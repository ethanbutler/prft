import React       from 'react'
import { connect } from 'react-redux'
import { Route }   from 'react-router-dom'
import Navigation  from './components/Navigation'
import Hero        from './components/Hero'
import RecentPosts from './components/RecentPosts'
import Footer      from './components/Footer'

// Pages
import Oss        from './views/Oss'
import ClientWork from './views/ClientWork'
import Talks      from './views/Talks'
import Me         from './views/Me'
import Blog       from './views/Blog'
import BlogPost   from './views/BlogPost'
import Shiggles   from './views/Shiggles'

// https://github.com/ReactTraining/react-router/issues/4105#issuecomment-289195202
const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest)
  return React.createElement(component, finalProps)
}

const PropsRoute = ({component, ...rest}) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest)
    }}/>
  )
}

const App = props => (
  <div data-slug={props.pageData.slug}>
    <Navigation />
    <div>
      <Route path="/" component={Hero} />
      <Route exact path="/" component={Me} />
      <Route exact path="/oss" component={Oss} />
      <Route exact path="/shiggles" component={Shiggles} />
      <Route exact path="/talks" component={Talks} />
      <Route exact path="/clients" component={ClientWork} />
      <Route exact path="/blaaaagh" component={Blog} />
      {!props.blogPosts ? null : props.blogPosts.map(post => {
        return (
          <PropsRoute key={post.slug} exact path={`/${post.slug}`} component={BlogPost} postData={post} />
        )
      })}
    </div>
    <RecentPosts posts={props.blogPosts} />
    <Footer />
  </div>
)

const mapStateToProps = state => state

export default connect(
  mapStateToProps
)(App)
