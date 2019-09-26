import React, { useState } from 'react';

const AddTodo = (dispatch) => {
  const [value, setValue] = useState('');
  
  return (
  <div>
    <form
      onSubmit={e => {
        e.preventDefault();
        if(!value.trim()){
          return
        }
        dispatch(AddTodo(value));
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

export default AddTodo;