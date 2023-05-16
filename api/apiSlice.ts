import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
    endpoints: builder => ({
        getAllProducts: builder.query({
            query: () => '/products'
        }),
        getNumberOfProducts: builder.query({
            query: (number) => `/products/?limit=${number}`
        }),
        getSingleProduct: builder.query({
            query: (id) => `/products/${id}`
        }),
        getAllCategories: builder.query({
            query: () => '/products/categories'
        }),
        getProductsInCategory: builder.query({
            query: (category) => `/products/category/${category}`
        })
    })
})

export const { useGetAllProductsQuery,
    useGetNumberOfProductsQuery,
    useGetSingleProductQuery,
    useGetAllCategoriesQuery,
    useGetProductsInCategoryQuery } = apiSlice
