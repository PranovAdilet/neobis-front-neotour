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

    const isDisabledIncrement = peopleCount === 6
    const isDisabledDecrement = peopleCount === 1

    return (
        <div className="popup__bottom-block-count">
            <button type="button" disabled={isDisabledDecrement} onClick={handlerCountMinus} className="popup__icon-minus">-</button>
            <p className="popup__bottom-count">{peopleCount}</p>
            <button type="button" disabled={isDisabledIncrement} onClick={handlerCountPlus} className="popup__icon-plus">+</button>
        </div>
    );
};

export default PopupBtns;