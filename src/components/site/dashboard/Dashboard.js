import React, { useState, useEffect } from "react";
import { Card, CardTitle, CardBody, CardSubtitle, CardDeck, Container } from 'reactstrap';
import APIURL from '../../../helpers/environment';

const Dashboard = (props) => {

    const [books, setBooks] = useState([]);

    const fetchAllBooks = () => {
        fetch(`${APIURL}/book/allbooks`, {
            method: "GET",
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
            .then(res => res.json())
            .then((bookData) => { setBooks(bookData) })
    }
    useEffect(() => {
        fetchAllBooks();
    }, [])

    const bookMapper = () => {
        return books.map((books, index) => {
            return (
                <Card key={index} className="book-card">
                    <CardBody className="book-body">
                        <CardTitle className="card-title">{books.title}</CardTitle>
                        <CardSubtitle>Author: {books.author}</CardSubtitle>
                        <CardSubtitle>Genre: {books.genre}</CardSubtitle>
                        <CardSubtitle>Rating: {books.rating}</CardSubtitle>
                        <CardSubtitle>Description: {books.description}</CardSubtitle>
                        <CardSubtitle>{books.review}</CardSubtitle>
                    </CardBody>
                </Card>
            )
        })
    }

    return (
        <Container>
            <h1>READ A BOOK</h1>
            <h3>Tell us what you think.</h3>
            <h3>Look at other's reviews.</h3>
            <hr />
            <br />
            <CardDeck>
                {bookMapper()}
            </CardDeck>
        </Container>

    )
}

export default Dashboard;