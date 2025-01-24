import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { addfilme, editfilme } from '../redux/action';

function Editfilm({film}) {
    console.log(film);
    const films = useSelector((state) => state.movies)
    const [title, setTitle] = useState(film.title);
    const [poster, setposter] = useState(film.poster);
    const dispatch = useDispatch();
    const [show, setshow] = useState(false)

    const handleSubmit = () => {
        if (title !== '' && poster !== '') {
            const newfilm = { id: films.id, title: title, poster: poster }
            dispatch(editfilme(film.id,newfilm))
            setshow(false)
            
        }
        else {
            alert('Please enter both title and poster')
        }
    }
    return (

        <div>
            <button onClick={() => setshow(!show)} style={{ borderRadius: '10px' }}>Update</button>
            {show == true ? <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '25rem', zIndex: '1', textAlign: 'center' }}>
                <div style={{ backgroundColor: 'lightblue', padding: '20px', borderRadius: '10px', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', display: 'flex', gap: '10px' }}>
                    <Card style={{ width: '19rem', display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px', alignItems: 'center', justifyContent: 'center' }} >
                        <input defaultValue={film.title} type="text"  onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" style={{ borderBottom: '1px solid black', borderRadius: '5px' }} />
                        <input type="text" defaultValue={film.poster} onChange={(e) => setposter(e.target.value)} placeholder="Enter poster" style={{ borderBottom: '1px solid black', borderRadius: '5px' }} />
                        <Button variant="primary" onClick={handleSubmit}>ADD</Button>
                    </Card>
                </div>
            </div> : null}
        </div>

    )
}

export default Editfilm