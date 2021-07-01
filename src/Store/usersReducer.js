import { v4 as uuidv4 } from "uuid";
const initialState = {
  users: [
    {
      id: "1",
      name: "Tomato",
      date: "12/07/2020",
      amount: 34,
      category: "food & drinks",
    },
    {
      id: "2",
      name: "Rent",
      date: "04/30/1997",
      amount: 300,
      category: "Accomodation",
    },
  ],
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ALL_USERS":
      let users = action.payload;
      return { users: users };

    case "ADD_USER":
      const newUser = {
        id: uuidv4(),
        name: action.payload.name,
        date: action.payload.date,
        amount: action.payload.amount,
        category: action.payload.category,
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
