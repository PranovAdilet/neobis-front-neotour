import React from 'react';
import {IDiscoverTour} from "../../../interface/app.interface";
import {Link} from "react-router-dom";
import {transformImg} from "../../../utils/transformImg";
import {nameLength} from "../../../utils/nameLength";


const DiscoverCard = ({item}: {item: IDiscoverTour}) => {

    const URL_IMG = transformImg(item.imageUrl, '384', '250')

    return (
        <Link key={item.id} to={`/descr/${item.id}`} className="discover__item">
            <img className="discover__item-img" src={URL_IMG} alt=""/>
            <div className="discover__item-bottom"></div>
            <h4 className="discover__item-title">{nameLength(item.name, window.innerWidth)}</h4>
        </Link>
    );
};

export default DiscoverCard;