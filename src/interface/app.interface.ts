export interface IDiscoverTour{
    imageUrl: string
    id: number
    name: string
}

interface IReview{
    author: string
    date: string
    imageUrl: string
    text: string
}

export interface IDescriptionTour{
    images: string[]
    id: number
    name: string
    country: string
    locality: string
    description: string
    reviewDtoList: IReview[]
}

export interface IData{
    content: IDiscoverTour[]
    empty: boolean
    first: boolean
    last: boolean
    number: number
    numberOfElement: number
    pageable: number
    size: number
    sort: {}
    totalPages: number
    totalElements: number
}

export interface IPostData{
    phoneNumber: string
    tourId: number
    peopleCount: number
    comment: string

}