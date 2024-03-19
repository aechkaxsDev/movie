import React, { useCallback, useEffect, useRef, useState } from 'react'
import './page.css';

import Footer from '../Footer/Footer';
import axios from "axios";
import Content from '../content/Content';





const Page = ({type}) => {



  

  const[lists, setLists] = useState([]);
  const[genre, setGenre] = useState(null);

//when movie button is click all list is movies
  const fetchSeriesData = async () =>{
    try{
        const res = await axios.get("lists?type=series",
        {
          headers:{
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjNkYjYwYThlOTEzNDgyZTM4NmU3YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMDQ4MDM4NCwiZXhwIjoxNzEwOTEyMzg0fQ.2aXXEAIvq9AKuu3TSRCVlixW-RhL8GsUXwrC6nQ0BC0"
          }
        }
        );
        setLists(res.data)
    }catch(err){
      console.log("error fetching")
    }
  }

  const fetchMovieData = async () =>{
    try{
        const res = await axios.get("lists?type=movie",
        {
          headers:{
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjNkYjYwYThlOTEzNDgyZTM4NmU3YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMDQ4MDM4NCwiZXhwIjoxNzEwOTEyMzg0fQ.2aXXEAIvq9AKuu3TSRCVlixW-RhL8GsUXwrC6nQ0BC0"
          }
        }
        );
        setLists(res.data)
    }catch(err){
      console.log("error fetching")
    }
  }




    useEffect(() => {
      const getRandomLists = async ()=>{
        try{
          
          
           const res = await axios.get("lists",{
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
          
          
        
  return (

    
    
    <div className='page'>
      <div className='pageInfo'>
      Top Movie2k is a test website made by Zenen Paredes Jr. as his first project in the front end side. He started the journey in web development 3 years ago, starting from HTML and CSS, and then Javascript and now React JS. This website will be available for test including the back end side after the author will finish studying nodeJS, Express and MongodB. He plan to connect this website in a movie API but before that he will test this Website by connecting it to a local server that he will make using mongoDB. He plans to study all about backend programming in 3-6 months. Wish him luck.
      Top Movie2k is a test website made by Zenen Paredes Jr. as his first project in the front end side. He started the journey in web development 3 years ago, starting from HTML and CSS, and then Javascript and now React JS. This website will be available for test including the back end side after the author will finish studying nodeJS, Express and MongodB. He plan to connect this website in a movie API but before that he will test this Website by connecting it to a local server that he will make using mongoDB. He plans to study all about backend programming in 3-6 months. Wish him luck.
      </div>

      <div></div>
        <div className='buttons'>
                <button onClick={fetchMovieData}className='movieButton' >Movies</button>
                <button onClick={fetchSeriesData}>TV Shows</button>
              </div>  
        <div className='pageContent'>

          <div className='pageContainer'>
           
            <div className='mainContainer' >

            
            {lists.map((list) =>(
          <Content list = {list} />
                 ))}
           
          
           <Footer />
           

            </div>
          </div>
        </div>
    </div>
  
 
  )
}

export default Page