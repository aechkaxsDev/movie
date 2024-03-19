
import './home.css';
import Navbar from '../components/navbar/Navbar';
import Featured from '../components/featured/Featured';

import Page from '../components/page/Page';




const Home = (type) => {
  


  return (
    <div className='home'>
       
      <Navbar />   
      <Featured />
       
       <Page />  
    </div>
  )
}

export default Home