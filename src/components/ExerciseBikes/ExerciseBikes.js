import React from 'react'
import arrow from'./left-arrow.png';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
const ExerciseBikes = () => {
    const navigate=useNavigate()
    const fitnessEquipmentPage=()=>{
      navigate('/portal/fitness-equipment')
    }
  return (
    <div>
         <div className='equipment-nav-container'>
      <nav className='equipmentNav'>
        <img src={arrow} className='arrow-img'/>
        <span className='equipmentSpan' onClick={fitnessEquipmentPage}>Fitness</span>
        <img src={arrow} className='arrow-img1'/>
        <span className='equipmentSpan'>Exercise Bikes</span>
      </nav>
      </div>
      ExerciseBikes
      
      <div>
        <Footer/>
        </div>
      </div>
  )
}

export default ExerciseBikes