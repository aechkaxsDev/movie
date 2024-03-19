import React, { useEffect, useState } from 'react'
import './tvshows.css';


import axios from "axios";
import Content from '../../content/Content';
import Footer from '../../Footer/Footer';
import Navbar from '../../navbar/Navbar';



const Tvshows = ({type}) => {



  const[lists, setLists] = useState([]);
  const[genre, setGenre] = useState(null);

    useEffect(() => {
      const getRandomLists = async ()=>{
        try{
           const res = await axios.get(
            "lists?type=series",{
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
    
    <div className='tvshows'>
      <div>
        <Navbar/>
      </div>
        
        <div className='pageContent'>
       
          <div className='pageContainer'>
          <p className='pageName'>Best TV Shows</p>
            <div className='pageMainContainer'>

            
            {lists.map((list) =>(
          <Content list = {list}/>
                 ))}
           
          
           <Footer />
           

            </div>
          </div>
        </div>
    </div>
  
 
  )
}

export default Tvshows