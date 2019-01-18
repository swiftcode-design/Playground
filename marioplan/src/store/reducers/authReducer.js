const initialState = {
  authError: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case "LOGIN_SUCCESS":
    console.log('login !!')
    return { ...state,  authError: null }
  case "LOGIN_ERRROR":
    return { ...state, authError: 'Login Failed' }
  case 'SIGNOUT_SUCCESS':
    console.log('sign out success');
    return { ...state }
  case 'SIGNUP_SUCCESS':
    return { ...state, authError: null }
  case 'SIGNUP_ERROR':
    return { ...state, authError: payload.message }
  default:
    return state
  }
}
