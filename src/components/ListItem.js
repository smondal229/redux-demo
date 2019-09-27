import React from 'react';

const ListItem = ({text, completed}) => {
  return (<li 
    style = {{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>)
}


export default ListItem;