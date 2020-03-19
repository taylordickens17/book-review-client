import React from "react";
import APIURL from '../../helpers/environment';

import styled from 'styled-components';


const Home = () => {
    const showAll = (books) => {
        fetch(`${APIURL}/auth/all/log`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        // .then(() => props.fetchBooks())
    }

    const Heading = styled.h2`
        position: absolute;
        width: 903px;
        height: 47px;
        left: 50px;
        top: 77px;
    
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
        left: 25px;
        margin: 0;

        font-family: Saira ExtraCondensed;
        font-style: normal;
        font-weight: 800;
        font-size: 7em;

        display: flex;
        color: #ffffff
    `;
    return (
        <div className="header">
            <Heading>The Book Review</Heading>
            <SecondHeading className="homeSecondHead" >READ A BOOK</SecondHeading>
            <SecondHeading className="homeSecondBelow" style={{ fontSize: '3em' }}>Tell us what you think.</SecondHeading>
            <SecondHeading className="homeThirdBelow" style={{ fontSize: '3em' }}>Look at other's reviews.</SecondHeading>
            <div className="homeDiv">

            </div>
        </div>
    );
}

export default Home;
