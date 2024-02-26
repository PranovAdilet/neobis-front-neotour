import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {
    IData,
    IDescriptionTour,
    ILoginField,
    IPostData,
    IShippingFields,
    IUserData, IUserLoginData
} from "../../interface/app.interface";

interface IQuery{
    category: string
    page: number
}


const API_URL = 'https://neo-tour-production.up.railway.app/v1'

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

                const formData = new FormData()
                formData.append('dto', JSON.stringify(data))
                console.log(formData)

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
        signIn: builder.mutation<IUserLoginData, ILoginField>({
            query: (data) => ({
                url: '/login',
                method: 'POST',
                body: data
            })
        })

    })
})

export const {useGetDiscoverToursQuery, useGetRecommendedToursQuery, useGetTourQuery, usePostBookingMutation, useSignUpMutation, useSignInMutation} = api
