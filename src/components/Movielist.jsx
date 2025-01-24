import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { deletefilme, editfilme } from '../redux/action';
import Editfilm from './Editfilm';

function Movielist({ film }) {
  const dispatch = useDispatch()
  return (
   
   
        <Card style={{ width: '15rem',height:'27rem',border:'1px solid black' }}>
        <Card.Img src={film.poster} style={{ width: '100%',height:'300px' }} />
        <Card.Body>
          <Card.Title>{film.title}</Card.Title>
          <Button variant="primary" >Details</Button>
          <Editfilm film={film} />
          <Button variant="danger" onClick={() => dispatch(deletefilme(film.id))}>Delete</Button>
        </Card.Body>
      </Card>
      
   
  )
}

export default Movielist