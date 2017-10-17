import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import EmployeeList from '../components/EmployeeList';

export default class EmployeeListScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Employee List',
      headerRight: (
        <TouchableOpacity            
          onPress={() => navigation.navigate('employeeCreate')}>
          <Text style={{ backgroundColor: 'rgba(0,0,0,0)', color: 'rgba(0,122,255,1)'}}>
          Create Employee
          </Text>
        </TouchableOpacity>        
      ) 
    }   
  }

  render() { 
    return (
      <EmployeeList navigation={this.props.navigation} />
    )
  }
}
