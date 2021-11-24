import { react, useState } from 'react';
// import { render } from 'react-dom';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import Current from './Current';


export default function CurrentPast() {

    const navigate = useNavigate();
    
        return (
            <div>

                <button size="lg" onClick={() => navigate('/Current')}>
                    Workout
                </button>
                <button size="lg" onClick={() => navigate('/Past')}>
                    Previous Workouts
                </button>
            </div>
        );
    }
