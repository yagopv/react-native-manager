import { NavigationActions } from 'react-navigation';

import { LOGIN_USER_SUCCESS, EMPLOYEE_CREATE } from '../actions/types';
import { AppNavigator } from '../navigators/AppNavigator';

const firstAction = AppNavigator.router.getActionForPathAndParams('login');
const initialState = AppNavigator.router.getStateForAction(firstAction);

export default (state = initialState, action) => {
  let nextState;

  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'employeeList'})
          ]
        }),
        state
      );
      break;  
    case EMPLOYEE_CREATE:
    case EMPLOYEE_SAVE_SUCCESS:
      nextState = AppNavigator.router.getStateForAction(NavigationActions.back(), state);
      break;
    default:
       nextState = AppNavigator.router.getStateForAction(action, state);
  }

  return nextState || state;
};
