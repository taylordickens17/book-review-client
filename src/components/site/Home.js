import React from 'react';
import Navigation from './Navigation';

const Home = (props) => {
    console.log('Username', props.username);
    return (
        <div>
            <Navigation clickLogout={props.clickLogout} token={props.token} username={props.username} />
        </div>
    )
}

export default Home;