import { combineReducers } from 'redux';
import ListReducer from './listReducer';

const RootReducer = combineReducers(
  {
    ListReducer
  }
)

export default RootReducer;