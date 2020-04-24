import React from 'react';
import Navigation from './Navigation';

const Home = (props) => {
    return (
        <div>
            <Navigation clickLogout={props.clickLogout} token={props.sessionToken} />
        </div>
    )
}

export default Home;