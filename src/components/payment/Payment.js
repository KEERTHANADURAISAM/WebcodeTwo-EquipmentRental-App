import React, { useState } from 'react'
import './Payment.css';
const Payment = () => {
  const [permonth,setPerMonth]=useState()
  const [popup,setPopup] =useState(false)

  // handleAddToCart=()=>{
  //   // setPerMonth(RentperHour *)
  // }
    const [amount, setamount] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(amount === ""){
        alert("please enter amount");
        }else{
          var options = {
            key: "rzp_test_SMZDC1EvFol3ZH",
            key_secret:"71dWRK0uABkQX57aZ2Fmrlth",
            amount: amount *100,
            currency:"INR",
            name:"STARTUP_PROJECTS",
            description:"for testing purpose",
            handler: function(response){
              alert(response.razorpay_payment_id);
            },
            prefill: {
              name:"keerthana",
              email:"mvel1620r@gmail.com",
              contact:"7904425033"
            },
            notes:{
              address:"Razorpay Corporate office"
            },
            theme: {
              color:"#3399cc"
            }
          };
    var pay = new window.Razorpay(options);
    pay.open();
      }
    
    }

    // popup
    
  const handleClickOPen=()=>{
  setPopup(!popup)
  } 
  return (
    <div className='card-wrap'> 
         <div className='content-wrap'>
         <h2>Razorpay Payment Integration Using React</h2>
    <br></br>
   <span className='link'>Welcome to RazorPay Payment</span>
   {popup ?
    <form className='form-payment'>
      <div className='form'>
     
    <input type="text" placeholder='Enter the Amount' value={amount} onChange={(e)=>setamount(e.target.value)}/>
   
    <button onClick={handleSubmit}>Submit</button>
    
    </div>
    </form>
    :""}
    </div>
 
    </div>
  )
}

export default Payment
