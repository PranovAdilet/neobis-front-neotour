import {createSlice} from "@reduxjs/toolkit";


interface IState {
    user:  null,
    status: "loading" | "empty" | "done" | "error"
    error: string
    token: string
}

const initialState : IState = {
    user: null,
    status: "empty",
    error: '',
    token: ''
}

const UserSlice = createSlice({
    name: "userSLice",
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const {user, accessToken} = action.payload
            state.user = user
            state.token = accessToken
        },
        logOut: (state) => {
            state.user = null
            state.token = ''
        }
    }
})

export const {setCredentials, logOut} = UserSlice.actions

export default UserSlice.reducer

