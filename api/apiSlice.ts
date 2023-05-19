import { IProduct } from '@/ts/interfaces/product.interfaces'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
    endpoints: builder => ({
        getAllProducts: builder.query<IProduct[]>({
            query: () => '/products'
        }),
        getNumberOfProducts: builder.query<IProduct[], number>({
            query: (number) => `/products/?limit=${number}`
        }),
        getSingleProduct: builder.query<IProduct, number>({
            query: (id) => `/products/${id}`
        }),
        getAllCategories: builder.query<IProduct[]>({
            query: () => '/products/categories'
        }),
        getProductsInCategory: builder.query<IProduct[], string>({
            query: (category) => `/products/category/${category}`
        })
    })
})

export const { useGetAllProductsQuery,
    useGetNumberOfProductsQuery,
    useGetSingleProductQuery,
    useGetAllCategoriesQuery,
    useGetProductsInCategoryQuery } = apiSlice
