import React from "react";
import Navigation from './Navigation';

const Home = () => {
    return (
        <div className="header">
            <Navigation />
            <h2>The Book Review</h2>
            <div className="homeDiv">
                <p>This is the 'Book Review' app. For all your book review needs.</p>
            </div>
        </div>
    );
}

export default Home;
