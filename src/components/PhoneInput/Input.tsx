import React from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';


type IProps = {
    error: string
    setError: (e: string) => void
    tel: string
    setTel: (e: string) => void
}
const Input = ({...props} : IProps) => {

    const handleInputChange = (newValue: string | undefined) => {
        props.setTel(newValue ?? '');
    }

    const handleBlur = () => {
        if (props.tel && !isValidPhoneNumber(props.tel)){
            props.setError('Invalid phone number format');
        }
    }

    return (
        <div>
            <PhoneInput
                international
                className="popup__input"
                placeholder="Enter phone number"
                value={props.tel}
                onChange={handleInputChange}
                defaultCountry="KG"
                onBlur={handleBlur}
                limitMaxLength={true}
                countries={['KG', 'KZ', "RU", "UZ"]}
            />
            {props.error && <p className="popup__error">{props.error}</p>}
        </div>
    );
};

export default Input;
