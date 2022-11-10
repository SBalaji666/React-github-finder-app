import { createContext, useState, useReducer } from 'react';
import GithubReducer from './GithubReducer';

const GithubContext = createContext();

export function GithubContextProvider({ children }) {
  const initialState = {
    users: [],
    repos: [],
    user: {},
    loading: true,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
}

export default GithubContext;
