import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, ModalBody, Modal, ModalHeader } from 'reactstrap';
import APIURL from '../../../../helpers/environment';

const BookCreate = (props) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [rating, setRating] = useState('');
    const [description, setDescription] = useState('');
    const [review, setReview] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(props.token);
        if (title && author && genre && rating && description && review) {
            fetch(`${APIURL}/book/create`, {
                method: 'POST',
                body: JSON.stringify({
                    title: title,
                    author: author,
                    genre: genre,
                    rating: rating,
                    description: description,
                    review: review
                }),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': props.token
                })
            }).then(res => {
                res.json()
                console.log('hello')
            })

                .then(() => {
                    setTitle('');
                    setAuthor('');
                    setGenre('');
                    setRating('');
                    setDescription('');
                    setReview('');
                    props.fetchBooks();
                    props.createOff();
                })
        } else {
            alert('Please, fill out all fields.')
        }
    }
    console.log(title);
    const closeModal = () => {
        props.createOff();
    }

    return (
        <Modal isOpen={true}>
            <ModalHeader>Add Book<Button className="modal-close update-btn" onClick={closeModal}>X</Button></ModalHeader>
            <ModalBody >
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="title">Title:</Label>
                        <Input className="modal-form-bg" name="title" value={title} onChange={e => setTitle(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="autho">Author:</Label>
                        <Input className="modal-form-bg" name="author" value={author} onChange={e => setAuthor(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="genre">Genre:</Label>
                        <Input className="modal-form-bg" name="genre" value={genre} onChange={e => setGenre(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="rating">Rating:</Label>
                        <Input className="modal-form-bg" name="rating" value={rating} onChange={e => setRating(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="description">Description:</Label>
                        <Input className="modal-form-bg" name="description" value={description} onChange={e => setDescription(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="review">Review:</Label>
                        <Input className="modal-form-bg" name="review" value={review} onChange={e => setReview(e.target.value)} />
                    </FormGroup>
                    <Button className="modal-btn" type="submit">Add</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}
export default BookCreate;