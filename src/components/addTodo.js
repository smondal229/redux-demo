import React, { useState } from 'react';
import { connect } from 'react-redux';
import AddToList from '../actions/addTodo';

const AddTodo = (props) => {
  const [value, setValue] = useState('');
  
  return (
  <div>
    <form
      onSubmit={e => {
        e.preventDefault();
        if(!value.trim()){
          return
        }
        props.dispatch(AddToList(value));
        setValue('');
      }}
    >
      <input 
        type='text' 
        value={ value } 
        onChange={e => setValue(e.target.value)} 
      />
      <button type="submit">Submit</button>
    </form>
  </div>
  );
}

const mapStateToProps = (store) => {
  return {
    dispatch: store.dispatch
  }
}

export default connect(mapStateToProps)(AddTodo);