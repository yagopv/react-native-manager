import React, { Component } from 'react';
import Store from './src/store';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import AppWithNavigationState from './src/navigators/AppNavigator';
import { View } from 'react-native'; 
import { TabNavigator, StackNavigator } from 'react-navigation';

export default class App extends Component {
  componentWillMount() {
    if (firebase.apps.length === 0) {
      firebase.initializeApp({
        apiKey: "AIzaSyC2OQC3gPsCR1nsw21sbuj0mRwLFWmLGOw", 
        authDomain: "reactnativeauth-f4ea8.firebaseapp.com",
        databaseURL: "https://reactnativeauth-f4ea8.firebaseio.com",
        projectId: "reactnativeauth-f4ea8",
        storageBucket: "reactnativeauth-f4ea8.appspot.com", 
        messagingSenderId: "1089079357899"
      });
    }
  }

  render() { 
    return (
      <Provider store={Store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}