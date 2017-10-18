import React, { Component } from 'react'
import { View, Text } from 'react-native';
import EmployeeCreate from '../components/EmployeeCreate'; 
import EmployeeEdit from '../components/EmployeeEdit'; 

export default class EmployeeScreen extends Component {
  static navigationOptions = {
    title: 'Employee'
  }

  render() {
    if (this.props.navigation.state.params && this.props.navigation.state.params.employee) {
      return <EmployeeEdit 
                navigation={this.props.navigation} 
                employee={this.props.navigation.state.params.employee} />
    } else {
      return <EmployeeCreate navigation={this.props.navigation} />
    }        
  }
}
  