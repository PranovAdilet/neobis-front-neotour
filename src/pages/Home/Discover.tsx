import React, { useState} from 'react';
import {useGetDiscoverToursQuery} from '../../store/api/api';
import {IDiscoverTour} from "../../interface/app.interface";
import {categories} from "../../utils/categories";
import DiscoverCard from "../../components/DiscoverCard/DiscoverCard";
import DiscoverBtns from "../../components/DiscoverBtns/DiscoverBtns";
import SkeletonCards from "../../components/Skeleton/SkeletonCards/SkeletonCards";


const Discover = () => {

    const [category, setCategory] = useState<string>('popular')
    const [page, setPage] = useState<number>(0)


    const { data, isLoading, error } = useGetDiscoverToursQuery({category, page})


    const handlerCategory = (item: string) => {
        setPage(0)
        setCategory(item)
    }


    return (
        <section className="discover">
            <div className="container">
                <div className="discover__top">
                    <h2 className="discover__title">Discover</h2>
                    <DiscoverBtns data={data} page={page} setPage={setPage}/>
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
                            <DiscoverCard key={item.id} item={item}/>
                        )
                    }

                    {
                        isLoading && <SkeletonCards classname={'discover'} count={3}/>
                    }

                    {
                        error && <div>{`Error: ${error}`}</div>
                    }

                </div>
            </div>
        </section>
    );
};

export default Discover;