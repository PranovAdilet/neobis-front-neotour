import {Link, useNavigate} from "react-router-dom";
import {BiHomeSmile} from "react-icons/bi"
import {useForm, SubmitHandler} from "react-hook-form";
import {ILoginField} from "../../../interface/app.interface";
import {useSignInMutation} from "../../../store/api/api";
import {useAppDispatch} from "../../../hooks/reduxHooks";
import {login, setIsAuth} from "../../../store/reducers/Auth";
import {useEffect} from "react";


const Login = () => {

    const [mutate] = useSignInMutation()

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    useEffect(() => {

        const token = localStorage.getItem('accessToken');

        if (token){
            dispatch(setIsAuth(true))
            navigate('/main')
        }

    }, [dispatch, navigate])



    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors
        }
    } = useForm<ILoginField>()


    const onSubmit: SubmitHandler<ILoginField> = async (data) => {

        try {

            const response = await mutate({...data})

            if ('data' in response){

                const dataUser = {
                    email: response.data.email,
                    firstName: response.data.email,
                    lastName: response.data.email,
                    phoneNumber: response.data.email,
                    username: response.data.email,
                    accessToken: '',
                    imageUrl: response.data.email
                }
                localStorage.setItem('accessToken', response.data.accessToken)
                dispatch(login(dataUser))
                navigate('/main')

            }else{
                alert('Неверный логин или пароль')
                reset()
            }


        } catch (error) {
            console.error('Ошибка при отправке запроса:', error)
            reset()
            alert('Ошибка при аутентификации. Пожалуйста, попробуйте еще раз.')
        }
    }

    return (
        <section className="login">
            <div className="login__block">
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="login__form">
                    <h2>Логин</h2>
                    <div className="login__form-block">
                        <input
                            {...register('username', {
                                required: 'username is required',
                                minLength: { value: 3, message: 'min-length 3' },
                            })}
                            type="email"
                            className="login__form-input"
                            placeholder="username"
                        />
                        <p className='login__form-error'>
                            {errors.username && errors.username.message}
                        </p>
                    </div>

                    <div className="login__form-block">
                        <input
                            type="password"
                            className="login__form-input"
                            placeholder="password"
                            {...register('password', {
                                required: 'password is required',
                                pattern: {
                                    value: /[0-9a-zA-Z!@#$%^&*]{8,}/g,
                                    message: 'The password must contain at least 8 characters, including uppercase letter and number!',
                                },
                            })}
                        />
                        <p className='login__form-error'>
                            {errors.password && errors.password.message}
                        </p>
                    </div>
                    <div className="login__form-block">
                        <button className="login__form-btn" type={"submit"}>
                            Login
                        </button>
                    </div>
                    <p className="login__reg">
                        Don’t have an account?  ?
                        <Link className="login__reg-link" to={'/signUp'}>
                            Sign up
                        </Link>
                    </p>

                </form>
                <div className="login__route">
                    <BiHomeSmile className="login__route-icon"/>
                    <Link className="login__route-link" to={'/'}>
                        Return to the main page
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default Login;