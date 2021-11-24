import axios from 'axios';
import { react, useState, useEffect } from 'react';
// import { render } from 'react-dom';
// import axios from 'axios';
import Form from 'react-bootstrap/Form';
import AddWorkoutForm from './AddWorkoutForm'
import Container from './Container';
import { useParams } from 'react-router-dom';

export default function Workout() {

    const [exerciseList, setExerciseList] = useState([]);
    const [rerender, setRerender] = useState(false);
    // whenever this is false don't do anything, if there is a change in state it'll
    // fire a rerender
    const {id} = useParams();

    const triggerText = 'Open form';

    const onSubmit = (event) => {
        event.preventDefault(event);
        setRerender(!rerender) 
    }

    const incrementWorkout = (currentworkout_id) => {
        axios.put(`http://localhost:3333/api/exercise/${currentworkout_id}`)
        .then( (res) => { setRerender(!rerender) })   
    }
        
    useEffect(() => {
        axios.get(`http://localhost:3333/api/exercise/${id}`)
        .then( (res) => { setExerciseList(res.data) })
    }, [rerender]);
    console.log(exerciseList)

    // Key is telling what each index makes it unique. 
    




        return (
            <div>
             <h1>Workout.js</h1>
             <Container triggerText={triggerText} onSubmit={onSubmit}/>
             <div>
             {exerciseList.map(el => { return <div>
             <h1> Exercise:{el.exercise}</h1>     
             <h4> Sets:{el.sets}</h4>
             <h4> Reps:{el.reps}</h4>
             <h4> Weight:{el.weight}</h4>
             <h4> Time:{el.time}</h4>          
                 <button onClick={() => incrementWorkout(el.currentworkout_id)}>Increment</button>
                </div>})}
             </div>
            </div>
        );
    }
