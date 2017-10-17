import { NavigationActions } from 'react-navigation';

import { LOGIN_USER_SUCCESS } from '../actions/types';
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

    default:
       nextState = AppNavigator.router.getStateForAction(action, state);
  }

  return nextState || state;
};
