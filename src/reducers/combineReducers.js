import { combineReducers } from 'redux';
import ListReducer from './listReducer';

const RootReducer = combineReducers(
  {
    reduceList: ListReducer
  }
)

export default RootReducer;