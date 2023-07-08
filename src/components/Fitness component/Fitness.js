import React from 'react'
import './Fitness.css'
import { RightCircleOutlined } from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom'
import CarouselImgs from '../Carousel/CarouselImgs'
import fit from './treadmill.png'
import Navbar from '../Navbar/Navbar'
import Maintain from '../maintenance/Maintain'
import Theme from '../Theme/Theme'
import Footer from '../Footer/Footer'
const Fitness = () => {
  const navigate=useNavigate()
  const fitnessEquipmentPage=()=>{
    navigate('/portal/fitness-equipment')
  }
  return (
    <div>
      <Navbar/> 
      <div className='fit-container'>
      <CarouselImgs/>
      </div>
      <div className='fit-img'>      
       <div onClick={fitnessEquipmentPage} className='equipment-linkpage'>
       <img src={fit} className='treadmill-img'/>
       <h1>Try Out Our Online Cross Fit</h1><br></br>
       <div>
       <button className='fit-btn'>Quick View </button>
       </div>
        </div>
        
   </div>
   <div>
    <Theme/>
   </div>
   <div>
    <Maintain/>
   </div>
   <div>
    <Footer/>
   </div>
    </div>
  )
}

export default Fitness