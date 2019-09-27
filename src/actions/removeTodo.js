const RemoveTodo = (id) => {
  return {
    type: 'REMOVE TODO',
    payload: {
      id
    }
  }
}

export default RemoveTodo;