import React from 'react';
import { FaRegUser } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

type IPopup = {
    setPopup: React.Dispatch<React.SetStateAction<boolean>>
}

const Popup = ({setPopup}: IPopup) => {
    const handlerPopup = ()  => {
        setPopup(prev => !prev)
    }

    return (
       <div className="overlay">
           <div className="popup">
               <div className="popup__top">
                   <h2 className="popup__title">Info</h2>
                   <span onClick={handlerPopup} className="popup__icon-close"><IoClose/></span>
               </div>
               <p className="popup__info">
                   To submit an application for a tour reservation, you need to fill in your information and select the number of people for the reservation
               </p>
               <label className="popup__label">
                   <p className="popup__text">Phone number</p>
                   <input className="popup__input" type="number"/>
               </label>
               <label className="popup__label">
                   <p className="popup__text">Commentaries to trip</p>
                   <input placeholder="Write your wishes to trip..." className="popup__input" type="text"/>
               </label>
               <div className="popup__bottom">
                   <p className="popup__text">Commentaries to trip</p>
                   <div className="popup__bottom-block">
                       <div className="popup__bottom-block-count">
                           <span className="popup__icon-minus">-</span>
                           <p className="popup__bottom-count">5</p>
                           <span className="popup__icon-plus">+</span>
                       </div>
                       <div className="popup__bottom-block-people">
                           <span className="popup__icon-user"><FaRegUser/></span>
                           <p className="popup__bottom-text">5 People</p>
                       </div>
                   </div>
               </div>
               <button className="popup__btn">Submit</button>
           </div>
       </div>
    );
};

export default Popup;