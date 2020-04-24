import React, { useState, useEffect } from 'react';
import BookCreate from './BookCreate';
import BookEdit from './BookEdit';
import BookCards from './BookCards';
import { Container } from 'reactstrap';
import APIURL from '../../../../helpers/environment';

const BookIndex = (props) => {
    const [books, setBooks] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [updateBooks, setUpdateBooks] = useState({});
    const [createActive, setCreateActive] = useState(false);
    const [bookCreate, setBookCreate] = useState({})

    const fetchBooks = () => {
        fetch(`${APIURL}/auth/all/log/`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
            .then((data) => {
                setBooks(data)
                console.log(data.books);
            })
    }
    useEffect(() => {
        fetchBooks();
    }, [])


    return (
        <div>

        </div>
    )
}

export default BookIndex;
