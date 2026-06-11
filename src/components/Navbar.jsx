import React from 'react'
import './css/Navbar.css'
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();

  const [isOpen, setOpen] = useState(false);

  function handleClick() {
    setOpen(prev => !prev);
  }

  function navi(path) {
    navigate(path);
    setOpen(false);
  }


  return (
    <div className='nav'>
      <img src={logo} alt="Logo" />


      <FontAwesomeIcon icon={isOpen ? faXmark : faBars} onClick={handleClick} className='bars'/>
      
      <ul  style={{right : isOpen ? "0" : "-70%"}}>
        <li onClick={()=> navi('/')}>Home</li>
        <li onClick={()=> navi('/courses')}>Courses</li>
        <li onClick={()=> navi('/account')}>Account</li>
      </ul>
    </div>
  )
}

export default Navbar