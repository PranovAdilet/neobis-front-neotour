import React, {useEffect, useState} from 'react';
import avatar from '../assets/images/avatar.png'
import descr from '../assets/images/descr.png'
import { CiLocationOn } from "react-icons/ci";
import Popup from "../../components/Popup/Popup";
import {Link} from "react-router-dom";

const Description = () => {

    useEffect(() => {
        window.scroll(0, 0)
    },[])

    const [popup, setPopup] = useState<boolean>(false)

    const handlerPopup = () => {
        setPopup((prev) => !prev)
    }

    return (
        <>
            <section className="description">
                <div className="description__top">
                    <img className="description__img" src={descr} alt=""/>
                        <div className="description__top-content">
                            <button className="description__top-content-btn"></button>
                            <Link to="/" className="description__top-content-text">Go back</Link>
                        </div>
                </div>
                <div className="description__bottom">
                    <div className="container">
                        <div className="description__content">
                            <div className="description__content-block-top">
                                <h2 className="description__title">Mount Fuji</h2>
                                <div className="description__content-location">
                                    <span className="description__icon"><CiLocationOn/></span>
                                    <p className="description__country">Honshu, Japan</p>
                                </div>
                            </div>
                            <div className="description__content-block">
                                <h4 className="description__subtitle">Description</h4>
                                <p className="description__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cumque
                                    cupiditate impedit rem temporibus! Beatae facilis harum itaque iusto mollitia natus non numquam rem repellendus sint! Adipisci, atque, officia. Quibusdam?</p>
                            </div>
                            <div className="description__reviews-content">
                                <h4 className="description__reviews-subtitle">Reviews</h4>
                                <div className="description__reviews-block">
                                    <div className="description__reviews">
                                        <img className="description__reviews-avatar" src={avatar} alt=""/>
                                        <p className="description__reviews-name">Anonymous</p>
                                    </div>
                                    <p className="description__reviews-comment">That was such a nice place. The most beautiful place I’ve ever seen. My advice to everyone not to forget to take warm coat</p>
                                </div>
                                <div className="description__reviews-block">
                                    <div className="description__reviews">
                                        <img className="description__reviews-avatar" src={avatar} alt=""/>
                                        <p className="description__reviews-name">Anonymous</p>
                                    </div>
                                    <p className="description__reviews-comment">That was such a nice place. The most beautiful place I’ve ever seen. My advice to everyone not to forget to take warm coat</p>
                                </div>
                                <div className="description__reviews-block">
                                    <div className="description__reviews">
                                        <img className="description__reviews-avatar" src={avatar} alt=""/>
                                        <p className="description__reviews-name">Anonymous</p>
                                    </div>
                                    <p className="description__reviews-comment">That was such a nice place. The most beautiful place I’ve ever seen. My advice to everyone not to forget to take warm coat</p>
                                </div>
                                <div className="description__reviews-block">
                                    <div className="description__reviews">
                                        <img className="description__reviews-avatar" src={avatar} alt=""/>
                                        <p className="description__reviews-name">Anonymous</p>
                                    </div>
                                    <p className="description__reviews-comment">That was such a nice place. The most beautiful place I’ve ever seen. My advice to everyone not to forget to take warm coat</p>
                                </div>

                            </div>
                            <button onClick={handlerPopup} className="description__btn">Book now</button>
                        </div>
                    </div>
                </div>
            </section>
            {
                popup && <Popup setPopup={setPopup}/>
            }
        </>
    );
};

export default Description;