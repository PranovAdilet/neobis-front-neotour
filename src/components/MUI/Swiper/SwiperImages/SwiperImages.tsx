import React from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";



interface IImages{
    images: string[] | undefined
}

const SwiperImages = ({images} : IImages) => {

    const params = {
        pagination: {
            el: '.swiper-pagination-images',
            type: 'bullets',
            clickable: true
        },
        speed: 500,
        slidesPerView: "1",
        loop: true
    }

    return  (
        <>
            <Swiper
                {...params}
                modules={[Pagination]}
            >
                {
                    images && images.map((item, idx) => (
                        <SwiperSlide key={idx}>
                            <img className="swiper__img" src={item} alt=""/>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
            <div className="swiper-pagination-images"></div>
        </>
    )
};

export default SwiperImages