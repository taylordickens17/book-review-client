import React from 'react';
import { Card, CardTitle, CardBody, CardSubtitle, CardDeck } from 'reactstrap';
import IconButton from '@material-ui/core/IconButton/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import CreateIcon from '@material-ui/icons/Create';
import APIURL from '../../../../helpers/environment';

const BookCards = (props) => {

    const bookDelete = (books) => {
        fetch(`${APIURL}/book/delete/${books.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then(() => props.fetchBooks)
    }

    const bookMapper = () => {
        return props.books.map((books, index) => {
            return (
                <Card key={index} className="book-card">
                    <CardBody className="book-body">
                        <CardTitle className="card-title">{books.title}</CardTitle>
                        <CardSubtitle>By {books.author}</CardSubtitle>
                        <hr className="card-style" />
                        <CardSubtitle>Genre: {books.genre}</CardSubtitle>
                        <CardSubtitle>Description: {books.description}</CardSubtitle>
                        <CardSubtitle>Rating: {books.rating}</CardSubtitle>
                        <CardSubtitle>Review: {books.review}</CardSubtitle>
                        <IconButton onClick={() => { props.updateMyBooks(books); props.updateOn() }}><CreateIcon /></IconButton>
                        <IconButton onClick={() => { bookDelete(books); window.location.reload(); }}><ClearIcon /></IconButton>
                    </CardBody>
                </Card>

            )
        })
    }
    return (
        <CardDeck>
            {bookMapper()}
        </CardDeck>
    )
}



export default BookCards;