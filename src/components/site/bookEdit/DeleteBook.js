import React from 'react';
import { Table, Button } from 'reactstrap';

const DeleteBook = (props) => {
    const deleteBook = (books) => {
        fetch(`https://localhost:3002/auth/delete/${books.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
            .then(() => props.fetchWorkouts())
    }

    const workoutMapper = () => {
        return props.workouts.map((books, index) => {
            return (
                <tr key={index}>
                    <th scope="row">{books.id}</th>
                    <td>{books.title}</td>
                    <td>{books.author}</td>
                    <td>{books.genre}</td>
                    <td>{books.rating}</td>
                    <td>{books.description}</td>
                    <td>{books.review}</td>
                    <td>
                        <Button color="warning" onClick={() => { props.editUpdateWorkout(books); props.updateOn() }}>Update</Button>
                        <Button color="danger" onClick={() => { deleteBook(books) }}>Delete</Button>
                    </td>
                </tr>
            )
        })
    }
    return (
        <>
            <h3>Your Shelf</h3>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Genre</th>
                        <th>Rating</th>
                        <th>Description</th>
                        <th>Review</th>
                    </tr>
                </thead>
                <tbody>
                    {workoutMapper()}
                </tbody>
            </Table>
        </>
    )
}

export default DeleteBook;