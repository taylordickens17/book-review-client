import React from 'react';

//CSS Bootstrap
import 'bootstrap/dist/css/bootstrap.css';

//import icons
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

//Reactstrap
import { Nav, NavItem, Button } from 'reactstrap';

//Router
import { Route, Link, Switch } from 'react-router-dom';

//Components
import Profile from './profile/Profile';
import Dashboard from './dashboard/Dashboard';

const Navigation = (props) => (
    <div>
        <Nav className="py-md-3 nav-look">
            <NavItem className="logo">
                <Link to="/dashboard" className="logo-book">The Book Review</Link>
            </NavItem>
            <NavItem className="spacing">
                <Link to="/dashboard"><Button className="link-styled">HOME</Button></Link>
            </NavItem>
            <NavItem className="spacing">
                <Link to="/profile"><Button className="link-styled">PROFILE</Button></Link>
            </NavItem>
            <NavItem className="spacing">
                <Button className="link-styled" onClick={props.clickLogout}>LOGOUT</Button>
            </NavItem>
        </Nav>

        {/*MOBILE NAVBAR */}
        <div className="mobile-navbar">
            <ul className="mobile-navbar-list">
                <li className="mobile-item">
                    <Link className="mobile-link" to="/dashboard">
                        <HomeIcon className="mobile-nav-dash" />
                    </Link>
                </li>
                <li className="mobile-item">
                    <Link className="mobile-link" to="/profile">
                        <AccountCircleIcon className="mobile-nav-prof" />
                    </Link>
                </li>
                <li className="mobile-item" onClick={props.clickLogout}>
                    <ExitToAppIcon className="mobile-nav-exit" />
                </li>
            </ul>
        </div>

        <Switch>
            <Route exact path="/dashboard"><Dashboard token={props.token} /></Route>
            <Route exact path="/profile"><Profile token={props.token} username={props.username} /></Route>
        </Switch>

    </div>
)

export default Navigation;