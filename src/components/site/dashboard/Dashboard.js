import React, { useState, useEffect } from "react";
import { Card, CardTitle, CardBody, CardSubtitle, CardDeck, Container } from 'reactstrap';
import APIURL from '../../../helpers/environment';

const Dashboard = (props) => {

    const [books, setBooks] = useState([]);

    const fetchAllBooks = () => {
        fetch(`${APIURL}/book/allbooks`, {
            method: "GET",
            headers: new Headers({
                'Content-Type': 'application/json'
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
                <Card key={index}>
                    <CardBody>
                        <CardTitle>{books.title}</CardTitle>
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
            <h1>Dashboard</h1>
            <CardDeck>
                {bookMapper()}
            </CardDeck>
        </Container>

    )
}

export default Dashboard;