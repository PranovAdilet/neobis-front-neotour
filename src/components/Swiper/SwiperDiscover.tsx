import React from 'react';
import {Pagination} from "swiper/modules";
import DiscoverCard from "../DiscoverCard/DiscoverCard";
import {Swiper as SwiperType} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {IData} from "../../interface/app.interface";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation"

type IProps = {
    swiperRef: SwiperType
    data: IData | undefined
    setIsEnd: (state : boolean) => void
    setIsBeginning: (state : boolean) => void
}

const SwiperDiscover = ({swiperRef, data, setIsBeginning, setIsEnd} : IProps) => {

    const handleSwiper = (swiper: SwiperType) => {

        setIsBeginning(swiper.isBeginning)
        setIsEnd(swiper.isEnd)

        swiper.on('slideChange', () => {
            setIsBeginning(swiper.isBeginning)
            setIsEnd(swiper.isEnd)
        });

    }
    const params = {
        pagination: {
            type: 'bullets',
            clickable: true
        },
        spaceBetween: 30,
        speed: 500
    }



    return (
        <Swiper
            {...params}
            onSwiper={handleSwiper}
            ref={swiperRef}
            slidesPerView="3"
            modules={[Pagination]}
            className="sliderSwiper"
            breakpoints={{
                0: {
                    spaceBetween: 12,
                    slidesPerView: 1.2
                },
                570: {
                    spaceBetween: 12,
                    slidesPerView: 1.5
                },

                680: {
                    spaceBetween: 17,
                    slidesPerView: 1.9
                },
                850: {
                    spaceBetween: 24,
                    slidesPerView: 2.4
                },
                1100: {
                    spaceBetween: 30,
                    slidesPerView: 3
                },
            }}
        >
            {
                data && data.content.map((item) => (
                    <SwiperSlide key={item.id}>
                        <DiscoverCard item={item}/>
                    </SwiperSlide>
                ))
            }

        </Swiper>
    );
};

export default SwiperDiscover;