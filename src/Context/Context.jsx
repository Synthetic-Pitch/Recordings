// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from 'react';

// Correctly call createContext to create a new context
export const MyContext = createContext();

// eslint-disable-next-line react/prop-types
export const MyProvider = ({ children }) => {
  const [renderPage, setRenderPage] = useState(false);
  
  return (
    // Use MyContext.Provider to provide the context values
    <MyContext.Provider value={{ renderPage, setRenderPage }}>
      {children}
    </MyContext.Provider>
  );
};
