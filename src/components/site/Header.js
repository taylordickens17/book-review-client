import React from "react";
import Signup from '../auth/Forms/SignupForm';
import Login from '../auth/Forms/LoginForms';

const Header = (props) => {
    return (
        <div className="header">
            <h1>The Book<br />Review</h1>
            <div className="auth-container">
                <Signup updateToken={props.updateToken} />
                <Login updateToken={props.updateToken} />
            </div>
        </div >
    )
};

export default Header;