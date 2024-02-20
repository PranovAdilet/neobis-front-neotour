import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IData, IDescriptionTour, IPostData} from "../../interface/app.interface";

interface IQuery{
    category: string
    page: number
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
            query: ({category, page}) => `/tours?param=${category}&page=${page}`
        }),
        getRecommendedTours: builder.query<IData, string>({
            query: (month) => `/tours/recommended/${month}`
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
        })

    })
})

export const {useGetDiscoverToursQuery, useGetRecommendedToursQuery, useGetTourQuery, usePostBookingMutation} = api
