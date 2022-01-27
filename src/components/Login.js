import React from "react";
import Form from "react-bootstrap/Form";

// import './Login.css';
import { useState } from "react";
import {
  useNavigate,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import axios from "axios";
// import { Link } from 'react-router-dom';
// import CurrentPast from './CurrentPast'
import { Button, TextField } from "@material-ui/core";

export default function Login({ activeUser, setActiveUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate;

  // const [activeUser, setActiveUser] = useState([]);

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    console.log(email, password);
    axios
      .post("http://localhost:3333/api/user/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        setActiveUser(response.data.user_id);
      });
    alert(`Welcome ${activeUser} You have been logged in!`);
    //  res.redirect("/CurrentPast");
    navigate("/CurrentPast");
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    axios
      .post("http://localhost:3333/api/user/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        setActiveUser(response.data.user_id);
        // (navigate('/CurrentPast'))
      });
  };

  const loginRedirect = (e) => {
    navigate("/CurrentPast");
  };

  // const hello(e) {
  //     login();
  //     loginRedirect();
  // }

  console.log(activeUser);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    const { email, password } = useState;
  }

  return (
    <div className="Login">
      <h1 style={{ color: "#FFFFFF" }}>Login</h1>
      <Form onSubmit={handleSubmit}>
        {/* <Form.Group size="lg" controlId="email">
          <Form.Label style={{ color: "#FFFFFF" }}>Email:</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password"> */}
        {/* <label htmlFor="password">Password</label> */}
        {/* <Form.Label style={{ color: "#FFFFFF" }} id="password">
            Password:
          </Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group> */}
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          label="Email"
          variant="filled"
        />
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          label="Password"
          variant="filled"
        />
        {/* <Button 
                     variant="contained"
                        block size="lg" 
                    type="submit" 
                    disabled={!validateForm()}
                    // onClick={() => {
                    //     login();
                    //      loginRedirect();
                    // }}
                    onClick={login}
                    >
                    Login
                </Button > */}
      </Form>
      <Button variant="contained" onClick={login}>
        Login
      </Button>
    </div>
  );
}
