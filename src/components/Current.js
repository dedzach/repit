import react from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { Button, Fab, TextField } from "@material-ui/core";
import { Add } from "@material-ui/icons";

export default function Current({ activeUser, setActiveUser }) {
  const [workoutName, setWorkoutName] = useState("");
  const [workoutList, setWorkoutList] = useState([]);
  const [rerender, setRerender] = useState(false);

  const navigate = useNavigate();

  // component for each workout

  // function WorkoutButtons() {
  //     let navigate = useNavigate();
  //     function handleClick() {
  //         navigate('/Workout')
  //     }
  // }
  // After query is run there's one less workout, front end is going to use .then to grab updated workoutlist and set it to the setworkoutlist.

  const deleteWorkout = (workout_id) => {
    console.log(workout_id);
    axios
      .delete(`http://localhost:3333/api/workout/${workout_id}`)
      .then((res) => {
        setRerender(!rerender);
      });
  };

  console.log(activeUser, "line 32");

  const addWorkout = () => {
    axios
      .post("http://localhost:3333/api/workout", {
        workout_name: workoutName,
        user_id: activeUser,
      })
      .then((res) => {
        if (res.data) {
          axios
            .get(`http://localhost:3333/api/workout/${activeUser}`)
            .then((workouts) => {
              console.log(workouts);
              setWorkoutList(workouts.data);
            });
        }
      });
  };
  // User 19 is hardcoded, pull user ID off local storage.
  // Local storage autimatically stringifies stuff.

  //  useEffect = when component renders it launches the function immediately.
  // This will grab data from our workout database table and display it .map it on the DOM

  useEffect(() => {
    console.log(activeUser, "activeUser in useEffect");
    axios.get(`http://localhost:3333/api/workout/${activeUser}`).then((res) => {
      setWorkoutList(res.data);
    });
    // .finally( console.log(workoutList))
    // .then is our data we got from our backend from our database,
  }, [rerender]);

  // template literal = backticks for string so you can put variable in line 46

  // useeffect axios to endpoint, endpoint will grab all workouts for specific user.

  return (
    <div>
      <TextField
        variant="filled"
        value={workoutName}
        onChange={(e) => setWorkoutName(e.target.value)}
        label="Add Workout"
      />
      {/* <Button variant="contained" onClick={addWorkout}>
        Add
      </Button> */}
      <Fab
        onClick={addWorkout}
        style={{ margin: "16px" }}
        color="primary"
        aria-label="add"
      >
        <Add />
      </Fab>
      {workoutList.map((el) => {
        return (
          <div>
            <Button
              variant="contained"
              onClick={() => deleteWorkout(el.workout_id)}
            >
              Delete
            </Button>
            <Button
              style={{ minWidth: "90px" }}
              variant="contained"
              onClick={() => navigate(`/Workout/${el.workout_id}`)}
            >
              {el.workout_name}
            </Button>
          </div>
        );
      })}
    </div>
  );
}
