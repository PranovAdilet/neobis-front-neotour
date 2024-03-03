import React from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {logOut, selectUser} from "../../../store/reducers/Auth";
import {useNavigate} from "react-router-dom";

const AuthBoard = () => {

    const dispatch = useAppDispatch()
    const {user} = useAppSelector(selectUser)

    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logOut())
        navigate('/')
    }

    return (
        <div className="logout">
            <h3>{user?.firstName}</h3>
            <button className="logout__btn" type="button" onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default AuthBoard;