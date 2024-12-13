import React from 'react'
import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './Contact.css'
import { toast } from 'react-toastify';

function Contact() {

    const [data,setData]=useState({
        name:"",
        email:"",
        password:""
    })

    const handlesubmit=()=>{
        const { name, email, password } = data;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!name || !email || !password){
            toast.warning("Valid Elements")
        }
        else if(!emailRegex.test(email)){
            toast.warning("Enter Valid Email")
        }
        else{
            toast.success("Form  Validated successfully")
            setData({
                name:"",
                email:"",
                password:""
            })
        }
        console.log(data)
    }

  return (
   <>

   <div className="validation">
    <div className="form-valid  border shadow p-4 text-center">
        <h3>Form Validation</h3>
   <FloatingLabel controlId="floatingPassword" label="Nmae">
        <Form.Control type="text" placeholder="Enter Name"   className='mt-4' onChange={(e)=>(setData({...data,name:e.target.value}))}/>
      </FloatingLabel>

      <FloatingLabel controlId="floatingPassword" label="Email">
        <Form.Control type="email"  name="email"
        placeholder="Enter Email" className='mt-2' onChange={(e)=>(setData({...data,email:e.target.value}))} />
      </FloatingLabel>

      <FloatingLabel controlId="floatingPassword" label="password">
        <Form.Control type="password" placeholder="Enter Password" className='mt-2' onChange={(e)=>(setData({...data,password:e.target.value}))} />
      </FloatingLabel>

      <button type='submit' className='btn mt-4' onClick={handlesubmit}>Submit </button>

      </div>

   </div>
   
   
   </>
  )
}

export default Contact
