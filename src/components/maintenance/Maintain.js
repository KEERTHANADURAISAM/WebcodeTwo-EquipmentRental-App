import React from 'react'
import './Maintain.css'
import maintain from'./maintenance.png';
import reloaction from'./place.png';
import quality from'./analysis.png';
import cancel from'./delete.png';
import easyreturn from'./delivery-man.png';
import upgrade from'./improvement.png';
import quote from'./quote.png';
const Maintain = () => {
  return (
    <div className='maintain-layout'>
    <div>
<h2 className='main-head'>
There's more  to renting
</h2>
</div>
<div className='main-container'>
<div className='sub-container'>
<img src={quality} className='main-img'/>
<h3 className='sub-head'>Finest-quality products</h3>
<p className='sub-text'>Quality matters to you, and us! That's why we do a strict quality-check for every product</p>
</div>
<div className='sub-container'>
<img src={reloaction} className='main-img'/>
<h3 className='sub-head'>Free relocation</h3>
<p className='sub-text'>Changing your house or even your city? We'll relocate your rented products for free.</p>
</div>
<div className='sub-container'>
<img src={maintain} className='main-img'/>
  <h3 className='sub-head'>Free maintenance</h3>
  <p className='sub-text'>Keeping your rented products in a spick and span condition is on us, so you can sit back and relax.</p>
</div>
<div className='sub-container'>
<img src={cancel} className='main-img'/>
<h3 className='sub-head'>Cancel anytime</h3>
<p className='sub-text'>Pay only for the time you use the product and close your subscription without any hassle.</p>
</div>
<div className='sub-container'>
<img src={easyreturn} className='main-img'/>
<h3 className='sub-head'>Easy return on delivery</h3>
<p className='sub-text'>If you don't like the product on delivery, you can return it right away—no questions asked.</p>
</div>
<div className='sub-container'>
<img src={upgrade} className='main-img'/>
<h3 className='sub-head'>Keep upgrading</h3>
<p className='sub-text'>Bored of the same product? Upgrade to try another, newer design and enjoy the change!</p>
</div>
    </div>
    </div>
  )
}

export default Maintain