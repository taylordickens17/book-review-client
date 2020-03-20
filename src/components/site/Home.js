import React, { useState, useEffect } from 'react';
import APIURL from '../../helpers/environment';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import styled from 'styled-components';

const useStyles = makeStyles({
    card: {
        height: 350,
        width: 350,
    }
})


const Home = () => {
    const [books, setBooks] = useState([])
    const classes = useStyles();

    const showAll = (books) => {
        fetch(`${APIURL}/user/allbooks`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then(res => res.json())
            .then((bookData) => { setBooks(bookData) })
    }

    const Heading = styled.h2`
        position: absolute;
        height: 47px;
        left: .25em;
        top: .05em;
    
        font-family: Saira ExtraCondensed;
        font-style: normal;
        font-weight: 800;
        font-size: 100px;
        line-height: 96.9%;
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
        left: .9em;
        top: .5em;
        margin: 0;

        font-family: Saira ExtraCondensed;
        font-style: normal;
        font-weight: 800;
        font-size: 10em;

        display: flex;
        color: #ffffff
    `;

    const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%
`;

    const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1
`;

    const booksMapper = () => {
        return books.map((books, index) => {
            return (
                <Column>
                    <Row>
                        <Card className={classes.card}>
                            <CardContent>
                                <div>{books.title}</div>
                                <div>{books.author}</div>
                                <div>{books.genre}</div>
                                <div>{books.rating}</div>
                                <div>{books.description}</div>
                                <div>{books.review}</div>
                            </CardContent>
                        </Card>
                    </Row>
                </Column>

            )
        })
    }
    useEffect(() => {
        showAll();
    }, [])

    return (
        <div className="header">
            <Heading>The Book Review</Heading>
            <SecondHeading className="homeSecondHead" >READ A BOOK</SecondHeading>
            <SecondHeading className="homeSecondBelow" style={{ fontSize: '3em', left: '3em' }}>Tell us what you think.</SecondHeading>
            <SecondHeading className="homeThirdBelow" style={{ fontSize: '3em', left: '3em', marginBottom: '1em' }}>Look at other's reviews.</SecondHeading>
            <div className="homeDiv">
                <Card>
                    {booksMapper()}
                </Card>
            </div>
        </div>
    );
}

export default Home;
