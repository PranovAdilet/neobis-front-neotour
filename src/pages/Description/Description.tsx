import React, {useEffect, useState} from 'react';
import { CiLocationOn } from "react-icons/ci";
import Popup from "../../components/MUI/Popup/Popup";
import {Link, useParams} from "react-router-dom";
import {useGetTourQuery} from "../../store/api/api";
import SwiperImages from "../../components/MUI/Swiper/SwiperImages/SwiperImages";
import Reviews from "../../components/MUI/Reviews/Reviews";
import SkeletonDescriptionCard from "../../components/MUI/Skeleton/SkeletonDescriptionCard/SkeletonDescriptionCard";


const Details = () => {

    useEffect(() => {
        window.scroll(0, 0)
    },[])

    const {id} = useParams()


    const [popup, setPopup] = useState<boolean>(false)
    const { data, isLoading, error } = useGetTourQuery(id ?? '1')

    const handlerPopup = () => {
        setPopup((prev) => !prev)
    }

    return (
        <>
            <section className="description">
                <div className="description__top">
                    {
                        isLoading && <SkeletonDescriptionCard count={1} classname={'Description'}/>
                    }
                        <SwiperImages images={data?.images}/>
                        <Link to="/main" className="description__top-content">
                            <button className="description__top-content-btn"></button>
                            <h3 className="description__top-content-text">Go back</h3>
                            <h3 className="description__top-content-text-mobile">Back</h3>
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
                                <Reviews data={data}/>
                                <button onClick={handlerPopup} className="description__btn">Book now</button>
                            </div>
                        }

                        {
                            error && <div>{`Error: ${error}`}</div>
                        }
                    </div>
                </div>
            </section>
            {
                popup && <Popup id={id} setPopup={setPopup}/>
            }
        </>
    );
};

export default Details;