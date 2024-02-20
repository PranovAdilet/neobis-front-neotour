import React, {useEffect, useState} from 'react';
import { CiLocationOn } from "react-icons/ci";
import Popup from "../../components/Popup/Popup";
import {Link, useParams} from "react-router-dom";
import {useGetTourQuery} from "../../store/api/api";
import SwiperImages from "../../components/SwiperImages/SwiperImages";


const Description = () => {

    useEffect(() => {
        window.scroll(0, 0)
    },[])

    const params = useParams()


    const [popup, setPopup] = useState<boolean>(false)
    const { data, isLoading, error } = useGetTourQuery(params.id ?? '1')

    const handlerPopup = () => {
        setPopup((prev) => !prev)
    }

    if (isLoading) return <div>...Loading</div>

    if (error) {
        return <div>{`Error: ${error}`}</div>;
    }

    return (
        <>
            <section className="description">
                <div className="description__top">
                        <SwiperImages images={data?.images}/>
                        <Link to="/" className="description__top-content">
                            <button className="description__top-content-btn"></button>
                            <h3 className="description__top-content-text">Go back</h3>
                        </Link>
                </div>
                <div className="description__bottom">
                    <div className="container">
                        {
                            data && <div className="description__content">
                                <div className="description__content-block-top">
                                    <h2 className="description__title">{data.name}</h2>
                                    <div className="description__content-location">
                                        <span className="description__icon"><CiLocationOn/></span>
                                        <p className="description__country">{data.locality}, {data.country}</p>
                                    </div>
                                </div>
                                <div className="description__content-block">
                                    <h4 className="description__subtitle">Description</h4>
                                    <p className="description__text">{data.description}</p>
                                </div>
                                <div className="description__reviews-content">
                                    <h4 className="description__reviews-subtitle">Reviews</h4>
                                    {
                                        data.reviewDtoList.map((item, idx) => (
                                            <div key={idx} className="description__reviews-block">
                                                <div className="description__reviews">
                                                    <img className="description__reviews-avatar" src={item.imageUrl} alt=""/>
                                                    <p className="description__reviews-name">{item.author}</p>
                                                </div>
                                                <p className="description__reviews-comment">{item.text}</p>
                                            </div>
                                        ))
                                    }

                                </div>
                                <button onClick={handlerPopup} className="description__btn">Book now</button>
                            </div>
                        }
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