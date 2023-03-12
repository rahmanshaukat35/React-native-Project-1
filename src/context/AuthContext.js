import React, {createContext, useContext, useEffect, useReducer} from 'react';
import auth from '@react-native-firebase/auth';

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
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        dispatch({
          type: 'LOGIN',
          payload: {user},
        });
      } else {
        dispatch({type: 'LOGOUT'});
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{...state, dispatch}}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  return useContext(AuthContext);
};
