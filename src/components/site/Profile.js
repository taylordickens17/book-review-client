import React, { useState, useEffect } from 'react';
import AddBook from './bookEdit/AddBook';
import UpdateBook from './bookEdit/UpdateBook';
import TableBook from './bookEdit/TableBook';
import APIURL from '../../helpers/environment';

import styled from 'styled-components';

const Profile = (props) => {
    console.log(props)

    const [addClicked, setAddClicked] = useState(false);

    const [books, setBooks] = useState([])
    const [updateBooks, setUpdateBooks] = useState(false);
    const [booksToUpdate, setBooksToUpdate] = useState({});

    const fetchBooks = () => {
        fetch(`${APIURL}/auth/all/log/`, {
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

    //Styling
    const Heading = styled.h2`
    position: absolute;
    width: 903px;
    left: 50px;
    top: 77px;
    margin: 0;

    font-family: Saira ExtraCondensed;
    font-style: normal;
    font-weight: 800;
    font-size: 100px;
    /* or 97px */

    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    opacity: 0.3;
    text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    `;

    const SecondHeading = styled.h3`
    position: relative;
    width: 1048px;
    top: 1em;
    left: 5em;
    margin: 0;

    font-family: Saira ExtraCondensed;
    font-style: normal;
    font-weight: 800;
    font-size: 7em;

    display: flex;
    color: #ffffff
    `;

    const AddButton = styled.button`
    font-family: Saira ExtraCondensed;
    font-style: normal;
    font-weight: 800;
    font-size: 30px; 
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1); 
    border-style: none;
    border-radius: 10px;
    align-items: center;
    text-align: center;
    width: 218px;
    height: 83px;
    margin-left: 46em;
    margin-top: 60px;
    color: #ffffff
`;


    return (
        <div className="header">
            <Heading>The Book Review</Heading>
            <SecondHeading className="profileSecondHead">Welcome back!</SecondHeading>
            <SecondHeading style={{ fontSize: '3em', left: '12em', top: '1em' }} className="profileSecondBelow">Read any good books lately?</SecondHeading>
            <SecondHeading style={{ fontSize: '3em', left: '.5em', top: '1em' }}>Your Shelf:</SecondHeading>
            <div className="profileDiv">
                <AddButton onClick={() => setAddClicked(true)} >ADD BOOK</AddButton>
                {addClicked === true ? <AddBook token={props.token} fetchBooks={fetchBooks} /> : null}
                <TableBook books={books} editUpdateBooks={editUpdateBooks} updateOn={updateOn} fetchBooks={fetchBooks} token={props.token} />
                {updateBooks ? <UpdateBook booksToUpdate={booksToUpdate} updateOff={updateOff} token={props.token}
                    fetchBooks={fetchBooks} /> : <></>}
            </div>
        </div>
    );

}
export default Profile;