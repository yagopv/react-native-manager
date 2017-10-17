import React, { Component } from 'react'
import { View, Text } from 'react-native';
import EmployeeForm from '../components/EmployeeForm'; 

export default class EmployeeCreateScreen extends Component {
  static navigationOptions = {
    title: 'Employee Create'
  }

  render() {
    return (
      <EmployeeForm navigation={this.props.navigation} /> 
    )
  }
}
