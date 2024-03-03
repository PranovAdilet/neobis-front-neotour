import {createSlice} from "@reduxjs/toolkit";
import {IUserLoginData} from "../../interface/app.interface";
import {RootState} from "../index";



interface IState {
    user:  null | IUserLoginData,
    status: "loading" | "empty" | "done" | "error"
    error: string
    isAuth: boolean
}

const initialState : IState = {
    user: null,
    status: "empty",
    error: '',
    isAuth: false
}

const UserSlice = createSlice({
    name: "userSLice",
    initialState,
    reducers: {
        login: (state, action) => {
            if (state.user){
                state.user = {
                    ...action.payload
                }
            }
        },

        logOut: (state) => {
            state.user = null
            state.isAuth = false
            localStorage.removeItem('accessToken')
        },
        setIsAuth: (state, action) => {

            state.isAuth = action.payload
        }
    }
})

export const { logOut, login, setIsAuth} = UserSlice.actions

export default UserSlice.reducer

export const selectUser = (state : RootState) => state.userSlice