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
    console.log(props.books);

    const bookMapper = () => {
        if (props.books.books == undefined) {
            console.log('empty for now. sorry.')
        } else {
            return props.books.map((books, index) => {
                return (
                    <Card key={index}>
                        <CardBody>
                            <CardTitle>{books.title}</CardTitle>
                            <CardSubtitle>Author: {books.author}</CardSubtitle>
                            <CardSubtitle>Genre: {books.genre}</CardSubtitle>
                            <CardSubtitle>Rating: {books.rating}</CardSubtitle>
                            <CardSubtitle>Description: {books.description}</CardSubtitle>
                            <CardSubtitle>{books.review}</CardSubtitle>
                            <IconButton onClick={() => { props.updateMyBooks(books); props.updateOn() }}><CreateIcon /></IconButton>
                            <IconButton onClick={() => { bookDelete(books) }}><ClearIcon /></IconButton>
                        </CardBody>
                    </Card>

                )
            })
        }
    }
    return (
        <CardDeck>
            {bookMapper()}
        </CardDeck>
    )
}



export default BookCards;