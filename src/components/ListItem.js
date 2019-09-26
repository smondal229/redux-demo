import React from 'react';

const ListItem = ({onClick, text, completed}) => {
  return (<li 
    onClick = { onClick }
    style = {{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>)
}


export default ListItem;