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
    
    default:
      return state;
  }
};

export default ListReducer;