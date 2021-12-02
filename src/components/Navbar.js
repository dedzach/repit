import React from 'react';
import { Link } from 'react-router-dom';



export default function Navbar() {
    return(
        <div>
            <h1 style={{color: "#FFFFFF"}} >RepIt</h1>
            <li style={{float: "left", padding: "20px"}}>
                <Link to="/">Home</Link>
            </li>
            <li style={{float: "left", padding: "20px"}}>
                <Link to="/CurrentPast">Menu</Link>
            </li>
            <li style={{float: "left", padding: "20px"}}>
                <Link to="/Workout">Workout</Link>
            </li>
            <li style={{float: "left", padding: "20px"}}>
                <Link to="/Current">Select Workout</Link>
            </li>
            <li style={{padding: "20px"}}>
                <Link to="/Past">Past Workouts</Link>
            </li>
        </div>
    );
}