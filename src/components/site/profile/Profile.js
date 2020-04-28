import React from 'react';
import BookIndex from './bookshelf/BookIndex';
import { Container } from 'reactstrap';

const Profile = (props) => {

    return (
        <Container>
            <h1>The Book Review</h1>
            <h3>Welcome Back, {props.username}</h3>
            <BookIndex token={props.token} />
        </Container>
    )
}

export default Profile;