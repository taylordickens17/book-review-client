import React, { useState } from 'react';
import Signup from './signup/Signup';
import Login from './login/Login';
import { Container } from 'reactstrap';

const Auth = (props) => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <Container>
            <h1 className="logo-book">The Book Review</h1>
            {isLogin ?
                <Login
                    isLogin={isLogin}
                    setIsLogin={setIsLogin}
                    updateToken={props.updateToken}
                />
                :
                <Signup
                    isLogin={isLogin}
                    setIsLogin={setIsLogin}
                    updateToken={props.updateToken}
                />
            }
        </Container>
    )
}

export default Auth;