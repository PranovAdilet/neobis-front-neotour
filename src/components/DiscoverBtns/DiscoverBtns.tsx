import React, {Dispatch, SetStateAction} from 'react';
import {IData} from "../../interface/app.interface";


interface IProps{
    data: IData | undefined
    page: number
    setPage: Dispatch<SetStateAction<number>>
}

const DiscoverBtns = ({data, page, setPage}: IProps) => {

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

    return (
        <div className="discover__btns">
            <button style={{border: btnsColorLeft()}} onClick={handlerPageMinus} className="discover__btns-left"><div className="discover__arrow-left"></div></button>
            <button style={{border: btnsColorRight()}} onClick={handlerPagePlus} className="discover__btns-right"><div className="discover__arrow-right"></div></button>
        </div>
    );
};

export default DiscoverBtns;