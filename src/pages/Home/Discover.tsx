import React, {useRef, useState} from 'react';
import {useGetDiscoverToursQuery} from '../../store/api/api';
import DiscoverBtns from "../../components/MUI/DiscoverBtns/DiscoverBtns";
import SkeletonCards from "../../components/MUI/Skeleton/SkeletonCards/SkeletonCards";
import SwiperNav from "../../components/MUI/Swiper/SwiperNav/SwiperNav";
import {Swiper} from "swiper";
import SwiperDiscover from "../../components/MUI/Swiper/SwiperDiscover";


const Discover = () => {

    const [category, setCategory] = useState<string>('popular')
    const [page, setPage] = useState<number>(0)
    const [isBeginning, setIsBeginning] = useState<boolean>(true)
    const [isEnd, setIsEnd] = useState<boolean>(false)

    const { data, isLoading, error } = useGetDiscoverToursQuery({category, page})
    const swiperRef = useRef<Swiper | null>(null)


    return (
        <section className="discover">
            <div className="container">
                <div className="discover__top">
                    <h2 className="discover__title">Discover</h2>
                    <DiscoverBtns setIsBeginning={setIsBeginning} setIsEnd={setIsEnd} category={category} isBeginning={isBeginning} isEnd={isEnd} swiper={swiperRef} data={data} page={page} setPage={setPage}/>
                </div>
               <SwiperNav category={category} setCategory={setCategory} setPage={setPage}/>
                <div className="discover__row">
                    <div className="swiper-wrapper">
                       <SwiperDiscover setIsBeginning={setIsBeginning} setIsEnd={setIsEnd} data={data} swiperRef={swiperRef}/>
                    </div>

                    {
                        isLoading && <SkeletonCards classname={'discover'} count={3}/>
                    }

                    {
                        error && <div>{`Error: ${error}`}</div>
                    }

                </div>
                <div className="swiper__pagination">
                    <div className="swiper__pagination-bullets"></div>
                </div>
            </div>
        </section>
    );
};

export default Discover;