import { combineReducers } from 'redux';
import authenticationReducer from '../../features/authentication/authenticationSlice';
import eventReducer from '../../features/events/eventSlice';
import modalReducer from '../common/modals/modalSlice';
import testReducer from '../../features/sandbox/testSlice';

const rootReducer = combineReducers({
  test: testReducer,
  event: eventReducer,
  authentication: authenticationReducer,
  modals: modalReducer,
});

export default rootReducer;
