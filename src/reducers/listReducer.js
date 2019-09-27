import InitialList from '../initialList';

const ListReducer = (state = InitialList(), action) => {
  console.log(action);
  switch(action.type){
    case 'ADD TODO': 
      return {
        ...state,
        items: [
          ...state.items,
          { id: state.items.length+1, text: action.payload.text, completed: false }
        ]
    }
    
    case 'TOGGLE COMPLETE': 
      const id = action.payload.id;
      const target = state.items.slice(id-1,id+1);

      return { 
        ...state,
        items: [  ...state.items.slice(0,id-1), { ...target[0], completed: !target[0].completed }, ...state.items.slice(id)]
      }

    case 'REMOVE TODO':
      const rem_id = action.payload.id;
      const newItems = [];

      for(let i=1, j=1; i <= state.items.length; i++)
      {
        if(i===rem_id)
          continue;
        
        console.log(i);
        let item = {
          id: j,
          text: state.items[i-1].text,
          completed: state.items[i-1].completed
        }
        j++;


        newItems.push(item);
      }
      console.log(newItems);

      return {
        items: newItems
      };

    default:
      return state;
  }
};

export default ListReducer;