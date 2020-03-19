import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
import APIURL from '../../../helpers/environment';

import styled from 'styled-components';


const UpdateBook = (props) => {
    const [editTitle, setEditTitle] = useState(props.booksToUpdate.title);
    const [editAuth, setEditAuth] = useState(props.booksToUpdate.author);
    const [editGenre, setEditGenre] = useState(props.booksToUpdate.genre);
    const [editRate, setEditRate] = useState(props.booksToUpdate.rating);
    const [editDesc, setEditDesc] = useState(props.booksToUpdate.description);
    const [editRev, setEditRev] = useState(props.booksToUpdate.review);

    console.log(props)
    console.log(editTitle)

    const updateEdit = (e, books) => {
        e.preventDefault();
        fetch(`${APIURL}/auth/update/${props.booksToUpdate.id}`, {
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

    const UpdateButton = styled.button`
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    `;

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
                    <UpdateButton type="submit">Update</UpdateButton>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default UpdateBook;