import React from 'react';

import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import EmployeeListScreen from '../screens/EmployeeListScreen';
import EmployeeScreen from '../screens/EmployeeScreen';

export const AppNavigator = StackNavigator({
  login: { screen: LoginScreen },
  employeeList: { screen: EmployeeListScreen },
  employee: { screen: EmployeeScreen }
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);