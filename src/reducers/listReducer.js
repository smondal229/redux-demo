const ListReducer = (state = [], action) => {
  switch(action.type){
    case 'ADD TODO': 
      return [
        ...state,
        { id: state.length+1, text: action.payload.text, completed: false }
      ]
    
    default:
      return state;
  }
};

export default ListReducer;