import { posts } from '../data/posts'

const blogPosts = (state = posts, action) => {
  switch(action.type){
    case 'ADD_POST':
      return [...state, action.postData]
    default:
      return state
  }
}

export default blogPosts
