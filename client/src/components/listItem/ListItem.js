import React, { useCallback, useEffect, useState } from 'react'
import './listItem.css'
import moviepic from '../../assets/moviepic.jpg';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import axios from "axios"
import { Link, Route, Router, Routes, useNavigate, } from 'react-router-dom';


const ListItem = ({index, item}) => {

  const[movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () =>{
      try{
        const res = await axios.get("/movies/find/" + item,{
          headers:{
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjNkYjYwYThlOTEzNDgyZTM4NmU3YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMDQ4MDM4NCwiZXhwIjoxNzEwOTEyMzg0fQ.2aXXEAIvq9AKuu3TSRCVlixW-RhL8GsUXwrC6nQ0BC0"
          }
        } );
        setMovie(res.data)
      }catch (err){

      }
    };
    getMovie();
  }, [item])




  //Play video function
  const navigate = useNavigate();

  const playVideoHandler = useCallback(()=>
  (navigate('/player', {replace:true}),[navigate]));

  return (
    
    <div className='listItem'>
      <div className='listMovies' > 
      <div className='slider'>
        <div className='listVideo' >
          <img src={movie.image} alt='' onClick={playVideoHandler}/>
        </div>
        <div className='playButton'>
            <PlayCircleFilledIcon className='play' onClick={playVideoHandler}/>
        </div>
        <div className='box'>
          <div className='name'>{movie.title}</div>
          <div className='info'>
            <div className='resolution'>{movie.resolution}</div>
            <div className='year'>{movie.year}</div>
            <div className='time'>{movie.duration}</div>
            <div className='genre'>{movie.genre}</div>
          </div>
        </div>
      </div>
      </div>

    </div>
 
  )
}

export default ListItem