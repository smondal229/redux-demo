import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RootReducer from './reducers/combineReducers'
import AddTodo from './components/addTodo';
import List from './components/List';
import './App.css';

function App() {
  const store = createStore(RootReducer);
  return (
    <div className="App">
      <Provider store = {store} >
        <AddTodo />
        <List />
      </Provider>
    </div>
  );
}

export default App;
