import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from './components/Header';
import Movielist from './components/Movielist';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addfilme } from './redux/action';
import Addmovies from './components/Addmovies';



function App() {
  const films = useSelector((state) => state.movies)
  console.log(films)
 

 
  

  return (
    <div>
      <Header />
    
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {
          films.map( el =>(
            <Movielist key={el.id} film={el} />
          ))
        }
      </div>
    


    </div>
  );
}

export default App;