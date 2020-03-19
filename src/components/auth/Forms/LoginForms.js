import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import APIURL from '../../../helpers/environment';

import styled from 'styled-components';

const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%
`;

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
        <Row>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <h3>Login</h3>
                    <Label htmlFor="username">Username: </Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username} placeholder="Enter Your Username" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password: </Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" type="password" value={password} placeholder="Enter Your Password" />
                </FormGroup>
                <Button type="submit">LOGIN</Button>
            </Form>
        </Row>
    )
}

export default LogIn;