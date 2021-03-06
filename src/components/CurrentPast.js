import { react, useState } from "react";
// import { render } from 'react-dom';
import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom';
// import Current from './Current';
import Button from "@material-ui/core/Button";

export default function CurrentPast() {
  const navigate = useNavigate();

  return (
    <div>
      <Button variant="contained" onClick={() => navigate("/Current")}>
        Workout
      </Button>
      {/* <button 
                type="button" 
                className="btn btn-primary btn-lg" 
                onClick={() => navigate('/Current')}
                style={{ margin: "20px"}}>
                    Workout
                </button> */}
      <Button variant="contained" onClick={() => navigate("/Past")}>
        Previous Workouts
      </Button>
      {/* <button 
                type="button" 
                className="btn btn-primary btn-lg" 
                onClick={() => navigate('/Past')}
                style={{ padding: "10px"}}>
                    Previous Workouts
                </button> */}
    </div>
  );
}
