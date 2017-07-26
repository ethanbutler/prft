const defaultState = {
  oss:    [],
  client: [],
  blog:   []
}

const termReducer = (state = defaultState, action) => {
  switch(action.type){
    case 'TOGGLE_TERM':
      const { contentType, termId } = action
      const terms = state[contentType]

      console.log(terms.indexOf(termId))

      if(terms.indexOf(termId) > -1){
        terms.splice(terms.indexOf(termId), 1)
      } else {
        terms.push(termId)
      }

      let updated = {}
      updated[contentType] = terms

      return Object.assign({}, state, updated)
    default:
      return state
  }
}

export default termReducer
