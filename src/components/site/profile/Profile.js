import React from 'react';
import BookIndex from './bookshelf/BookIndex';
import { Container } from 'reactstrap';

const Profile = (props) => {

    return (
        <Container className="profile">
            <h1 className="prof-title">Hello!</h1>
            <h3 className="prof-subtitle">Read any good books lately?</h3>
            <BookIndex token={props.token} />
        </Container>
    )
}

export default Profile;