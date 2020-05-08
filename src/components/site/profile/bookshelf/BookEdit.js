import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
import IconButton from '@material-ui/core/IconButton/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import APIURL from '../../../../helpers/environment';

const BookEdit = (props) => {
    const [editTitle, setEditTitle] = useState(props.updateBooks.title);
    const [editAuthor, setEditAuthor] = useState(props.updateBooks.author);
    const [editGenre, setEditGenre] = useState(props.updateBooks.genre);
    const [editRating, setEditRating] = useState(props.updateBooks.rating);
    const [editDescription, setEditDescription] = useState(props.updateBooks.description);
    const [editReview, setEditReview] = useState(props.updateBooks.review);

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
            <ModalHeader>Update Book<IconButton className="update-btn" onClick={closeUpdateModal}><ClearIcon /></IconButton></ModalHeader>
            <ModalBody >
                <Form onSubmit={booksUpdate}>
                    <FormGroup>
                        <Input className="modal-form-bg" name="title" value={editTitle} placeholder="Title" onChange={e => setEditTitle(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Input className="modal-form-bg" name="author" value={editAuthor} placeholder="Author" onChange={e => setEditAuthor(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Input className="modal-form-bg" name="genre" value={editGenre} placeholder="Genre" onChange={e => setEditGenre(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Input className="modal-form-bg" name="description" value={editDescription} placeholder="Description" onChange={e => setEditDescription(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Input className="modal-form-bg" name="rating" value={editRating} placeholder="Rating" onChange={e => setEditRating(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Input className="modal-form-bg" name="review" value={editReview} placeholder="Review" onChange={e => setEditReview(e.target.value)} />
                    </FormGroup>
                    <Button className="modal-btn" type="submit">Update</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}
export default BookEdit;