import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import pageData from './pageDataReducer'
import termData from './termReducer'
import blogPosts from './blogPostsReducer'

export default combineReducers({
  routing: routerReducer,
  pageData,
  termData,
  blogPosts
})
