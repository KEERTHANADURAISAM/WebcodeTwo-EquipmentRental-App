import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import SubNav from '../Navbar/SubNav';
import './Massager.css'

const Massager = ({add, setcart}) => {
  const navigate=useNavigate()
  const [img,setImg]=useState([]);
  const [show, setShow] = useState(true);
  
  const addToCart = (add, setcart) => {
    setShow(false);
    setcart(add + 1);
  };
  
  const RemoveCart = (add, setcart) => {
    setShow(true);
    setcart(add - 1);
  };
  
   const fitnessEquipmentPage=()=>{
        navigate('/portal/fitness-equipment')
      }
      useEffect(() => {
        LoadTreadImg();
        }, []);
      
        const LoadTreadImg = async () => {
          const Treadimg = await axios.get("https://webcodetwo-server.onrender.com/massagersimgs");
          console.log(Treadimg);
          setImg(Treadimg.data);
          console.log(img);
        };
    return (
      <div>
         
        <><SubNav/></>
        <div  className="equipment-grid-massager">
          {img.map((value, index) => {
            return( 
        <div className="equipment-card-design-massager" key={index}>
                 {show ? 
                    <h1
                      className="whishlist-massager"
                      onClick={() => addToCart(add, setcart)}
                    >
                      ❤️
                    </h1>: 
                    <h1
                      className="whishlist-massager"
                      onClick={() => RemoveCart(add, setcart)}
                    >
                      💜
                    </h1>
                  }
            <img src={value.img} className="equipment-pro-img-massager"/><br></br>
            <div className="equipment-header-massager">
            <p className="-name-massager">{value.productname}</p><br></br>
            <p>mo{value.monthrent}</p><br></br>
            <p>{value.caption}</p>
            <p>{value.content}</p><br></br>
            </div>
            <Link style={{textDecoration: 'none'}} to={`/portal/massager/${value._id}`} className="equipments-card-btn" >Quick View</Link>                   
              </div>
           
            )
          })}
        
  
  
      </div>
          </div>
    )
  }
  

export default Massager