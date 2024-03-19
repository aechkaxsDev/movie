
import Home from './home/Home'
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Movies from './components/page/movies/Movies';
import Player from './components/player/Player';
import Tvshows from './components/page/tvshows/Tvshows';





const App = () => {

   
  return (
  <div className='app'>
    <Routes>
       <Route path ="/" element = {<Home />} />
       <Route path ="/home" element = {<Home />} />
       <Route path ="/movies" element = {<Movies />} />
       <Route path ="/tvshow" element = {<Tvshows />} />
       <Route path = '/player' element = {<Player />} />
  </Routes>

  </div>
  
  )
}

export default App
