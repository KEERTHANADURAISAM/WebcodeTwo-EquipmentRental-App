import React from 'react'
import arrow from "./left-arrow.png";
import './SubNav.css'
import { useNavigate } from 'react-router-dom';

const SubNav = () => {
    const navigate = useNavigate();
    const fitnessEquipmentPage = () => {
        navigate("/portal/fitness-equipment");
      };
      
  return (
    <div className="equipment-nav-container">
        <nav className="equipmentNav">
          <img src={arrow} className="arrow-img" />
          <span className="equipmentSpan" onClick={fitnessEquipmentPage}>
            Fitness
          </span>
                 </nav>
      </div>

  )
}

export default SubNav
