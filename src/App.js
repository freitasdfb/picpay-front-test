import React, { useContext } from 'react'
import './App.css';
import GlobalStyles from './styles/global'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login'
import Pagamentos from './pages/Pagamentos'
import { AuthProvider, Context } from './context/AuthContext';

function App() {


  function PrivateRoute({ children }) {
    const { authenticated } = useContext(Context)

    return authenticated ? children : <Navigate to='/' />
  }

  function useAuth() {
    return false;
  }

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={
              <Login />
            } />
            <Route path="/pagamentos" element={
              <PrivateRoute>
                <Pagamentos />
              </PrivateRoute>
            } />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
