import React, { Dispatch, SetStateAction, useEffect} from 'react';
import {IData} from "../../../interface/app.interface";
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



const DiscoverBtns  = ({ ...props}: IProps) => {

    useEffect(() => {
        props.swiper.current.slideTo(0)
        if (props.swiper.current.slides.length > 3){
            props.setIsEnd(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.category, props.setIsEnd, props.swiper])

    const handleSlideNext = () => {
        if (!props.isEnd){
            props.swiper.current.slideNext()
        }
    }

    const handleSlidePrev = () => {
        if (!props.isBeginning){
            props.swiper.current.slidePrev()
        }
    };



    return (
        <div className="discover__btns">
            <button disabled={props.isBeginning} onClick={handleSlidePrev} className="discover__btns-left"><div className="discover__arrow-left"></div></button>
            <button disabled={props.isEnd} onClick={handleSlideNext} className="discover__btns-right"><div className="discover__arrow-right"></div></button>
        </div>
    );
};

export default DiscoverBtns;