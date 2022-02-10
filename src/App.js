import './App.css';
import GlobalStyles from './styles/global'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login'
import Pagamentos from './pages/Pagamentos'

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/pagamentos" element={<Pagamentos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
