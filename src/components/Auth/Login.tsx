import {Link} from "react-router-dom";
import {BiHomeSmile} from "react-icons/bi"
import {useForm, SubmitHandler} from "react-hook-form";
import {ILoginField} from "../../interface/app.interface";
import {useSignInMutation} from "../../store/api/api";


const Login = () => {

    const [mutate] = useSignInMutation();

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<ILoginField>()

    const onSubmit: SubmitHandler<ILoginField> = async (data) => {
        console.log({...data})
        try {
            const newData = {
                ...data
            }
            const response = await mutate(newData);
            console.log(response)
        } catch (error) {
            console.error(error)
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