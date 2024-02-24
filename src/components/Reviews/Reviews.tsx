import React, {useState} from 'react';
import {IDescriptionTour} from "../../interface/app.interface";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Reviews = ({data} : {data: IDescriptionTour}) => {

    const [hidden, setHidden] = useState<boolean>(false)

    const handlerBtnHide = () => {
        setHidden(prev => !prev)
    }

    const visibleReviews = !hidden ? data.reviewDtoList.slice(0, 2) : data.reviewDtoList;

    return (
        <div className="description__reviews-content">
            <h4 className="description__reviews-subtitle">Reviews</h4>
            {
                visibleReviews.length > 0 ? visibleReviews.map((item, idx) => (
                    <div key={idx} className="description__reviews-block">
                        <div className="description__reviews">
                            <img className="description__reviews-avatar" src={item.imageUrl} alt=""/>
                            <p className="description__reviews-name">{item.author}</p>
                        </div>
                        <p className="description__reviews-comment">{item.body}</p>
                    </div>
                )) : <p>No reviews available</p>
            }
            {
                data.reviewDtoList.length > 2 && <button
                    onClick={handlerBtnHide}
                    className="description__reviews-btn">
                    {
                        hidden ? <IoIosArrowUp className="description__reviews-icon"/> : <IoIosArrowDown className="description__reviews-icon"/>
                    }
                    <p>{data.reviewDtoList.length - 2} reviews</p>
                </button>
            }

        </div>
    );
};

export default Reviews;