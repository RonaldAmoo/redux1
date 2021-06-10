import { v4 as uuidv4 } from "uuid";
const initialState = {
  users: [
    {
      id: "1",
      name: "Ronaldo Amoo",
      email: "roro@gmail.com",
      gen: 34,
    },
    {
      id: "2",
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
        id: uuidv4(),
        name: action.payload.name,
        email: action.payload.email,
        gen: action.payload.gen,
      };
      return { ...state, users: [...state.users, newUser] };

    case "DELETE_USER":
      const filteredUsers = state.users.filter(
        (user) => user.id !== action.payload
      );
      return { ...state, users: filteredUsers };

    case "EDIT_USER":
      const updatedUserInfo = state.users.map((user) => {
        if (user.id === action.user_id) {
          return { ...user, ...action.updated_Info };
        } else {
          return user;
        }
      });
      return { ...state, users: updatedUserInfo };

    default:
      return state;
  }
};
export default usersReducer;
