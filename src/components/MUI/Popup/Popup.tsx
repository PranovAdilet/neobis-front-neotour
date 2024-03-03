import React, { ChangeEvent, FormEvent, useState } from 'react';
import { FaRegUser } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Input from "../PhoneInput/Input";
import { isValidPhoneNumber } from "react-phone-number-input";
import { usePostBookingMutation } from "../../../store/api/api";
import { QueryStatus } from "@reduxjs/toolkit/query";
import StatusForm from "../StatusForm/StatusForm";
import PopupBtns from "./PopupBtns/PopupBtns";

type IPopup = {
    setPopup: React.Dispatch<React.SetStateAction<boolean>>
    id: string | undefined
}

const Popup = ({ setPopup, id }: IPopup) => {
    const [tel, setTel] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [peopleCount, setPeopleCount] = useState<number>(1);
    const [comment, setComment] = useState<string>('');

    const [createPost, { status }] = usePostBookingMutation();

    const handleChangeInputText = (e: ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value)
    }

    const handlerPopup = () => {
        setPopup(prev => !prev)
    }

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const postData = {
            "tourId": id ?? '1',
            "phoneNumber": tel,
            "peopleCount": peopleCount,
            "comment": comment,
            "savePhone": true
        }
        await createPost(postData)

        setPeopleCount(1)
        setTel('')
        setComment('')
    }

    const isValidForm = tel && isValidPhoneNumber(tel)

    const statusForm = ( status === QueryStatus.rejected || status === QueryStatus.fulfilled)
        &&
        <StatusForm
            statusText={
                status === QueryStatus.rejected ? "The tour can’t be booked" :
                    status === QueryStatus.fulfilled ? "Your trip has been booked!" : ""
            }
            onClose={handlerPopup}
         />



    return (
        <div className="overlay">
            <form onSubmit={onSubmit} className="popup">
                {
                    ( status === QueryStatus.uninitialized || status === QueryStatus.pending)  && <>
                        <div className="popup__top">
                            <h2 className="popup__title">Info</h2>
                            <span onClick={handlerPopup} className="popup__icon-close"><IoClose /></span>
                        </div>
                        <p className="popup__info">
                            To submit an application for a tour reservation, you need to fill in your information and select the number of people for the reservation
                        </p>
                        <label className="popup__label">
                            <p className="popup__text">Phone number</p>
                            <Input tel={tel} setTel={setTel} error={error} setError={setError} />
                        </label>
                        <label className="popup__label">
                            <p className="popup__text">Commentaries to trip</p>
                            <input
                                maxLength={300}
                                placeholder="Write your wishes to trip..."
                                className="popup__input"
                                type="text"
                                value={comment}
                                onChange={handleChangeInputText}
                            />
                        </label>
                        <div className="popup__bottom">
                            <p className="popup__text">Commentaries to trip</p>
                            <div className="popup__bottom-block">
                                <PopupBtns peopleCount={peopleCount} setPeopleCount={setPeopleCount}/>
                                <div className="popup__bottom-block-people">
                                    <span className="popup__icon-user"><FaRegUser /></span>
                                    <p className="popup__bottom-text">{peopleCount} People</p>
                                </div>
                            </div>
                        </div>
                        <button disabled={!isValidForm} type="submit" className="popup__btn">Submit</button>
                    </>
                }
                {
                    statusForm
                }
            </form>
        </div>
    )
}

export default Popup;
