const pageDataReducer = (state = {}, action) => {
  switch(action.type){
    case 'CHANGE_SLUG':
      return Object.assign({}, state, {
        slug: action.slug
      })
    default:
      return state
  }
}

export default pageDataReducer
