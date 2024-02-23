import React, { Dispatch, SetStateAction, useEffect} from 'react';
import {IData} from "../../interface/app.interface";
import { Swiper as SwiperType} from "swiper";



interface IProps{
    data: IData | undefined
    page: number
    setPage: Dispatch<SetStateAction<number>>
    swiper:   SwiperType | null
    isBeginning: boolean
    isEnd: boolean
    category: string
    setIsBeginning: (state: boolean) => void
    setIsEnd: (state: boolean) => void
}



const DiscoverBtns  = ({ swiper, isEnd, isBeginning, category, setIsEnd}: IProps) => {


    const handleSlideNext = () => {
        if (!isEnd){
            swiper.current.swiper.slideNext()
        }
    }

    useEffect(() => {
        swiper.current.swiper.slideTo(0)
        if (swiper.current.swiper.slides.length > 3){
            console.log(2)
            setIsEnd(false)
        }

    },[category, setIsEnd, swiper])

    const handleSlidePrev = () => {
        if (!isBeginning){
            swiper.current.swiper.slidePrev()
        }
    };



    return (
        <div className="discover__btns">
            <button disabled={isBeginning} onClick={handleSlidePrev} className="discover__btns-left"><div className="discover__arrow-left"></div></button>
            <button disabled={isEnd} onClick={handleSlideNext} className="discover__btns-right"><div className="discover__arrow-right"></div></button>
        </div>
    );
};

export default DiscoverBtns;