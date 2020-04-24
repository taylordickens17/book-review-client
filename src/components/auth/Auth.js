import React, { useState } from 'react';
import Signup from './signup/Signup';
import Login from './login/Login';
import { Container } from 'reactstrap';

const Auth = (props) => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <Container>
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