import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILED } from './types';
import firebase from 'firebase';

export const emailChanged = (text) => ({
  type: EMAIL_CHANGED,
  payload: text
});

export const passwordChanged = (text) => ({
  type: PASSWORD_CHANGED,
  payload: text 
});

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error) => {
        console.log(error);
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(error => loginUserFailed(dispatch, error));
      });
  }
}

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS, 
    payload: user
  });
}

const loginUserFailed = (dispatch, error) => {
  dispatch({
    type: LOGIN_USER_FAILED, 
    payload: error
  });
}