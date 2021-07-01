import { getFirebase } from "react-redux-firebase";

export function getAllUsers() {
  return (dispatch, state, { getFirestore }) => {
    const db = getFirestore();
    db.collection("users").onSnapshot((results) => {
      let users = [];
      results.forEach((doc) => {
        let user = doc.data();
        user.id = doc.id;
        users.push(user);
      });

      dispatch({
        type: "ADD_ALL_USERS",
        payload: users,
      });
    });
  };
}

export function deleteUser(id) {
  return async (dispatch, state, { getFirestore }) => {
    const db = getFirestore();
    console.log(id);
    try {
      await db.collection("users").doc(id).delete();
    } catch (error) {
      console.log(error);
    }
  };
}

export function editUser(id, editedUser) {
  return async (dispatch, state, { getFirestore }) => {
    const db = getFirestore();
    try {
      await db.collection("users").doc(id).update(editedUser);
    } catch (error) {
      console.log(error);
    }
  };
}
export function addUser(newUser) {
  return async (dispatch, state, { getFirestore }) => {
    const db = getFirestore();
    try {
      await db.collection("users").add(newUser);
    } catch (error) {
      console.log(error);
    }
  };
}
