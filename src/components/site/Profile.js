import React, { useState, useEffect } from 'react';
import AddBook from './bookEdit/AddBook';
import UpdateBook from './bookEdit/UpdateBook';
import DeleteBook from './bookEdit/DeleteBook';
// import { Card, CardBody } from 'reactstrap';

const Profile = (props) => {

    const [addClicked, setAddClicked] = useState(false);
    const [updateClicked, setUpdateClicked] = useState(false);
    const [deleteClicked, setDeleteClicked] = useState(false);

    const [books, setBooks] = useState([])
    const [updateBooks, setUpdateBooks] = useState(false);
    const [booksToUpdate, setBooksToUpdate] = useState({});

    const fetchBooks = () => {
        fetch(`https://localhost:3002/auth/one/log/`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
            .then((logData) => {
                setBooks(logData)
                console.log(logData);
            })
    }
    useEffect(() => {
        fetchBooks();
    }, [])

    const editUpdateBooks = (books) => {
        setBooksToUpdate(books);
        console.log(books);
    }

    const updateOn = () => {
        setUpdateBooks(true);
    }

    const updateOff = () => {
        setUpdateBooks(false);
    }

    return (
        <div className="header">
            <h2 className="profileHeading">The Book Review</h2>
            {/* <h3 className="profileSecondHead">Welcome back, {profile}</h3> */}
            <h3 className="profileSecondBelow">Read any good books lately?</h3>
            <div className="profileDiv">
                <button onClick={() => setAddClicked(true)} token={props.token} fetchBooks={fetchBooks}>ADD BOOK</button>
                {addClicked === true ? <AddBook /> : null}
                <button onClick={() => setUpdateClicked(true)}>UPDATE BOOK</button>
                {updateClicked === true ? <UpdateBook /> : null}
                <button onClick={() => setDeleteClicked(true)} books={books} editUpdateBooks={editUpdateBooks} updateOn={updateOn} fetchBooks={fetchBooks} token={props.token}>DELETE BOOK</button>
                {deleteClicked === true ? <DeleteBook /> : null}
                {updateBooks ? <UpdateBook booksToUpdate={booksToUpdate} updateOff={updateOff} token={props.token}
                    fetchBooks={fetchBooks} /> : <></>}
            </div>
        </div>
        // <Card style={{ width: '18rem' }}>
        //     <Card.Img variant="top" src="holder.js/100px180" />
        //     <Card.Body>
        //         <Card.Title>Card Title</Card.Title>
        //         <Card.Text>

        //         </Card.Text>
        //         <Button variant="primary">Go somewhere</Button>
        //     </Card.Body>
        // </Card>
    );

}
export default Profile;