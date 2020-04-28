import React, { useState, useEffect } from 'react';
import BookCreate from './BookCreate';
import BookEdit from './BookEdit';
import BookCards from './BookCards';
import { Container, Row, Col, Button } from 'reactstrap';
import APIURL from '../../../../helpers/environment';

const BookIndex = (props) => {
    const [books, setBooks] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [updateBooks, setUpdateBooks] = useState({});
    const [createActive, setCreateActive] = useState(false);
    const [bookCreate] = useState({})

    const fetchBooks = () => {
        fetch(`${APIURL}/book/find`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
            .then((data) => {
                setBooks(data)
                console.log('bookIndex', data);
            })
    }

    useEffect(() => {
        fetchBooks();
    }, [])

    const updateMyBooks = (books) => {
        setUpdateBooks(books);
    }

    // const createMyBooks = (books) => {
    //     setBookCreate(books);
    // }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }

    const createOn = () => {
        setCreateActive(true);
    }

    const createOff = () => {
        setCreateActive(false);
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h3>BookShelf</h3>
                    <hr />
                    <Button onClick={() => createOn()}>Create a Book +</Button>
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    {createActive ?
                        <BookCreate
                            bookCreate={bookCreate}
                            createOff={createOff}
                            fetchBooks={fetchBooks}
                            token={props.token}
                        />
                        : <></>}
                </Col>
                <Col>
                    <BookCards
                        books={books}
                        updateMyBooks={updateMyBooks}
                        updateOn={updateOn}
                        fetchBooks={fetchBooks}
                        token={props.token}
                    />
                </Col>
                {updateActive ?
                    <BookEdit
                        updateBooks={updateBooks}
                        updateOff={updateOff}
                        token={props.token}
                        fetchBooks={fetchBooks}
                    />
                    : <></>}
            </Row>
        </Container>
    )
}

export default BookIndex;
