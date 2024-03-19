import React, { useEffect, useRef, useState } from 'react';
import './featured.css';
import ListItem from '../listItem/ListItem';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import axios from "axios"
import Content from '../content/Content';







const Featured = ({type}) => {

  const[lists, setLists] = useState([]);
  const[genre, setGenre] = useState(null);

    useEffect(() => {
      const getRandomLists = async ()=>{
        try{
           const res = await axios.get(
            "lists",{
              headers:{
                token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjNkYjYwYThlOTEzNDgyZTM4NmU3YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMDQ4MDM4NCwiZXhwIjoxNzEwOTEyMzg0fQ.2aXXEAIvq9AKuu3TSRCVlixW-RhL8GsUXwrC6nQ0BC0"
              }
            }
            );
            setLists(res.data)
            console.log(res)
           }catch (err){
            console.log(err);
           }
           } ; 
           getRandomLists();
          },[type, genre]); 

  const [isClicked , setIsClicked ] = useState(false);

  const [slidersNumber, setSlidersNumber] = useState(0);

  const listsRef = useRef ()

  const handleClicks = (direction) =>{
      setIsClicked(true)
    let distance = listsRef.current.getBoundingClientRect().x -5
    if (direction === "left" && slidersNumber > 0){
      setSlidersNumber(slidersNumber - 1)
      listsRef.current.style.transform = `translateX(${260 + distance}px)`
    }

    if (direction === "right" && slidersNumber < 4){
      setSlidersNumber(slidersNumber + 1)
      listsRef.current.style.transform = `translateX(${-260 + distance}px)`
    }
    
  }
  
  return (
    <div className='featured'>
    
      <div className='container'>
      <p className='text'>Suggestion</p>
        <div className='featuredMovies' > 
          <div className='featuredWrapper'>
           <ArrowBackIosNewOutlinedIcon 
              className='fsliderArrow left' 
              onClick ={()=>handleClicks("left")}
              style={{display: !isClicked && 'none'}}
            />
              <div className='featuredContainer' ref={listsRef}>
              
             
              {lists.map((list) =>(
          <Content list = {list}/>
                 ))}
         
             
             
              </div>
          
          <ArrowForwardIosOutlinedIcon  className='fsliderArrow right' onClick ={()=>handleClicks("right")}/>
          </div>
          
        </div>
     </div>

    </div>
  )
}

export default Featured