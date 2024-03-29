import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Portal = ({add}) => {
  return (
    <div>
        <Navbar add={add}/>
        
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Portal