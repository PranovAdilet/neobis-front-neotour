import React, {Dispatch, SetStateAction} from 'react';


type IProps = {
    peopleCount: number
    setPeopleCount: Dispatch<SetStateAction<number>>
}

const PopupBtns = ({peopleCount, setPeopleCount} : IProps) => {

    const handlerCountPlus = () => {
        if (peopleCount < 6) {
            setPeopleCount((prev) => prev + 1)
        }
    }

    const handlerCountMinus = () => {
        if (peopleCount > 1) {
            setPeopleCount((prev) => prev - 1)
        }
    }

    return (
        <div className="popup__bottom-block-count">
            <span onClick={handlerCountMinus} className="popup__icon-minus">-</span>
            <p className="popup__bottom-count">{peopleCount}</p>
            <span onClick={handlerCountPlus} className="popup__icon-plus">+</span>
        </div>
    );
};

export default PopupBtns;