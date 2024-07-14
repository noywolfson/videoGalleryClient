import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Welcome to my video gallery!</h1>
            <Link to="/upload">
                <button className="home-button" >Upload Page</button>
            </Link>
            <Link to="/gallery">
                <button className="home-button" >Gallery Page</button>
            </Link>
        </div>
    );
}

export default Home;
