import React, { useReducer, createContext } from 'react';

export const UserContext = createContext();

const initialState = {
  users: {
    id: 1,
    name: 'Flintstone',
    likedHomes: []
  },
  loading: false,
  error: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LIKE_HOME":
      return {
        users: [...state.users.likedHomes, action.payload]
      };
    case "UNLIKE_HOME":
      return {
        users: state.users.likedHomes.filter(
          home => home.id !== action.payload.id
        )
      };
    case "START":
      return {
        loading: true
      };
    case "COMPLETE":
      return {
        loading: false
      };
    default:
      throw new Error();
  }
};

export const UserContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return ( 
    <UserContext.Provider value = {[state, dispatch]}> 
      {props.children} 
    </UserContext.Provider>
  );
};
