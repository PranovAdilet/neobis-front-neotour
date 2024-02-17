import React from 'react';
import discoverImg from '../assets/images/discover.png'
import {Link} from "react-router-dom";


const Discover = () => {
    return (
        <section className="discover">
            <div className="container">
                <div className="discover__top">
                    <h2 className="discover__title">Discover</h2>
                    <div className="discover__btns">
                        <button className="discover__btns-left"><div className="discover__arrow-left"></div></button>
                        <button className="discover__btns-right"><div className="discover__arrow-right"></div></button>
                    </div>
                </div>
                <nav className="discover__nav">
                    <Link to={`/descr`} className="discover__nav-item">Popular</Link>
                    <Link to={`/descr`} className="discover__nav-item">Featured</Link>
                    <Link to={`/descr`} className="discover__nav-item">Most Visited</Link>
                    <Link to={`/descr`} className="discover__nav-item">Europe</Link>
                    <Link to={`/descr`} className="discover__nav-item">Asia</Link>
                </nav>
                <div className="discover__row">
                    <Link to="/descr" className="discover__item">
                        <img className="discover__item-img" src={discoverImg} alt=""/>
                        <div className="discover__item-bottom"></div>
                        <h4 className="discover__item-title">Northern Mountain</h4>
                    </Link>
                    <Link to="/descr" className="discover__item">
                        <img className="discover__item-img" src={discoverImg} alt=""/>
                        <h4 className="discover__item-title">Northern Mountain</h4>
                        <div className="discover__item-bottom"></div>
                    </Link>
                    <Link to="/descr" className="discover__item">
                        <img className="discover__item-img" src={discoverImg} alt=""/>
                        <h4 className="discover__item-title">Northern Mountain</h4>
                        <div className="discover__item-bottom"></div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Discover;