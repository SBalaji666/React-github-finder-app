import React, { createContext, useReducer } from 'react';
import AlertReducer from './AlertReducer';

const AlertContext = createContext();

export function AlertContextProvider({ children }) {
  const initialState = null;
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlert = (msg, type) => {
    dispatch({ type: 'SET_ALERT', payLoad: { msg, type } });

    setTimeout(() => dispatch({ type: 'REMOVE_ALERT' }), 3000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
}

export default AlertContext;
