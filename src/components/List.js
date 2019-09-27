import React from 'react';
import ListItem from './ListItem';
import { connect } from 'react-redux';

const List = (props) => {
  const Items= props.items;

  return (<ul>
    { 
      Items.map((item) => (<ListItem key={item.id} {...item} />))
    }
  </ul>);
}

const mapStateToProps = (state) =>{
  return {
    items: state.ListReducer.items
  }
}

export default connect(mapStateToProps)(List);