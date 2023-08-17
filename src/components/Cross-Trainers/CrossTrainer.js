import React, { useEffect, useState } from 'react'
import './CrossTrainer.css'
import { Link, useNavigate } from 'react-router-dom';
import SubNav from '../Navbar/SubNav';
import axios from 'axios';

const CrossTrainer = ({add,setcart}) => {
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
               {show ? 
                  <h1
                    className="whishlist"
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
          <img src={value.img} className="equipment-pro-img-trainer"/><br></br>
          <div className="equipment-header-trainer">
          <p className="-name-trainer">{value.productname}</p><br></br>
          <p>mo{value.monthrent}</p><br></br>
          <p>{value.caption}</p>
          <p>{value.content}</p><br></br>
          </div>
          <Link style={{textDecoration: 'none'}} to={`/portal/trainers/${value._id}`} className="equipments-card-btn" >Quick View</Link>                   
            </div>
         
          )
        })}
      


    </div>
        </div>
  )
}

export default CrossTrainer