import React from 'react';
import {useGetRecommendedToursQuery} from "../../store/api/api";
import {Link} from "react-router-dom";

const Recommended = () => {

    const {data, error, isLoading} = useGetRecommendedToursQuery('2')

    if (isLoading) return <div>Loading...</div>

    if (error) {
        return <div>{`Error: ${error}`}</div>;
    }

    return (
        <section className="recommended">
            <div className="container">
                <h2 className="recommended__title">Recommended</h2>

                <div className="recommended__row">
                    {
                        data && data.content.map(item => (
                            <Link to={`/descr/${item.id}`} key={item.id} className="recommended__item">
                                <img className="recommended__item-img" src={item.imageUrl} alt=""/>
                                <h4 className="recommended__item-title">{item.name}</h4>
                                <div className="recommended__item-bottom"></div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Recommended;