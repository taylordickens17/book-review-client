import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

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


//STYLED COMPONENTS
import styled from 'styled-components';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
})


const Background = styled.div`
    background: linear-gradient(118.72deg, rgba(254, 143, 79, 0.9) 0%, rgba(255, 82, 84, 0.9) 100%);
    height: 100vh;
    width: 100vw;
`;

const NoBullet = styled.li`

list-style-type: none;
`;

const Logout = styled.button`
    font-family: Saira ExtraCondensed;
    font-style: normal;
    font-weight: 800;
    font-size: 30px; 
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1); 
    border-style: none;
    border-radius: 10px;
    align-items: center;
    text-align: center;
    width: 218px;
    height: 83px;
    margin-left: 46em;
    margin-top: 60px;
    color: #ffffff
`;

const Navigation = (props) => {

    const classes = useStyles();

    const protectedViews = () => {
        if (props.token === undefined) {
            return (
                <Background>
                    <div className="parent-nav">
                        <div className="nav">
                            {/* <h1 className={classes.title} style={{ fontWeight: '800', fontSize: '300px', opacity: '0.3', textShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)', color: '#FFFFFF', flexGrow: '1', margin: '0' }}>The Book Review</h1> */}
                            <h1 className={classes.title}>The Book <br /> Review</h1>
                            <div className="nav-list-styling">
                                <NoBullet className="nav-list">
                                    <li><Link to="/login" className="Login">LOGIN</Link></li>
                                    <li><Link to="/signup" className="Signup">SIGNUP</Link></li>
                                </NoBullet>
                            </div>
                        </div>
                        <div className="nav-route">
                            <Switch>
                                <Route path="/login"><Login updateToken={props.updateToken} /></Route>
                                <Route path="/signup"><Signup updateToken={props.updateToken} /></Route>
                            </Switch>
                        </div>
                    </div>
                </Background >
            )
        } else {
            return (
                <Background>
                    <div>
                        <div className="nav">
                            <div className="nav-list-styling">
                                <NoBullet className="nav-list list-unstyled">
                                    <li><Link to="/" className="Home">HOME</Link></li>
                                    <li><Link to="/profile" className="Profile">PROFILE</Link></li>
                                    <li><Logout onClick={props.logout} className="Logout" >LOGOUT</Logout></li>
                                </NoBullet>
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
                </Background>
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