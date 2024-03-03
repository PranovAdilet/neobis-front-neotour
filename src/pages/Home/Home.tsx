import React from 'react';
import Trips from "../Trips/Trips";
import Discover from "../Discover/Discover";
import Recommended from "../Recommended/Recommended";

const Home = () => {
    return (
        <main className="home">
            <Trips/>
            <Discover/>
            <Recommended/>
        </main>
    );
};

export default Home;