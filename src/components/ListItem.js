import React from 'react';

const ListItem = ({onToggle, onRemove, text, completed}) => {
  return (<li
    style = {{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
    <button 
      onClick={onToggle}
      style={
        { 
          align: 'right',  
          margin: '1em'
        }
      }
    >
      Completed
    </button>

    <button 
      onClick={onRemove}
    >
      Remove
    </button>
  </li>)
}



export default ListItem;