import React, {createContext, useContext, useEffect, useReducer} from 'react';

const AuthContext = createContext();
const initialState = {
  isAuthenticated: false,
  user: {},
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        isAuthenticated: true,
        user: action.payload.user,
      };
    case 'LOGOUT':
      return {
        isAuthenticated: false,
        user: {},
      };
    default:
      return state;
  }
};
export default function AuthContextProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {});

  return (
    <AuthContext.Provider value={{...state, dispatch}}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  return useContext(AuthContext);
};
