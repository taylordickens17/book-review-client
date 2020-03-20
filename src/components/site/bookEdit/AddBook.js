import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import APIURL from '../../../helpers/environment';

const AddBook = (props) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [rating, setRating] = useState('');
    const [description, setDescription] = useState('');
    const [review, setReview] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${APIURL}/auth/create/log`, {
            method: 'POST',
            body: JSON.stringify({
                title: title, author: author, genre: genre, rating: rating, description: description, review: review
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
            .then((res) => res.json())
            .then((logData) => {
                console.log(logData);
                setTitle('');
                setAuthor('');
                setGenre('');
                setRating('');
                setDescription('');
                setReview('');
                props.fetchBooks();
            })
    }

    return (
        <div className="addForm">
            <h3>Add a Book:</h3>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="title">Title:</Label>
                    <Input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="author">Author:</Label>
                    <Input type="text" name="author" value={author} onChange={(e) => setAuthor(e.target.value)}>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="genre">Genre:</Label>
                    <Input type="text" name="genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="rating">Rating:</Label>
                    <Input type="text" name="rating" value={rating} onChange={(e) => setRating(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="description">Description:</Label>
                    <Input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="review">Review:</Label>
                    <Input type="text" name="review" value={review} onChange={(e) => setReview(e.target.value)} />
                </FormGroup>
                <Button type="submit">ADD BOOK</Button>
            </Form>
        </div>
    )
}


export default AddBook;