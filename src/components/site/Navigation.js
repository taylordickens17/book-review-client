import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Link, Switch } from 'react-router-dom';
import { Button } from 'reactstrap';
import Profile from './profile/Profile';
import Dashboard from './dashboard/Dashboard'

const Navigation = (props) => (
    <div className="sitebar">
        <div>
            <div>
                <ul>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Button onClick={props.clickLogout}>Logout</Button></li>
                </ul>
            </div>
        </div>

        <div>
            <Switch>
                <Route exact path="/dashboard"><Dashboard token={props.token} /></Route>
                <Route exact path="/profile"><Profile token={props.token} username={props.username} /></Route>
            </Switch>
        </div>
    </div>
)

export default Navigation;