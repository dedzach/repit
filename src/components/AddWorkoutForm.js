import { React, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";

export default function AddWorkoutForm({ onSubmit }) {
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [exercise, setExercise] = useState("");
  const [time, setTime] = useState("");
  const [sets, setSets] = useState("");
  const { id } = useParams();

  // What made you think of this as a potential solution?
  console.log(id);

  const createExercise = () => {
    axios.post("http://localhost:3333/api/exercise", {
      sets: sets,
      exercise: exercise,
      reps: reps,
      weight: weight,
      time: time,
      workout_id: +id,
      // Why did you add the + and not just the id?
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        {/* <input placeholder="Sets" onChange={(e) => setSets(e.target.value)} />
        <input
          placeholder="Exercise"
          onChange={(e) => setExercise(e.target.value)}
        />
        <input placeholder="Reps" onChange={(e) => setReps(e.target.value)} />
        <input
          placeholder="Weight"
          onChange={(e) => setWeight(e.target.value)}
        />
        <input placeholder="Time" onChange={(e) => setTime(e.target.value)} /> */}
        <TextField
          style={{ margin: "0px 0px" }}
          value={sets}
          onChange={(e) => setSets(e.target.value)}
          id="Sets"
          label="Sets"
          variant="filled"
        />
        <TextField
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          id="Exercise"
          label="Exercise"
          variant="filled"
        />
        <TextField
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          id="Reps"
          label="Reps"
          variant="filled"
        />
        <TextField
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          id="Weight"
          label="Weight"
          variant="filled"
        />
        <TextField
          value={time}
          onChange={(e) => setTime(e.target.value)}
          id="Time"
          label="Time"
          variant="filled"
        />
        <Button
          variant="contained"
          style={{ margin: "10px 0px" }}
          onClick={createExercise}
        >
          Add Exercise
        </Button>
      </form>
    </div>
  );
}
