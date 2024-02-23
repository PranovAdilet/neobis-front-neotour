import React, {Dispatch, SetStateAction} from 'react';
import {Swiper} from "swiper/react";
import {Navigation} from "swiper/modules";
import {categories} from "../../utils/categories";
import {SwiperSlide} from "swiper/react";

type IProps = {
    setCategory: Dispatch<SetStateAction<string>>
    setPage: Dispatch<SetStateAction<number>>
    category: string
}

const SwiperNav = ({setCategory, setPage, category} : IProps) => {

    const handlerCategory = (item: string) => {
        setPage(0)
        setCategory(item)
    }
    const pagination = {
        clickable: true
    };



    return (
        <nav className="">
            {
                <Swiper
                    slidesPerView="auto"
                    pagination={pagination}
                    speed={500}
                    modules={[Navigation]}
                    className="sliderSwiperNav"
                    breakpoints={{
                        0: {
                            slidesPerView: 1.3
                        },

                        850: {
                            slidesPerView: 4.7
                        },
                        1100: {
                            slidesPerView: 5
                        },
                    }}
                >
                    {
                        categories.map((item, idx) =>
                            <SwiperSlide className="swiper-slide-nav" key={idx}>
                                <h4
                                    key={idx}
                                    onClick={() => handlerCategory(item.postCategory)}
                                    className={`discover__nav-item ${category === item.postCategory && 'discover__nav-item_active'}`}>{item.viewCategory}
                                </h4>
                            </SwiperSlide>
                        )
                    }

                </Swiper>

            }
        </nav>
    );
};

export default SwiperNav;