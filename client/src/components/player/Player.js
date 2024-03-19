import React, { useRef, useState } from 'react'
import './player.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import video from '../../assets/video.mp4';
import Navbar from '../navbar/Navbar';
import { useLocation } from 'react-router-dom';



const Player = () => {

    
  return (
    <>
    <Navbar className="navbar"/>
  <div className='layout'>
    
      <div className='menuLinks'>
          <span>Home</span>
          <span>TV Shows</span>
          <span>Movies</span>
          <span>Title</span>
      </div>
      <div className='container'>
      <div className='topContainer'>
        
        <div className='player'>
          <div className='watch'>
            <video  className='videoPlayer'autoplay progress controls src ={video}  /> 
          </div>
        </div>
        </div>
        <div className='bottomContainer'>
          <div className='bottomLeft'>

          </div>
          <div className='bottomRight'>

          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Player