import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IData, IDescriptionTour, ILoginField, IPostData, IShippingFields} from "../../interface/app.interface";

interface IQuery{
    category: string
    page: number
}

interface IUserData{
    email: string
    firstname: string
    lastname: string
    phoneNumber: string
    username: string
}


const API_URL = `https://neo-tour-production.up.railway.app/v1`
export const api = createApi({
    reducerPath: "api",
    tagTypes:['api'],
    baseQuery: fetchBaseQuery(
        {
            baseUrl: API_URL,
            mode: 'cors'
        }),
    endpoints: (builder) => ({
        getDiscoverTours: builder.query<IData, IQuery>({
            query: ({category, page}) => `/tours?param=${category}&size=5&page=${page}`
        }),
        getRecommendedTours: builder.query<IData, string>({
            query: (month) => `/tours?param=recommended&month=${month}`
        }),
        getTour: builder.query<IDescriptionTour, string>({
            query: (id) => `/tours/${id}`
        }),
        postBooking: builder.mutation<IPostData, IPostData>({
            query: (data) => ({
                url: '/bookings',
                method: 'POST',
                body: data
            })
        }),
        signUp: builder.mutation<IUserData, IShippingFields>({
            query: (data) => {
            // query: (data, image) => { // for image uploads
                const fields = {
                    firstName: data.firstname,
                    lastName:data.lastname,
                    email: data.email,
                    password: data.password,
                    phoneNumber: data.phoneNumber,
                    username: data.username
                }
                const formData = new FormData();
                formData.append('dto', JSON.stringify(fields));

                // if (image) {
                //     formData.append('image', image);
                // }

                return {
                    url: '/registration',
                    method: 'POST',
                    body: formData,
                };
            }
        }),
        signIn: builder.mutation<IUserData, ILoginField>({
            query: (data) => ({
                url: '/login',
                method: 'POST',
                body: data
            })
        })

    })
})

export const {useGetDiscoverToursQuery, useGetRecommendedToursQuery, useGetTourQuery, usePostBookingMutation, useSignUpMutation, useSignInMutation} = api
