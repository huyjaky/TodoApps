const initState = {
  users: [
    {
      id: 1,
      UserName: "Huy"
    },
    {
      id: 2,
      UserName: "Han"
    }
  ]
}


const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'DELETE_USER':
      let users = state.users.filter(item => item.id !== action.payload.id)
      console.log('count process');
      return {...state, users}
    default:
      return state;
  }
}

export default rootReducer;