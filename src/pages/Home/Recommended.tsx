import React, {useEffect} from 'react';
import {useGetRecommendedToursQuery} from "../../store/api/api";
import RecommendedCard from "../../components/RecommendedCard/RecommendedCard";
import {getCurrentMonth} from "../../utils/currentMonth";
import SkeletonCards from "../../components/Skeleton/SkeletonCards/SkeletonCards";
import SelectMonth from "../../components/SelectMonth/SelectMonth";

const Recommended = () => {
    const currentMonth = getCurrentMonth()
    const [month, setMonth] = React.useState(currentMonth);


    const {data, error, isLoading, refetch} = useGetRecommendedToursQuery(month)

    useEffect(() => {
        refetch()
    }, [month, refetch])

    return (
        <section className="recommended">
            <div className="container">
                <div className="recommended__top">
                    <h2 className="recommended__title">Recommended</h2>
                    <div className="recommended__select"><SelectMonth month={month} setMonth={setMonth}/></div>
                </div>
                <div className="recommended__row">
                    {
                        data && data.content.map(item => (
                            <RecommendedCard key={item.id} item={item}/>
                        ))
                    }
                    {
                        isLoading && <SkeletonCards classname={'recommended'} count={12}/>
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