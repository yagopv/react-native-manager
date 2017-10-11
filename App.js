import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import LoginForm from './src/components/LoginForm';
import reducers from './src/reducers';

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyC2OQC3gPsCR1nsw21sbuj0mRwLFWmLGOw",
      authDomain: "reactnativeauth-f4ea8.firebaseapp.com",
      databaseURL: "https://reactnativeauth-f4ea8.firebaseio.com",
      projectId: "reactnativeauth-f4ea8",
      storageBucket: "reactnativeauth-f4ea8.appspot.com", 
      messagingSenderId: "1089079357899"
    }); 
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}