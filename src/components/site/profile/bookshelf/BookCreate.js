import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, ModalBody, Modal, ModalHeader } from 'reactstrap';
import IconButton from '@material-ui/core/IconButton/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import APIURL from '../../../../helpers/environment';

const BookCreate = (props) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');
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
                    description: description,
                    rating: rating,
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
                    setDescription('');
                    setRating('');
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
            <ModalHeader>Add Book<IconButton className="modal-close" onClick={closeModal}><ClearIcon /></IconButton></ModalHeader>
            <ModalBody >
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Input className="modal-form-bg" name="title" value={title} placeholder="Title" onChange={e => setTitle(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Input className="modal-form-bg" name="author" value={author} placeholder="Author" onChange={e => setAuthor(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Input className="modal-form-bg" name="genre" value={genre} placeholder="Genre" onChange={e => setGenre(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Input className="modal-form-bg" name="description" value={description} placeholder="Description" onChange={e => setDescription(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Input className="modal-form-bg" name="rating" value={rating} placeholder="Rating" onChange={e => setRating(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Input className="modal-form-bg" name="review" value={review} placeholder="Review" onChange={e => setReview(e.target.value)} />
                    </FormGroup>
                    <Button className="modal-btn" type="submit">Add</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}
export default BookCreate;