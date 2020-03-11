import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Signup from '../auth/Forms/SignupForm';
import Login from '../auth/Forms/LoginForms';

const Navigation = (props) => (
    <Router>
        <div className="nav">
            <div className="nav-list-styling">
                <ul className="nav-list list-unstyled">
                    <li><Link to="/login">LOGIN</Link></li>
                    <li> <Link to="/signup">SIGNUP</Link></li>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/profile">PROFILE</Link></li>
                    <li><button onClick={props.logout}>Logout</button></li>
                </ul>
            </div>
            <div className="nav-route">
                <Switch>
                    <Route exact path="/login"><Login updateToken={props.updateToken} /></Route>
                    <Route exact path="/signup"><Signup updateToken={props.updateToken} /></Route>
                    <Route exact path="/home"><Home /></Route>
                    <Route exact path="/profile"><Profile /></Route>
                    <Route exact path="/"><Home /></Route>
                </Switch>
            </div>
        </div>
    </Router>
)

export default Navigation;
