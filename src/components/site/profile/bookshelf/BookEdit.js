import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
import APIURL from '../../../../helpers/environment';

const BookEdit = (props) => {
    const [editTitle, setEditTitle] = useState(props.updateBook.title);
    const [editAuthor, setEditAuthor] = useState(props.updateBook.author);
    const [editGenre, setEditGenre] = useState(props.updateBook.genre);
    const [editRating, setEditRating] = useState(props.updateBook.rating);
    const [editDescription, setEditDescription] = useState(props.updateBook.description);
    const [editReview, setEditReview] = useState(props.updateBook.review);

    const booksUpdate = () => {
        fetch(`${APIURL}/book/update/${props.updateBooks.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title: editTitle,
                author: editAuthor,
                genre: editGenre,
                rating: editRating,
                description: editDescription,
                review: editReview
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then(() => {
            props.fetchBooks();
            props.updateOff();
        })
    }

    const closeUpdateModal = () => {
        props.updateOff();
    }

    return (
        <Modal isOpen={true}>
            <ModalHeader>Add Book<Button className="modal-close update-btn" onClick={closeUpdateModal}>X</Button></ModalHeader>
            <ModalBody >
                <Form onSubmit={booksUpdate}>
                    <FormGroup>
                        <Label htmlFor="title">Title:</Label>
                        <Input className="modal-form-bg" name="title" value={editTitle} onChange={e => setEditTitle(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="autho">Author:</Label>
                        <Input className="modal-form-bg" name="author" value={editAuthor} onChange={e => setEditAuthor(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="genre">Genre:</Label>
                        <Input className="modal-form-bg" name="genre" value={editGenre} onChange={e => setEditGenre(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="rating">Rating:</Label>
                        <Input className="modal-form-bg" name="rating" value={editRating} onChange={e => setEditRating(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="description">Description:</Label>
                        <Input className="modal-form-bg" name="description" value={editDescription} onChange={e => setEditDescription(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="review">Review:</Label>
                        <Input className="modal-form-bg" name="review" value={editReview} onChange={e => setEditReview(e.target.value)} />
                    </FormGroup>
                    <Button className="modal-btn" type="submit">Add</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}
export default BookEdit;