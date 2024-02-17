import React from 'react';
import Trips from "./Trips";
import Discover from "./Discover";
import Recommended from "./Recommended";

const Home = () => {
    return (
        <section className="home">
            <Trips/>
            <Discover/>
            <Recommended/>
        </section>
    );
};

export default Home;