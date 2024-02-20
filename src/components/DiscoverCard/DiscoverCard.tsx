import React from 'react';
import {IDiscoverTour} from "../../interface/app.interface";
import {Link} from "react-router-dom";
import {transformImg} from "../../utils/transformImg";

const DiscoverCard = ({item}: {item: IDiscoverTour}) => {

    const nameLength = (name : string) => {
        if (name.length > 24){
            return name.slice(0, 22) + '...'
        }
        return name
    }
    const URL_IMG = transformImg(item.imageUrl, '384', '250')

    return (
        <Link key={item.id} to={`/descr/${item.id}`} className="discover__item">
            <img className="discover__item-img" src={URL_IMG} alt=""/>
            <div className="discover__item-bottom"></div>
            <h4 className="discover__item-title">{nameLength(item.name)}</h4>
        </Link>
    );
};

export default DiscoverCard;