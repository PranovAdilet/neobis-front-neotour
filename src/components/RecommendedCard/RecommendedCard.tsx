import React from 'react';
import {Link} from "react-router-dom";
import {IDiscoverTour} from "../../interface/app.interface";
import {transformImg} from "../../utils/transformImg";

const RecommendedCard = ({item} : {item : IDiscoverTour}) => {

    const nameLength = (name : string) => {

        if (name.length > 23){
            return name.slice(0, 20) + '..'
        }
        if (window.innerWidth < 1100 && name.length > 20){
            return name.slice(0, 18) + '..'
        }
        return name
    }

    const URL_IMG = transformImg(item.imageUrl, '300', '200')

    return (
        <Link to={`/descr/${item.id}`} key={item.id} className="recommended__item">
            <img className="recommended__item-img" src={URL_IMG} alt=""/>
            <h4 className="recommended__item-title">{nameLength(item.name)}</h4>
            <div className="recommended__item-bottom"></div>
        </Link>
    );
};

export default RecommendedCard;