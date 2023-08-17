import React, { useEffect, useState } from "react";
import "./TreadMill.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import SubNav from "../Navbar/SubNav";

const Treadmill = ({ add, setcart }) => {
  const [img, setImg] = useState([]); //initially give empty array]
  const [show, setShow] = useState(true);

  const addToCart = (add, setcart) => {
    setShow(false);
    setcart(add + 1);
  };

  const RemoveCart = (add, setcart) => {
    setShow(true);
    setcart(add - 1);
  };

  const navigate = useNavigate();
 
  const viewByimg =()=>{
    navigate("treadmillview")
  }
  useEffect(() => {
    LoadTreadImg();
  }, []);

  const LoadTreadImg = async () => {
    const Treadimg = await axios.get(
      "https://webcodetwo-server.onrender.com/treadmillimgs"
    );
    console.log(Treadimg);
    setImg(Treadimg.data);
    console.log(img);
  };
  return (
    <>
      <>
        <SubNav />
      </>
      <div className="equipment-grid">
        {img.map((value, index) => {
          return (
            <div key={index}>
              <div className="equipment-card-design">
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
                <img src={value.img} className="equipment-pro-img" />
                <br></br>
                <div className="equipment-header">
                  <p className="-name">{value.productname}</p>
                  <br></br>
                  <p>mo{value.monthrent}</p>
                  <br></br>
                  <div className="blur-card">
                    <p>{value.caption}</p>
                    <p>{value.content}</p><br></br>
                  </div>
                </div>
                <Link style={{textDecoration: 'none'}} to={`/portal/treadmillview/${value._id}`} className="equipments-card-btn" >Quick View</Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Treadmill;
