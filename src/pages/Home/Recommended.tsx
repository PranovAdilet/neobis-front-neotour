import React, {useState} from 'react';
import {useGetRecommendedToursQuery} from "../../store/api/api";
import RecommendedCard from "../../components/RecommendedCard/RecommendedCard";
import {getCurrentMonth} from "../../utils/currentMonth";
import SkeletonCards from "../../components/SkeletonCards/SkeletonCards";
import SelectMonth from "../../components/SelectMonth/SelectMonth";

const Recommended = () => {
    const currentMonth = getCurrentMonth()
    const [month] = useState<string>(currentMonth)


    const {data, error, isLoading} = useGetRecommendedToursQuery(month)


    return (
        <section className="recommended">
            <div className="container">
                <div className="recommended__top">
                    <h2 className="recommended__title">Recommended</h2>
                    <div className="recommended__select"><SelectMonth/></div>
                </div>
                <div className="recommended__row">
                    {
                        data && data.content.map(item => (
                            <RecommendedCard key={item.id} item={item}/>
                        ))
                    }

                    {
                        isLoading && <SkeletonCards classname={'recommended'} count={3}/>
                    }

                    {
                        error && <div>{`Error: ${error}`}</div>
                    }
                </div>
            </div>
        </section>
    );
};

export default Recommended;