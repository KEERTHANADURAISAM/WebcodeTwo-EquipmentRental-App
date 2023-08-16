import React from 'react'
import './Equipment.css'
import treadmill from'./treadmills.webp'
import cross from'./cross-trainers.webp'
import exercise from './exercise-bikes.webp'
import massager from './massagers.webp'
import arrow from './black-triangular-arrowhead-pointing-to-left-direction.png'
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import rightarrow from './right-arrow.png';
const Equipment = () => {
  const navigate=useNavigate()

  // treadmill component
  const TreadMillFunction = () =>{
    navigate('/portal/fitness-treadmill')
  }
// CrossTrainerFunction component
const  CrossTrainerFunction= () =>{
  navigate('/portal/fitness-crosstrainer')
}
// ExerciseBikesFunction component
const  ExerciseBikesFunction= () =>{
  navigate('/portal/fitness-exercisebikes')
}
// MassagerFunction component
const MassagerFunction= () =>{
  navigate('/portal/fitness-massager')
}
// home component
const homeComponent= () =>{
  navigate('/')
}
// ViewAllComponent
const ViewAllComponent= () =>{
  navigate('/portal/fitness-allEquipment')
}
  return (
    <div>
      <div className='equipment-nav-container'>
      <nav className='equipmentNav'>
        <img src={arrow} className='arrow-img'/>
        <span className='equipmentSpan' onClick={homeComponent}>Home</span>
      </nav>
      </div>
      <div className='equipment-container'>
<div className='treadmill'>
  <img src={treadmill} className='equ-img'/>
  <div className='tread-btn'>
  <button className='equ-btn' onClick={TreadMillFunction}>TreadMill</button>
</div>
</div>
<div className='treadmill'>
  <img src={cross} className='equ-img'/>
  <div className='tread-btn'>
  <button className='equ-btn1' onClick={CrossTrainerFunction}>Cross Trainers</button>
</div>
</div>
<div className='treadmill'>
  <img src={exercise} className='equ-img'/>
  <div className='tread-btn'>
  <button className='equ-btn1' onClick={ExerciseBikesFunction}>Exercise Bikes</button>
</div>
</div>
<div className='treadmill'>
  <img src={massager} className='equ-img'/>
  <div className='tread-btn'>
  <button className='equ-btn' onClick={MassagerFunction}>Massagers</button>
  </div>
</div>
<div className='equ-AllView-div'>

<span className='equ-text' onClick={ViewAllComponent}>View all in fitness</span>
<img src={rightarrow} className='right-arrow'/>
</div>
      </div>
      </div>
  )
}

export default Equipment