import { EMAIL_CHANGED } from '../actions/types'

const initialState = {
  email: '', 
  password: ''
}

export default (state = initialState, { type, payload }) => {  
  switch (type) {
    case EMAIL_CHANGED:
      return { ...state, email: payload }
    default:
      return state;
  }
}; 
