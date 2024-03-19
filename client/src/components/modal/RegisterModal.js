import React, { useState } from 'react'
import "./registermodal.css"
import Backdrop from './Backdrop';
import CloseIcon from '@mui/icons-material/Close';

const RegisterModal = () => {
  

  

  return (
    <div className='registermodal' 
    
     >
      
      <div className='container'>
        <CloseIcon className='close' 
                  
          />
        <p className='header'>Create Account</p>
        
        <div className='signup'>
            <p className='email1'>NAME</p>
            <input  className='emailInput' placeholder='name'/>
              <p className='email1'>EMAIL ADDRESS</p>
            <input  className='emailInput' placeholder='name@email.com'/>
              <p className='emailInfo'>PASSWORD</p>
            <input className="emailInput"placeholder='Password' type='password'/>
            <p className='emailInfo'>CONFIRM PASSWORD</p>
            <input className="emailInput"placeholder='Password' type='password'/>
            
        </div>
        <div className='bottom'>
         
          <button className='register' ><p>Register</p></button>
        
        <div className='login'>
          <p>Have an account? </p>
          <button>Login</button> 
        </div>
        </div>
        
      </div>
      
    
      
    </div>
  )
}


export default RegisterModal