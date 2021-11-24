import react from 'react';
import { render } from 'react-dom';
import Login from './Login';
import Register from './Register';


export default function Home(props) {
        return (
            <div> 
                <Login activeUser={props.activeUser} setActiveUser={props.setActiveUser}/>
                <Register/>
            </div>
        );
    }
    // React autimatically triggers a rerender anytime you update state. Any time I set ActiveUser it triggers a rerender. 
    // React will never rerender a component if you never modify the state. 
    // Hooks = Variable to store something and function to update it. 
