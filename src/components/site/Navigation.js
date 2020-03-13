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

const Navigation = (props) => {
    console.log(props);

    const protectedViews = () => {
        if (props.token === undefined) {
            return (
                <div>
                    <div className="nav">
                        <div className="nav-list-styling">
                            <ul className="nav-list list-unstyled">
                                <li><Link to="/login">LOGIN</Link></li>
                                <li><Link to="/signup">SIGNUP</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="nav-route">
                        <Switch>
                            <Route path="/login"><Login updateToken={props.updateToken} /></Route>
                            <Route path="/signup"><Signup updateToken={props.updateToken} /></Route>
                        </Switch>
                    </div>
                </div>

            )
        } else {
            return (
                <div>
                    <div className="nav">
                        <div className="nav-list-styling">
                            <ul className="nav-list list-unstyled">
                                <li><Link to="/">HOME</Link></li>
                                <li><Link to="/profile">PROFILE</Link></li>
                                <li><button onClick={props.logout}>LOGOUT</button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="nav-route">
                        <Switch>
                            <Route exact path="/"><Home /></Route>
                            <Route path="/profile"><Profile token={props.token} /></Route>
                            <Route path="/"><Home /></Route>
                        </Switch>
                    </div>
                </div>
            )
        }
    }

    return (
        <Router>
            {protectedViews()}
        </Router>
    )
}

export default Navigation;