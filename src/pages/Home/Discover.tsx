import React, { useState} from 'react';
import {Link} from "react-router-dom";
import {useGetDiscoverToursQuery} from '../../store/api/api';
import {IDiscoverTour} from "../../interface/app.interface";
import {categories} from "../../utils/categories";




const Discover = () => {
    const [category, setCategory] = useState<string>('popular')
    const [page, setPage] = useState(0)


    const { data, isLoading, error } = useGetDiscoverToursQuery({category, page})



    const handlerPagePlus = () => {
        if (data && page < data.totalPages - 1) {
            setPage(prevPage => prevPage + 1)
        }
    }
    const handlerPageMinus = () => {
        if (page > 0) {
            setPage(prevPage => prevPage - 1);
        }
    }

    const btnsColorRight = () => {
        if (data && page === data.totalPages - 1){
            return "1px solid red"
        }else {
            return "1px solid #888"
        }

    }
    const btnsColorLeft = () => {
        if (page === 0){
            return "1px solid red"
        }else {
            return "1px solid #888"
        }

    }

    const handlerCategory = (item: string) => {
        setPage(0)
        setCategory(item)
    }

    const nameLength = (name : string) => {
        if (name.length > 24){
            return name.slice(0, 22) + '...'
        }
        return name
    }


    console.log(data)

    return (
        <section className="discover">
            <div className="container">
                <div className="discover__top">
                    <h2 className="discover__title">Discover</h2>
                    <div className="discover__btns">
                        <button style={{border: btnsColorLeft()}} onClick={handlerPageMinus} className="discover__btns-left"><div className="discover__arrow-left"></div></button>
                        <button style={{border: btnsColorRight()}} onClick={handlerPagePlus} className="discover__btns-right"><div className="discover__arrow-right"></div></button>
                    </div>
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
                            <Link key={item.id} to={`/descr/${item.id}`} className="discover__item">
                                <img className="discover__item-img" src={`${item.imageUrl}`} alt=""/>
                                <div className="discover__item-bottom"></div>
                                <h4 className="discover__item-title">{nameLength(item.name)}</h4>
                            </Link>
                        )
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

export default Discover;