import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IData, IDescriptionTour, IDiscoverTour} from "../../interface/app.interface";

interface IQuery{
    category: string
    page: number
}

const API_URL = `https://neo-tour-production.up.railway.app/v1/tours`
export const api = createApi({
    reducerPath: "api",
    tagTypes:['api'],
    baseQuery: fetchBaseQuery(
        {
            baseUrl: API_URL
        }),
    endpoints: (builder) => ({
        getDiscoverTours: builder.query<IData, IQuery>({
            query: ({category, page}) => `?param=${category}&page=${page}`
        }),
        getRecommendedTours: builder.query<IData, string>({
            query: (month) => `/recommended/${month}`
        }),
        getTour: builder.query<IDescriptionTour, string>({
            query: (id) => `/${id}`
        }),
    })
})

export const {useGetDiscoverToursQuery, useGetRecommendedToursQuery, useGetTourQuery} = api
