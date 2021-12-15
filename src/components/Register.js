import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import './Login.css';
import { useState } from 'react'; 
import axios from 'axios';
import { useNavigate } from 'react-router';




export default function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState('');

    const navigate = useNavigate();
    const register = (e) => {
        console.log( username, email, password )
        axios.post('http://localhost:3333/api/user', {
            username: username,
            email: email,
            password: password
        });
        alert(`Your account has been created!`);
    //  res.redirect("/CurrentPast");
    }

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return(
        <div className="Login">
            <h1>Register</h1>
            <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="password">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                    type="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control 
                    autoFocus
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button 
                block size="lg" 
                type="submit" 
                disabled={!validateForm()}
                onClick={register}
                >
                    Register
                </Button>
            </Form>  
        </div>
    )
}