const ToggleComplete = (id) => {
  return {
    type: 'TOGGLE COMPLETE',
    payload: {
      id
    }
  }
}

export default ToggleComplete