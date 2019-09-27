import React from 'react';
import ListItem from './ListItem';
import ToggleComplete from '../actions/toggleTask';
import RemoveTodo from '../actions/removeTodo';
import { connect } from 'react-redux';

const List = (props) => {
  const Items= props.items;

  return (<ul>
    { 
      Items.map((item) => (<ListItem key={item.id} {...item} 
                            onToggle = {() => props.toggleComplete(item.id) }
                            onRemove = {() => props.removeItem(item.id) }
                          />))
    }
  </ul>);
}

const mapStateToProps = (state) =>{
  return {
    items: state.ListReducer.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleComplete: (id) => { dispatch(ToggleComplete(id)) },
    removeItem: (id) => { dispatch(RemoveTodo(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);