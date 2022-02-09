import './App.css';
import GlobalStyles from './styles/global'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login'

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/" component={Login} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
