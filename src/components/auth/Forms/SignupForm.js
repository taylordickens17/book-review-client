import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import APIURL from '../../../helpers/environment';

const SignUp = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/user/signup`, {
            method: 'POST',
            body: JSON.stringify({ user: { username: username, password: password } }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
    }

    return (
        <div>
            <Form onSubmit={handleSubmit} className="SigninForm">
                <FormGroup>
                    <h3>Signup</h3>
                    <Label htmlFor="username">Username: </Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username} placeholder="Create a Username" required />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password: </Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" type="password" secureTextEntry={true} value={password} placeholder="Create a Password" required />
                    {password.length >= 4 || password.length < 1 ? null : <p>password must be at least 5 characters</p>}
                </FormGroup>
                <Button type="submit">SIGNUP</Button>
            </Form>
        </div>
    )
}

export default SignUp;