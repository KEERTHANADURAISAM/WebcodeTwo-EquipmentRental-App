import React, { useEffect, useState } from 'react'
import './CrossTrainer.css'
import { useNavigate } from 'react-router-dom';
import SubNav from '../Navbar/SubNav';
import axios from 'axios';

const CrossTrainer = () => {
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
       
      <><SubNav/></>
      <div  className="equipment-grid-trainer">
        {img.map((value, index) => {
          return( 
      <div className="equipment-card-design-trainer" key={index}>
              <h1 className="whishlist-trainer">❤️</h1>
          <img src={value.img} className="equipment-pro-img-trainer"/><br></br>
          <div className="equipment-header-trainer">
          <p className="-name-trainer">{value.productname}</p><br></br>
          <p>mo{value.monthrent}</p><br></br>
          <p>{value.caption}</p>
          <p>{value.content}</p>
          </div>
          <button className="equipments-card-btn-trainer">Quick View</button>           
            </div>
         
          )
        })}
      


    </div>
        </div>
  )
}

export default CrossTrainer