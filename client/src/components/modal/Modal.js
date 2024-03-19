import React, {  useState } from 'react'
import './modal.css'
import CloseIcon from '@mui/icons-material/Close';
import Backdrop from './Backdrop';
import RegisterModal from './RegisterModal';





const Modal = (props) => {

  const [isRegisterClk, setIsRegisterclk] = useState(false)

  const RegisterHandler = (props)=>{
    setIsRegisterclk(true)
    setModalIsClosed(true) 
   
 
   
   
  }
  
  
  const[modalIsClosed , setModalIsClosed]= useState(false);

  const closeModalHandler = (props)=>{ 
    setModalIsClosed(true) 
    
     Modal.style.current.display = 'none'
     Backdrop.style.current.display = 'none'
  }



  return (
    <div className='modal' 
    
     >
      
      <div className='container'>
        <CloseIcon className='close' 
            onCancel={closeModalHandler}
            onClick={props.onCancel}
          />
        <p className='header'>Welcome back!</p>
        
        <div className='login'>
              <p className='email1'>EMAIL ADDRESS</p>
            <input  className='emailInput' placeholder='name@email.com'/>
              <p className='emailInfo'>PASSWORD</p>
            <input className="emailInput"placeholder='Password'/>
        </div>
        <div className='bottom'>
          <div className='rememberMe'>
            <input type="checkbox" id="remember" name="remember" value="Remember me"/>
            <label className ="rememberText"for="remember">Remember me</label>
            <p className='forgot'>Forgot password?</p>
          </div>
          <button className='loginButton'>Login</button>
        </div>
        <div className='register'>
          <p>Don't have an account? <button onClick={RegisterHandler}
          
          >Register</button> </p>
          {isRegisterClk && <RegisterModal />}
        </div>
        
      </div>
      
    
      
    </div>
  )
  }

export default Modal