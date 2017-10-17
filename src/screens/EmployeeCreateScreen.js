import React, { Component } from 'react'
import { View, Text } from 'react-native';
import EmployeeCreate from '../components/EmployeeCreate'; 

export default class EmployeeCreateScreen extends Component {
  static navigationOptions = {
    title: 'Employee Create'
  }

  render() {
    return (
      <EmployeeCreate navigation={this.props.navigation} /> 
    )
  }
}
