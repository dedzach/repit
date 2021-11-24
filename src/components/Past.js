import { react, useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';

export default function Past({activeUser, setActiveUser}) {

    const [pastWorkouts, setPastWorkouts] = useState([]);
    const [rerender, setRerender] = useState(false);
    const [workoutList, setWorkoutList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3333/api/workout/${activeUser}`)
        .then( (res) => { setWorkoutList(res.data) })
    }, [rerender]);


        // .finally( console.log(workoutList))
    // .then is our data we got from our backend from our database, 


        return (
            <div>
                <h1>Select the workout you want to view.</h1>
                {workoutList.map(el => { return <div> 
                    <button onClick={() => navigate(`/Workout/${el.workout_id}`)}>{el.workout_name}</button>                    
                </div>})}
            </div>
        );
    }

    // What do you want to display on this page? 
    // How about the same as AddWorkoutForm without the form? 
    // All exercises from the current logged in user. 
    // So we would need a get request grabbing all data exercises with a specific
    // user_id. 
    // What is this similar to? Where are we doing something similar? 
    // Our workouts that take in the user id as the parameter in Current.js.

    // once you have data on front end, have a button that says increment: value you want. 
    // button will have on click and have it fire off a function. 
    // button onClick={updateWeight} 
    // function updateWeight() {
    //     let newExercises = exercise.forEach(
    //         (exercise)=>{
    //             exercise.weight=exercise.weight + 5 
    //         }
    // }
    // <select> </select>
    // values they can increase by something ^ bunch of options that sets something on state with
    // value. 
    // functional components have a place on state for all the exercises 
