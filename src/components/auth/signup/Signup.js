import React, { useState } from 'react';
import { Form, FormGroup, Input, Button, Container } from 'reactstrap';
import APIURL from '../../../helpers/environment';

const Signup = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password.length < 5) {
            alert('Password must be at least 5 characters')
        } else {
            fetch(`${APIURL}/user/signup`, {
                method: 'POST',
                body: JSON.stringify({ username: username, password: password }),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }).then(res => res.json())
                .then((data) => {
                    console.log(data);
                    props.updateToken(data.sessionToken)
                })
        }
    }

    return (
        <>
            <Container>
                <h1>Signup</h1>
                <h3>-Read a book. Tell us about it-</h3>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Input onChange={e => setUsername(e.target.value)} name="username" value={username} placeholder="Username" />
                    </FormGroup>
                    <FormGroup>
                        <Input onChange={e => setPassword(e.target.value)} name="password" type="password" value={password} placeholder="Password" />
                    </FormGroup>
                    <Button type="submit" variant="outlined" className="login-button">Signup</Button>
                    <p className="auth-switch" onClick={() => props.setIsLogin(!props.isLogin)}>
                        {props.isLogin ? "Don't have an account? Sign up here." : "Already have an account? Login here."}
                    </p>
                </Form>
            </Container>
        </>
    )
}

export default Signup;