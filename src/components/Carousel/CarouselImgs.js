import { Carousel } from 'antd'
import React, { useRef } from 'react'
import img3 from './Fitness-offer-banner-for-Web--2.jpg'
import img4 from './Referral banner Web.jpg'
import img1 from './Fitness  Gym Facebook Ad Post Design - Made with PosterMyWall.jpg'
 
import './Carousel.css';
import ReactPlayer from 'react-player'


const CarouselImgs = () => {
    const contentStyle = {
        height: '360px',       
        color: '#fff',
        lineHeight: '100px',
        textAlign: 'center',
        background: 'rgb(18,38,49)'
      };
      const playerRef=useRef (null)
  return (
    <div>
        <Carousel autoplay>
        <div>
<img  src={img1}style={contentStyle} className='img-slider3'/>
</div>

<div>
<img  src={img3}style={contentStyle} className='img-slider'/>
</div>
<div>
<img  src={img4}style={contentStyle} className='img-slider'/>
</div>


</Carousel>
   </div>

  )
}

export default CarouselImgs