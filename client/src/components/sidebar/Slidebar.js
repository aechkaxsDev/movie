import React from 'react'
import './slidebar.css'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

const Slidebar = () => {

 
  return (
    <nav className='slidebar' >
      <ul>
      <ArrowBackIcon />
      <span>Close menu</span>
  <div className='sidebar'>
 
    <li>
      <Link to ="/home"><div> HOME</div></Link>
    </li>
    <div> Top IMDB</div>
    <li>
      <Link to ="/movies"><div> Movies </div></Link>
    </li>
    <li>
      <Link to ="/tvshow"><div> TV Shows </div></Link>
    </li>
    
    
     
    
  
</div>
</ul>
</nav>
  )
}

export default Slidebar