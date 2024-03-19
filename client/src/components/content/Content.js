import React from 'react'
import './content.css';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItem from '../listItem/ListItem';
import { useRef, useState } from 'react';
 

const Content = ({list}) => {

  const [isMoved , setIsMoved] = useState(false);

  //making the slider not click 
  const [slideNumber, setSlideNumber] = useState(0)
  
  //
  const listRef = useRef();
  //arrow left and right for sliders
  const handleClick = (direction)=>{
    setIsMoved(true)
    let distance = listRef.current.getBoundingClientRect().x -55
    if (direction === 'left' && slideNumber > 0){
        setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${205 + distance}px)`
    }

    if (direction === 'right' && slideNumber < 2){
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-205 + distance}px)`
    }
    
  }

  return (
    <div className='content'>
      <span className='listTitle'>{list.title}</span>
      <div className='wrapper'>
        <ArrowBackIosNewOutlinedIcon 
          className='sliderArrow left' 
          onClick = {()=>handleClick("left")}
          style={{display: !isMoved && 'none'}}/>
        <div className='container' ref ={listRef}>
          
          {list.content.map((item, i) =>(
            <ListItem index = {i} item={item}/>
          ))};
        </div>
        <ArrowForwardIosOutlinedIcon className='sliderArrow right' onClick = {()=>handleClick("right")}/>

      </div>
    </div>
  )
}

export default Content