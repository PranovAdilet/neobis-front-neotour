import React, {ChangeEvent, FormEvent, useState} from 'react';
import { FaRegUser } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Input from "../PhoneInput/Input";
import {isValidPhoneNumber} from "react-phone-number-input";

type IPopup = {
    setPopup: React.Dispatch<React.SetStateAction<boolean>>
}

const Popup = ({setPopup}: IPopup) => {

    const [tel, setTel] = useState<string>('');
    const [error, setError] = useState<string>('')

    const [count, setCount] = useState<number>(1)
    const [inputText, setInputText] = useState<string>('')

    const handlerCountPlus = () => {
        if (count < 5){
            setCount((prev) => prev + 1)
        }
    }
    const handlerCountMinus = () => {
        if (count > 1){
            setCount((prev) => prev - 1)
        }
    }

    const handlerPopup = ()  => {
        setPopup(prev => !prev)
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setCount(1)
        setTel('')
        setInputText('')
    }

    const handleChangeInputText = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value)
    }

    return (
       <div className="overlay">
           <form onSubmit={onSubmit} className="popup">
               <div className="popup__top">
                   <h2 className="popup__title">Info</h2>
                   <span onClick={handlerPopup} className="popup__icon-close"><IoClose/></span>
               </div>
               <p className="popup__info">
                   To submit an application for a tour reservation, you need to fill in your information and select the number of people for the reservation
               </p>
               <label className="popup__label">
                   <p className="popup__text">Phone number</p>
                   <Input tel={tel} setTel={setTel} error={error} setError={setError}/>
               </label>
               <label className="popup__label">
                   <p className="popup__text">Commentaries to trip</p>
                   <input
                       minLength={3}
                       required={true}
                       placeholder="Write your wishes to trip..."
                       className="popup__input"
                       type="text"
                       value={inputText}
                       onChange={handleChangeInputText}
                   />
               </label>
               <div className="popup__bottom">
                   <p className="popup__text">Commentaries to trip</p>
                   <div className="popup__bottom-block">
                       <div className="popup__bottom-block-count">
                           <span onClick={() => handlerCountMinus()} className="popup__icon-minus">-</span>
                           <p className="popup__bottom-count">{count}</p>
                           <span onClick={() => handlerCountPlus()} className="popup__icon-plus">+</span>
                       </div>
                       <div className="popup__bottom-block-people">
                           <span className="popup__icon-user"><FaRegUser/></span>
                           <p className="popup__bottom-text">{count} People</p>
                       </div>
                   </div>
               </div>
               <button disabled={!tel || !isValidPhoneNumber(tel) || inputText.length < 3} type="submit" className="popup__btn">Submit</button>
           </form>
       </div>
    );
};

export default Popup;