import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import SubNav from '../Navbar/SubNav';
import './Massager.css'

const Massager = () => {
  const [img, setImg] = useState([]);//initially give empty array]
  const [show,setShow] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
  LoadTreadImg();
  }, []);

  const LoadTreadImg = async () => {
    const Treadimg = await axios.get("https://webcodetwo-server.onrender.com/massagersimgs")
    console.log(Treadimg);
    setImg(Treadimg.data);
    console.log(img);
  };


  return (
    <div>
    <><SubNav/></>
    <div className="equipment-grid-massager">
      {img.map((value, index) => {
        return( 
        <div className="equipment-card-design-massager" key={index} >
        <h1 className="whishlist-massager">❤️</h1>
        <h1 className="whishlist-massager">💜</h1>
        <img src={value.img} className="equipment-pro-img-massager"/><br></br>
        <div className="equipment-header-massager">
        <p className="-name-massager">{value.productname}</p><br></br>
        <p>mo{value.monthrent}</p><br></br>
        <p>{value.caption}</p>
        <p>{value.content}</p>
        </div>
        <button className="equipments-card-btn-massager">Quick View</button>           
          </div>
      
        )
      })}
          </div>
  </div>
  )
}

export default Massager