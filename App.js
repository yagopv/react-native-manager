import React, { Component } from 'react';
import Store from './src/store';
import LoginForm from './src/components/LoginForm';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import AppWithNavigationState from './src/navigators/AppNavigator';
import { View } from 'react-native'; 
import { TabNavigator, StackNavigator } from 'react-navigation';

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
    const MainNavigator = StackNavigator({
      login: { screen: LoginScreen },
      employeeList: { screen: EmployeeListScreen },
      employeeCreate: { screen: EmployeeCreateScreen }
    });
 
    return (
      <Provider store={Store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}