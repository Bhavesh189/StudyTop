import { useState } from 'react'
import './App.css'
import Home from './components/Home.jsx'
import Registerr from './components/Register.jsx';
import Login from './components/Login.jsx';
import Navbar from './components/Navbar.jsx';
import {createBrowserRouter, Outlet} from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Account from './components/Account.jsx';
import Courses from './components/Courses.jsx';
import { useNavigate } from 'react-router-dom';

function App() {

  const routes = createBrowserRouter( [
    
    {
      path : '/',
      element : (<>
            <Navbar />
            <Outlet />
              </>),

      children : [
        {
          path : '/',
          element : <Home></Home>
        },
        
        {
          path : '/courses',
          element : <Courses> </Courses>
        },

        {
          path : '/account',
          element : <Account />
        }
      ]
    }
  ]
  )



    const [login, isLogin] = useState(false);

  return (
    <>
    <RouterProvider router={routes}>
    <Navbar/>
    </RouterProvider>
    </>
  )
}

export default App