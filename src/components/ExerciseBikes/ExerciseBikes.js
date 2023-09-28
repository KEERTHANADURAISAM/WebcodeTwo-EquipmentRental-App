import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import SubNav from '../Navbar/SubNav';
import axios from 'axios';
import './ExerciseBike.css';

const ExerciseBikes = ({add,setcart}) => {


    const navigate=useNavigate()
    const [img,setImg]=useState([]);
    const fitnessEquipmentPage=()=>{
      navigate('/portal/fitness-equipment')
}
const [show, setShow] = useState(true);

const addToCart = (add, setcart) => {
  setShow(false);
  setcart(add + 1);
};

const RemoveCart = (add, setcart) => {
  setShow(true);
  setcart(add - 1);
};


useEffect(() => {
      LoadTreadImg();
      }, []);
    
      const LoadTreadImg = async () => {
        const Treadimg = await axios.get("https://equipment-backend.onrender.com/exercisebikesimgs");
        console.log(Treadimg);
        setImg(Treadimg.data);
        console.log(img);
      };

      const viewByimg =()=>{
        navigate("treadmillview")
      }


  return (
    <div>
         
      <><SubNav/></>
      <div className="equipment-grid-bikes">
        {img.map((value, index) => {
          return( 
          <div className="equipment-card-design-bikes"  key={index}>
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
          <img src={value.img} className="equipment-pro-img-bikes"/><br></br>
          <div className="equipment-header-bikes">
          <p className="-name-bikes">{value.productname}</p><br></br>
          <p>mo{value.monthrent}</p><br></br>
          <p>{value.caption}</p>
          <p>{value.content}</p><br></br>
          </div>
          <Link style={{textDecoration: 'none'}} to={`/portal/exercisebikes/${value._id}`} className="equipments-card-btn" >Quick View</Link>           
            </div>
            
          )
        })}
      
      </div>

     
      </div>
  )
}

export default ExerciseBikes