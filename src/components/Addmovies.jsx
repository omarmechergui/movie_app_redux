import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { addfilme } from '../redux/action';

function Addmovies() {
    const films = useSelector((state) => state.movies)
    const [title, setTitle] = useState('');
    const [poster, setposter] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = () => {
        if(title !=='' && poster !== ''){
          const newfilm = { id : films.length+1 , title : title, poster : poster}
          dispatch(addfilme(newfilm))
          setTitle('');
          setposter('');
        }
        else{
          alert('Please enter both title and poster')
        }
      }
  return (
       <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' , width: '25rem',zIndex: '1', textAlign: 'center'}}>
    <div style={{ backgroundColor: 'lightblue', padding: '20px', borderRadius: '10px', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',display:'flex',gap:'10px' }}>
        <Card style={{ width: '19rem',display:'flex',flexDirection:'column',gap:'10px',padding:'10px',alignItems:'center',justifyContent:'center'}} >
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" style={{ borderBottom: '1px solid black',borderRadius:'5px'}}/>
          <input type="text" value={poster} onChange={(e) => setposter(e.target.value)} placeholder="Enter poster" style={{ borderBottom: '1px solid black',borderRadius:'5px'}}  />
          <Button variant="primary" onClick={ handleSubmit}>ADD</Button>
        </Card>
      </div>   
      </div>
    
  )
}

export default Addmovies