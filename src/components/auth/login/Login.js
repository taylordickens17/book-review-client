import React, { useState } from 'react';
import { Form, FormGroup, Input, Button, Container } from 'reactstrap';
import APIURL from '../../../helpers/environment';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/user/login`, {
            method: 'POST',
            body: JSON.stringify({ username: username, password: password }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(response => response.json())
            .then((data) => {
                props.updateToken(data.sessionToken);
            })
    }

    return (
        <>
            <Container>
                <h1>Login</h1>
                <h3>-Read a book. Tell us about it-</h3>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Input onChange={e => setUsername(e.target.value)} name="username" value={username} placeholder="Username" />
                    </FormGroup>
                    <FormGroup>
                        <Input onChange={e => setPassword(e.target.value)} name="password" type="password" value={password} placeholder="Password" />
                    </FormGroup>
                    <Button type="submit" variant="outlined" className="auth-button" username={username} >Login</Button>
                    <p className="auth-switch" onClick={() => props.setIsLogin(!props.isLogin)}>
                        {props.isLogin ? "Don't have an account? Sign up here." : "Already have an account? Login here."}
                    </p>
                </Form>
            </Container>
        </>
    )
}

export default Login;