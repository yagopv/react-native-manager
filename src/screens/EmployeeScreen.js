import React, { Component } from 'react'
import { View, Text } from 'react-native';
import EmployeeCreate from '../components/EmployeeCreate'; 
import EmployeeEdit from '../components/EmployeeEdit'; 

export default class EmployeeScreen extends Component {
  static navigationOptions = {
    title: 'Employee'
  }

  render() {
    const { employee } = this.props.navigation.state.params;

    if (employee) {
      return <EmployeeEdit navigation={this.props.navigation} employee={employee} />
    } else {
      return <EmployeeCreate navigation={this.props.navigation} />
    }       
  }
}
  