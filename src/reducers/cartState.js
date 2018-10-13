const cartState = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NUMBER':
      let stt = state.filter(obj => (obj.id === action.item.id)
      ? obj.id !== action.item.id
      : {...state}
      )
      state = stt;
      let item = {
        id: action.item.id,
        number: action.item.number,
      }
      state.push(item)
      return state
    case 'CLEAN_CART':
      return state = [];
    case 'DELETE_NUMBER':
    // let filtered = 
    return state.filter(obj => (obj.id === action.id)
    ? obj.id !== action.id
    : obj.id !== -1
    )
    case 'CONFIRM_BUY':
      return state = []
    default:
      return state
  };
}

export default cartState;