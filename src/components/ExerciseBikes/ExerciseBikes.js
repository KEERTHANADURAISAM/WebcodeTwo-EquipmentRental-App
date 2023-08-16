import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SubNav from '../Navbar/SubNav';
import axios from 'axios';
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
        const Treadimg = await axios.get("https://webcodetwo-server.onrender.com/crosstrainersimgs");
        console.log(Treadimg);
        setImg(Treadimg.data);
        console.log(img);
      };
  return (
    <div>
         <div>
      <><SubNav/></>
        {img.map((value, index) => {
          return( 
          <div key={index} className="equipment-grid">
            <div className="equipment-card-design">
              <h1 className="whislist">❤️</h1>
          <img src={value.img} className="equipment-pro-img"/><br></br>
          <div className="equipment-header">
          <p className="-name">{value.productname}</p><br></br>
          <p>mo{value.monthrent}</p><br></br>
          <p>{value.caption}</p>
          <p>{value.content}</p>
          </div>
          <button className="equipments-card-btn">Quick View</button>           
            </div>
            </div>
          )
        })}
      


    </div>
      </div>
  )
}

export default ExerciseBikes