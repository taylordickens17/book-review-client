import React from 'react';
import APIURL from '../../../helpers/environment';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import styled from 'styled-components';

const useStyles = makeStyles({
    card: {
        height: 350,
        width: 350,
    }
})

const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1
`;

const DeleteBook = (props) => {

    const classes = useStyles();

    const deleteBook = (books) => {
        fetch(`${APIURL}/auth/delete/${books.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
            .then(() => props.fetchBooks())
    }

    const booksMapper = () => {
        return props.books.map((books, index) => {
            return (
                <Column>
                    <Row>
                        <Card className={classes.card}>
                            <CardContent>
                                <div>{books.title}</div>
                                <div>{books.author}</div>
                                <div>{books.genre}</div>
                                <div>{books.rating}</div>
                                <div>{books.description}</div>
                                <div>{books.review}</div>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="dark" onClick={() => { props.editUpdateBooks(books); props.updateOn() }}>Update</Button>
                                <Button size="small" color="dark" onClick={() => { deleteBook(books) }}>Delete</Button>
                            </CardActions>
                        </Card>
                    </Row>
                </Column>

            )
        })
    }
    return (
        <Card>
            {booksMapper()}
        </Card>
    )
}

export default DeleteBook;