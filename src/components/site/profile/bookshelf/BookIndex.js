import React, { useState, useEffect } from 'react';
import BookCreate from './BookCreate';
import BookEdit from './BookEdit';
import BookCards from './BookCards';
import { Container, Row, Col } from 'reactstrap';
import IconButton from '@material-ui/core/IconButton/IconButton';
import AddIcon from '@material-ui/icons/Add';
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
                <Col md="12">
                    <h3 className="bookshelf-title" style={{ marginLeft: "-15px" }}>BookShelf<IconButton onClick={() => createOn()}><AddIcon style={{ color: "white" }} /></IconButton></h3>
                    <hr style={{ marginLeft: "-15px" }} />
                </Col>
            </Row>
            <br />
            <Row>
                <Col md="12">
                    {createActive ?
                        <BookCreate
                            bookCreate={bookCreate}
                            createOff={createOff}
                            fetchBooks={fetchBooks}
                            token={props.token}
                        />
                        : <></>}
                </Col>
                <Col md="12">
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
