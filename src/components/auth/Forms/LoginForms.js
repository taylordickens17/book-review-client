import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import APIURL from '../../../helpers/environment';

const LogIn = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/user/login/`, {
            method: 'POST',
            body: JSON.stringify({ user: { username: username, password: password } }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken);
        })
    }
    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <h3>Login</h3>
                <Label htmlFor="username">Username</Label>
                <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username} />
                {!username ? <p>username is required</p> : null}
            </FormGroup>
            <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password} />
                {!password ? <p>password is required</p> : null}
            </FormGroup>
            <Button type="submit">LOGIN</Button>
        </Form>
    )
}

export default LogIn;