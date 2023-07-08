import React, { useState } from 'react'
import { Data1 } from './Data/Data1'
import { Data2 } from './Data/Data2';
import { Data3 } from './Data/Data3';
import './Footer.css'
const Footer = () => {
    const [data1,setData1]=useState(Data1);
    const [data2,setData2]=useState(Data2);
    const [data3,setData3]=useState(Data3);
  return (
    <div className='footer'>
    <div className='Foot-container'>
        <div className='foot-container-card'>
       {data1.map((value,index)=>
        <div key={index}>
            <h3>{value.card1}</h3>
            <p>{value.subHead1}</p>
            <p>{value.subHead2}</p>
            <p>{value.subHead3}</p>
            <p>{value.subHead4}</p>
            <p>{value.subHead5}</p>
        </div>
)}
</div>
<div className='foot-container-card'>
{data2.map((value,index)=>
<div key={index}>
<h3>{value.card2}</h3>
<p>{value.subHead1}</p>
<p>{value.subHead2}</p>
<p>{value.subHead3}</p>

</div>
)}
</div>
<div className='foot-container-card'>
    {data3.map((value,index)=>
<div key={index}>
<h3>{value.card3}</h3>
<p>{value.subHead1}</p>
<p>{value.subHead2}</p>
<p>{value.subHead3}</p>
<p>{value.subHead4}</p>
<p>{value.subHead5}</p>
</div>
)}
</div>
</div>

<div className='footer-bottom'>
  
  <p>© 2023. Edunetwork Pvt. Ltd.</p>
</div>
</div>
  )
}

export default Footer