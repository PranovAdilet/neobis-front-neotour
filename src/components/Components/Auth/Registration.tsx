import React, { useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {BiHomeSmile} from "react-icons/bi";
import {useForm, SubmitHandler} from "react-hook-form";
import InputMask from 'react-input-mask'
import {IShippingFields} from "../../../interface/app.interface";
import {useSignUpMutation} from "../../../store/api/api";
import {useAppDispatch} from "../../../hooks/reduxHooks";
import {login} from "../../../store/reducers/Auth";


const Register = ( ) => {

    const [show, setShow] = useState<boolean>(false);

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }

    } = useForm<IShippingFields>({mode: "onChange"})

    const [mutate] = useSignUpMutation()

    const onSubmit: SubmitHandler<IShippingFields> = async (data) => {

        try {

            const response = await mutate({...data});

            if ("data" in response){

                const newData = {
                    ...response.data,
                    accessToken: ''
                }
                dispatch(login(newData))
                navigate('/signIn')

            }else {
                alert('Ошибка при регистрации, попробуйте еще раз!')
                reset()
            }


        } catch (error) {
            console.error(`Ошибка при регистрации: ${error}`)
            reset()

        }
    };
    const handleShowPassword = () => {
        setShow((prevState) => !prevState)
    }

    return (
        <section className="login">
            <div className="login__block">
                <form onSubmit={handleSubmit(onSubmit)} className="login__form">
                    <h2>Регистрация</h2>
                    <div className="login__form-block">
                        <input
                            {...register('email', {
                                required: 'Email is required',
                                minLength: { value: 10, message: 'min-length 10' },
                                pattern: {
                                    value: /^[^ ]+@[^ ]+\.[a-z]{2,5}$/,
                                    message: 'Please enter a valid email address',
                                },
                            })}
                            type="email"
                            className="login__form-input"
                            placeholder="email"
                        />
                        <p className="login__form-error">{errors.email && errors.email.message}</p>
                    </div>


                    <div className="login__form-block">
                        <input
                            {...register('username', {
                                required: 'username is required',
                                minLength: { value: 3, message: 'min-length 3' },
                            })}
                            type="text"
                            className="login__form-input"
                            placeholder="login"
                        />
                        <p className="login__form-error">{errors.username && errors.username.message}</p>
                    </div>
                    <div className="login__form-block">
                        <input
                            {...register('password', {
                                required: 'password is required',
                                pattern: {
                                    value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g,
                                    message: 'The password must contain at least 8 characters, including uppercase letter and number!',
                                },
                            })}
                            type={show ? 'text' : 'password'}
                            className="login__form-input"
                            placeholder="password"
                        />
                        <p className="login__form-error">{errors.password && errors.password.message}</p>
                    </div>
                    <div className="login__form-block">
                        <input
                            {...register('firstname', {
                                required: 'firstname is required',
                                minLength: { value: 3, message: 'min-length 3' },
                            })}
                            type="text"
                            className="login__form-input"
                            placeholder="firstname"
                        />
                        <p className="login__form-error">{errors.firstname && errors?.firstname.message}</p>
                    </div>
                    <div className="login__form-block">
                        <input
                            {...register('lastname', {
                                required: 'lastname is required',
                                minLength: { value: 3, message: 'min-length 3' },
                            })}
                            type="text"
                            className="login__form-input"
                            placeholder="lastname"
                        />
                        <p className="login__form-error">{errors.lastname && errors.lastname.message}</p>
                    </div>
                    <div className="login__form-block">
                        <InputMask
                            mask={`+\\9\\96(999) 99-99-99`}
                            type="tel"
                            className="login__form-input"
                            placeholder="phone"
                            {...register('phoneNumber', {
                                required: 'This field is required'
                            })}
                        />
                        <p className="login__form-error">{errors.phoneNumber && errors.phoneNumber.message}</p>
                    </div>
                    <label className="login__form-label register__form-label_checkbox">
                        <input
                            checked={show}
                            onChange={handleShowPassword}
                            className="register__form-input register__form-input_checkbox"
                            type="checkbox"
                        />
                        <span className="login__form-show">Show password</span>
                    </label>

                    <div className="login__form-block">
                        <button  className="login__form-btn" type="submit">Continue registration</button>
                    </div>
                    <p className="login__reg">
                        Already have an account ?
                        <Link className="login__reg-link" to="/signIn">
                            Login
                        </Link>
                    </p>
                </form>
                <div className="login__route">
                    <BiHomeSmile className="login__route-icon" />
                    <Link className="login__route-link" to="/">
                        Return to the main page
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Register;

