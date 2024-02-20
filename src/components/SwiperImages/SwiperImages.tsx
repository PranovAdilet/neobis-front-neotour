import React from 'react';
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/bundle";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules"

interface IImages{
    images: string[] | undefined
}

const SwiperImages = ({images} : IImages) => {
    return (
        <>
            <Swiper
                loop={true}
                slidesPerView={1}
                spaceBetween={30}
                navigation={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                    stopOnLastSlide: false,
                    pauseOnMouseEnter: true
                }}
                modules={[Autoplay, Navigation]}
                speed={500}
                className="sliderSwiper"
            >
                {
                    images?.map((img, idx) => <SwiperSlide key={idx}>
                        <img className="description__img" src={img} alt=""/>
                    </SwiperSlide>)
                }
            </Swiper>

        </>

    );
};

export default SwiperImages;