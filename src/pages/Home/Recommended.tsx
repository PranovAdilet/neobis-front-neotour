import React, {useState} from 'react';
import {useGetRecommendedToursQuery} from "../../store/api/api";
import RecommendedCard from "../../components/RecommendedCard/RecommendedCard";
import {getCurrentMonth} from "../../utils/currentMonth";

const Recommended = () => {
    const currentMonth = getCurrentMonth()
    const [month] = useState<string>(currentMonth)


    const {data, error, isLoading} = useGetRecommendedToursQuery(month)

    console.log(data)


    return (
        <section className="recommended">
            <div className="container">
                <h2 className="recommended__title">Recommended</h2>

                <div className="recommended__row">
                    {
                        data && data.content.map(item => (
                            <RecommendedCard key={item.id} item={item}/>
                        ))
                    }

                    {
                        isLoading && <div>...Loading</div>
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