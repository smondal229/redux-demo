import React from 'react';
//import Items from '../items';
import ListItem from './ListItem';

const Items =
  [{ id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', completed: false },
  { id: 2, text: 'Cras tempor nibh ut orci lacinia volutpat.', completed: false },
  { id: 3, text: 'Maecenas in purus porta, ornare leo eget, congue ante.', completed: false }];

const List = (onTodoClick) => {
  
  return (<ul>
    { 
      Items.map((item) => (<ListItem key={item.id} {...item} onClick={() => onTodoClick(item.id)} />))
    }
  </ul>);
}

export default List;