import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SubNav from '../Navbar/SubNav';
import axios from 'axios';
import './ExerciseBike.css';

const ExerciseBikes = () => {


    const navigate=useNavigate()
    const [img,setImg]=useState([]);
    const fitnessEquipmentPage=()=>{
      navigate('/portal/fitness-equipment')
    }
    useEffect(() => {
      LoadTreadImg();
      }, []);
    
      const LoadTreadImg = async () => {
        const Treadimg = await axios.get("https://webcodetwo-server.onrender.com/exercisebikesimgs");
        console.log(Treadimg);
        setImg(Treadimg.data);
        console.log(img);
      };
  return (
    <div>
         
      <><SubNav/></>
      <div className="equipment-grid-bikes">
        {img.map((value, index) => {
          return( 
          <div className="equipment-card-design-bikes"  key={index}>
              <h1 className="whishlist-bikes">❤️</h1>
          <img src={value.img} className="equipment-pro-img-bikes"/><br></br>
          <div className="equipment-header-bikes">
          <p className="-name-bikes">{value.productname}</p><br></br>
          <p>mo{value.monthrent}</p><br></br>
          <p>{value.caption}</p>
          <p>{value.content}</p>
          </div>
          <button className="equipments-card-btn-bikes">Quick View</button>           
            </div>
            
          )
        })}
      
      </div>

     
      </div>
  )
}

export default ExerciseBikes