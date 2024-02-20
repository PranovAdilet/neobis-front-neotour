import React from 'react';
import trips from '../assets/images/trips.png'


const Trips = () => {

    const scrollTo = () => {
        window.scroll(0, 700)
    }

    return (
        <section className="trips">
            <div className="container">
                <div className="trips__content">
                   <div className="trips__left">
                       <h2 className="trips__title">Winter Vacation Trips</h2>
                       <p className="trips__info">Enjoy your winter vacations with warmth
                           and amazing sightseeing on the mountains.
                           Enjoy the best experience with us!
                       </p>
                       <div onClick={scrollTo} className="trips__left-bottom">
                           <p className="trips__text">Let’s Go!</p>
                           <div className="trips__arrow"></div>
                       </div>
                   </div>
                    <div className="trips__right">
                        <img className="trips__img" src={trips} alt="Winter trips"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trips;