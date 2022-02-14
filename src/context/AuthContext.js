import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Context = createContext();


function AuthProvider({ children }) {

  const [authenticated, setAuthenticated] = useState(false)
  const navigate = useNavigate();

  function handleSignIn(email, password) {
    if (email === 'admin' && password === 'admin') {
      setAuthenticated(true)
      navigate('/pagamentos');
    }
  }

  return (
    <Context.Provider value={{ authenticated, handleSignIn }}>
      {children}
    </Context.Provider>
  )
}

export { Context, AuthProvider };