import React from 'react';
import BookIndex from './bookshelf/BookIndex';
import { Container, CardDeck } from 'reactstrap';

const Profile = (props) => {

    return (
        <Container>
            <h1>Hello!</h1>
            <h3>Read any good books lately?</h3>
            <BookIndex token={props.token} />
        </Container>
    )
}

export default Profile;