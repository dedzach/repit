import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


export default function AddWorkoutForm({ onSubmit }) {

    const [reps, setReps] = useState("");
    const [weight, setWeight] = useState("");
    const [exercise, setExercise] = useState("");
    const [time, setTime] = useState("");
    const [sets, setSets] = useState("");
    const {id} = useParams();
    // What made you think of this as a potential solution? 
    console.log(id)

    const createExercise = () => {
        axios.post('http://localhost:3333/api/exercise' , {
            sets: sets,
            exercise: exercise,
            reps: reps,
            weight: weight,
            time: time,
            workout_id: +id
            // Why did you add the + and not just the id? 
        })
    }

    return(
        <div>
        <form onSubmit={onSubmit}>
            <input placeholder="Sets" onChange={(e) => setSets(e.target.value)}/>
            <input placeholder="Exercise" onChange={(e) => setExercise(e.target.value)}/>
            <input placeholder="Reps" onChange={(e) => setReps(e.target.value)}/>
            <input placeholder="Weight" onChange={(e) => setWeight(e.target.value)}/>
            <input placeholder="Time" onChange={(e) => setTime(e.target.value)}/>
            <button onClick={createExercise}>Add Exercise</button>
        </form>
        </div>
    )
}