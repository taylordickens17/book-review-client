import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

const UpdateBook = (props) => {
    const [editTitle, setEditTitle] = useState(props.updateBook.title);
    const [editAuth, setEditAuth] = useState(props.updateBook.author);
    const [editGenre, setEditGenre] = useState(props.updateBook.genre);
    const [editRate, setEditRate] = useState(props.updateBook.rating);
    const [editDesc, setEditDesc] = useState(props.updateBook.description);
    const [editRev, setEditRev] = useState(props.updateBook.review);

    const updateEdit = (e) => {
        e.preventDefault();
        fetch(` https://td-zebookreviewapp2020.herokuapp.com/auth/api/log/${props.updateBook.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title: editTitle,
                author: editAuth,
                genre: editGenre,
                rating: editRate,
                description: editDesc,
                review: editRev
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => {
            props.fetchBooks();
            props.updateOff();
        })
    }

    return (
        <Modal isOpen={true}>
            <ModalHeader>Update Your Book:</ModalHeader>
            <ModalBody>
                <Form onSubmit={updateEdit}>
                    <FormGroup>
                        <Label htmlFor="result">Edit Title:</Label>
                        <Input type="text" name="result" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="description">Edit Author:</Label>
                        <Input type="text" name="author" value={editAuth} onChange={(e) => setEditAuth(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="definition">Edit Genre:</Label>
                        <Input type="text" name="genre" value={editGenre} onChange={(e) => setEditGenre(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="result">Edit Rating:</Label>
                        <Input type="text" name="rating" value={editRate} onChange={(e) => setEditRate(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="result">Edit Description:</Label>
                        <Input type="text" name="description" value={editDesc} onChange={(e) => setEditDesc(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="result">Edit Review:</Label>
                        <Input type="text" name="review" value={editRev} onChange={(e) => setEditRev(e.target.value)} />
                    </FormGroup>
                    <Button type="submit">Update</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default UpdateBook;