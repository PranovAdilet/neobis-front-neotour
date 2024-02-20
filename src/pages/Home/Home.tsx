import React from 'react';
import Trips from "./Trips";
import Discover from "./Discover";
import Recommended from "./Recommended";

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