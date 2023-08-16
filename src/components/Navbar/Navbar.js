import React from 'react'
import './Navbar.css'
import logo from './logo.jpg'

const Navbar = ({add}) => {
  return (
    <div className='nav-main-container'>
<nav className='nav-container'>
  <div>
  <img src={logo} className='nav-logo'/>
  </div>
  <div>
  <input placeholder='Search for Products' className='nav-input'/>
  </div>
<ul className='nav-ul'>
 
    <li><span className='nav-icon'>🛒</span><span className='nav-cartText'>❤️{add}</span></li>
    <li><button type="submit" className='nav-login-btn'>Login <span>/</span>SignUp</button></li>

</ul>

</nav>
    </div>
  )
}

export default Navbar