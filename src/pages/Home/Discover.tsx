import React, {useRef, useState} from 'react';
import {Link} from "react-router-dom";
import {useGetDiscoverToursQuery} from '../../store/api/api';
import {IDiscoverTour} from "../../interface/app.interface";
import {categories} from "../../utils/categories";

import {Pagination, Navigation} from "swiper/modules"
import SwiperCore, { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation"



const Discover = () => {
    const [category, setCategory] = useState<string>('popular')
    const [page, setPage] = useState(3)


    const { data, isLoading, error } = useGetDiscoverToursQuery({category, page})

    if (isLoading) return <div>...Loading</div>

    const handlerPagePlus = () => {
        if (data && page < data.totalPages - 1){
            setPage(prevState => prevState + 1)
        }else {
            setPage(0)
        }
    }
    const handlerPageMinus = () => {
        if (page > 0){
            setPage(prevState => prevState - 1)
        }else {
            if (data){
                setPage(data.totalPages - 1)
            }
        }
    }


    const handlerCategory = (item: string) => {
        setPage(0)
        setCategory(item)
    }

    return (
        <section className="discover">
            <div className="container">
                <div className="discover__top">
                    <h2 className="discover__title">Discover</h2>
                    <div className="discover__btns">
                        <button onClick={() => handlerPageMinus()} className="discover__btns-left"><div className="discover__arrow-left"></div></button>
                        <button onClick={() => handlerPagePlus()} className="discover__btns-right"><div className="discover__arrow-right"></div></button>
                    </div>
                </div>
                <nav className="discover__nav">
                    {
                        categories.map((item, idx) =>
                            <h4
                                key={idx}
                                onClick={() => handlerCategory(item.postCategory)}
                                className={`discover__nav-item ${category === item.postCategory && 'discover__nav-item_active'}`}>{item.viewCategory}
                            </h4>)
                    }

                </nav>
                <div className="discover__row">
                    {
                        data && data.content.map((item : IDiscoverTour) =>
                            <Link key={item.id} to={`/descr/${item.id}`} className="discover__item">
                                <img className="discover__item-img" src={`${item.imageUrl}`} alt=""/>
                                <div className="discover__item-bottom"></div>
                                <h4 className="discover__item-title">{item.name}</h4>
                            </Link>
                        )
                    }


                </div>
            </div>
        </section>
    );
};

export default Discover;