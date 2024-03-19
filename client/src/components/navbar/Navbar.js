import './navbar.css';
import image1 from '../../assets/image1.png';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import pic from '../../assets/pic.jpg';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useCallback, useRef, useState } from 'react';
import Modal from '../modal/Modal';
import Backdrop from '../modal/Backdrop';
import Slidebar from '../sidebar/Slidebar';
import Home from '../../home/Home';
import {  useNavigate } from 'react-router-dom';
import RegisterModal from '../modal/RegisterModal';







const Navbar = (props) => {

 

// { loginClicked && (<Modal onCancel={closeLoginHandler}/> )} 
//{ loginClicked && <Backdrop onCancel={closeLoginHandler}/>}



  //Click Logo to Home function
  

  const navigate = useNavigate();

  const clickLogoHandler = useCallback(()=>
    (navigate('/', {replace:true}),[navigate]));
  

  // clicking the menu button to Dropdown menu's
  const [isDropDown, setIsDropDown ] = useState(false)

  const dropDownHandler = (menu)=>{
    setIsDropDown(true)
  } 

  //to cancel menu dropdown

    const closeMenuHandler = ()=>{
      setIsDropDown(false)
    }

  //Scroll the Page up and Down
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = ()=>{
    setIsScrolled(window.scrollY === 0 ? false: true);
    return ()=> (window.onscroll = null);
    
  };
  // when clicking the Login button
  const [loginClicked, setLoginClicked] = useState(false);
  
  const loginHandler = ()=>{
    setLoginClicked(true);
    
  }

  const closeLoginHandler = ()=>{
    setLoginClicked(false)
  } 


  
  //opening two modals
 
  

  


  return (
    
    <div className= {isScrolled ? "navbar scrolled": "navbar"}>
      
      <div className='container'>
        <div className='left' >

        <MenuIcon className='menu' onClick = {dropDownHandler}/>

          <img className ="logo"src={image1} alt='image1' onClick={clickLogoHandler}/>
          <SearchIcon className='search'/>
          <input className =" input"placeholder='Enter keywords'/>
        </div>
        <div className='right'>
          <div className='profile'>
            <PersonIcon  className='person'/>
            <button className='login' onClick={loginHandler} >Login</button>
            
           
          
           
          </div>
        </div>
      </div>
      { loginClicked && (<Modal onCancel={closeLoginHandler}/> )} 
           { loginClicked && <Backdrop onCancel={closeLoginHandler}/>}
      

      
      {isDropDown && <Slidebar />}
      {isDropDown && <Backdrop onCancel={closeMenuHandler}/>}
     
    </div>
  )
}

export default Navbar