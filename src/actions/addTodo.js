const AddToList = (text) => {
  return {
    type: 'ADD TODO',
    payload: {
      text
    }
  }
}

export default AddToList;