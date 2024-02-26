import React from 'react';
import {Link} from "react-router-dom";
import {IDiscoverTour} from "../../../interface/app.interface";
import {transformImg} from "../../../utils/transformImg";
import {nameLength} from "../../../utils/nameLength";

const RecommendedCard = ({item} : {item : IDiscoverTour}) => {



    const URL_IMG = transformImg(item.imageUrl, '300', '200')

    return (
        <Link to={`/descr/${item.id}`} key={item.id} className="recommended__item">
            <img className="recommended__item-img" src={URL_IMG} alt=""/>
            <h4 className="recommended__item-title">{nameLength(item.name, window.innerWidth)}</h4>
            <div className="recommended__item-bottom"></div>
        </Link>
    );
};

export default RecommendedCard;