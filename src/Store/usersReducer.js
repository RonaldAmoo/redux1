const initialState = {
  users: [
    {
      name: "Ronaldo Amoo",
      email: "roro@gmail.com",
      gen: 34,
    },
    {
      name: "Bright Annan",
      email: "brightosis@gmail.com",
      gen: 21,
    },
  ],
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      const newUser = {
        name: action.payload.name,
        email: action.payload.email,
        gen: action.payload.gen,
      };
      return { ...state, users: [...state.users, newUser] };

    default:
      return state;
  }
};
export default usersReducer;
