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
        props.addItem(value);
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

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (value)=> {
      dispatch(AddToList(value))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddTodo);
