import { useState } from 'react'
import './App.css'
import Home from './components/Home.jsx'
import Registerr from './components/Register.jsx';
import Login from './components/Login.jsx';

function App() {
    const [login, isLogin] = useState(false);

  return (
    <>
      {
        login ? <Login /> : <Registerr />
      }
    </>
  )
}

export default App