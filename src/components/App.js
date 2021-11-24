import React from 'react';
// import REACTDOM from 'react-dom';
// import Login from './Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Register from './Register';
import { useState } from 'react';
import Current from './Current';
import CurrentPast from './CurrentPast';
import Past from './Past';
import Workout from './Workout';
import Navbar from './Navbar';
import Home from './Home';
// import AddWorkoutForm from './AddWorkoutForm'


export default function App() {

  const [activeUser, setActiveUser] = useState(0);

  // function requireAuth(nextState, replace, next) {
  //   if (!autheticated) {
  //     replace({
  //       Login: "/Login"
  //       state: { CurrentPast: nextState.location.pathname}
  //     });
  //   }
  //   next();
  // }

    return(
      <div>
        {/* <AddWorkoutForm/> */}
        <Router>
          <Navbar/>
              <Routes>
                <Route exact path='/' element={<Home activeUser={activeUser} setActiveUser={setActiveUser}/>}/> 
                {/* {requireAuth ? <Redirect to="/CurrentPast" /> : <CurrentPast />} */}
                <Route path='/Current' element={<Current activeUser={activeUser}/>}/>
                <Route path='/Workout/:id' element={<Workout/>}/>
                <Route path='/CurrentPast' element={<CurrentPast/>}/>
                <Route path='/Past' element={<Past activeUser={activeUser} setActiveUser={setActiveUser}/>}/>
              </Routes>
        </Router>
      </div>
    );
  }


