import React, { useState } from 'react'
import './Payment.css';
const Payment = () => {
  const [amount, setamount] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(amount === ""){
    alert("please enter amount");
    }else{
      var options = {
        key: "rzp_test_XhDqOnLhsVlg6b",
        key_secret:"GiRF3oDTv060dwwxmZ98ucmS",
        amount: amount *100,
        currency:"INR",
        name:"Fitness Club",
        description:"for testing purpose",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name:"",
          email:"",
          contact:""
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
  return (
    <div className="App-payment">
     <h2 className='header-payment'>Razorpay Payment Integration Using React</h2>
     <br/>
     <input type="text"placeholder='Enter Amount'value={amount}onChange={(e)=>setamount(e.target.value)} className='input-payment'/>
     <br/><br/>
     <button onClick={handleSubmit} className='payment-btn'>submit</button>
    </div>
  );
}
export default Payment
