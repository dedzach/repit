import React from 'react';
import { Link } from 'react-router-dom';



export default function Navbar() {
    return(
        <div>
            <h1>RepIt</h1>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/CurrentPast">Menu</Link>
            </li>
            <li>
                <Link to="/Workout">Workout</Link>
            </li>
            <li>
                <Link to="/Current">Select Workout</Link>
            </li>
            <li>
                <Link to="/Past">Past Workouts</Link>
            </li>
        </div>
    );
}