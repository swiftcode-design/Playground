const initialState = {
  projects: [
    {id: '1', title: 'title', content:'lorem asdf a'},
    {id: '2', title: 'title', content:'lorem asdf a'},
    {id: '3', title: 'title', content:'lorem asdf a'},
  ]
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case "CREATE_PROJECT":
    console.log('crated project', payload)
    return { ...state, ...payload }
  case 'CREATE_PROJECT_ERROR':
    console.log('payload', payload)
    return state
  default:
    return state
  }
}
