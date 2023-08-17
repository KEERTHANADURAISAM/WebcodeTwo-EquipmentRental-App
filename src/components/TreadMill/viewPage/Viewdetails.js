import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import "./viewPage.css";
const Viewdetails = () => {
  
  const [obj, setObj] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  useEffect(() => {
    LoadTreadImg();
  }, []);

  const LoadTreadImg = async () => {
    try {
      const object = await axios.get(
        `https://equipment-backend.onrender.com/treadmillimgs/${params.id}`
       
      );
      console.log(object.data);
      setObj(object.data);
    } catch (error) {
      console.log(error);
    }
  };

  // payment redirect function
    const buttonMove = (obj) => {
    if (obj !== "caption") {
      console.log("success");
      return navigate("/payment");
    }
    return navigate("treadmillview/:id");
  };
  return (
      
          <div className="equipment-grid">    

              <div className="equipment-card-design">
                
                
                <img src={obj.img} className="equipment-pro-img" />
                <br></br>
                <div className="equipment-header">
                  <p className="-name">{obj.productname}</p>
                  <br></br>
                  <p>mo{obj.monthrent}</p>
                  <br></br>
                  <div className="blur-card">
                    <p>{obj.caption}</p>
                    <p>{obj.content}</p>
                  </div>
                  <button className='btn' onClick={()=>buttonMove(obj.monthrent)}>BOOK NOW</button>
                </div>
                
              </div>
            </div>
    
  );
};
     







export default Viewdetails;
