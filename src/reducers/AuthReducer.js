import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILED } from '../actions/types'

const initialState = {
  email: '',
  password: '',
  user: null,
  loading: false,
  error: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case EMAIL_CHANGED:
      return { ...state, email: payload }
    case PASSWORD_CHANGED:
      return { ...state, password: payload }
    case LOGIN_USER:
      return { ...state, error: '', loading: true }
    case LOGIN_USER_SUCCESS:
      return { ...state, ...initialState, user: payload  }
    case LOGIN_USER_FAILED:
      return { ...state, error: 'Authentication failed', password: '', loading: false }
    default:
      return state;
  }
}; 
