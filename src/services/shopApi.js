
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import {baseUrl} from '../firebase'

export const shopApi = createApi({
  reducerPath: 'shopApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getCategories: builder.query({
      query: () => 'categories.json',
    }),
    getProducts: builder.query({
      query: () => {
        console.log('entro products')
        return 'products.json'
      },
    }),
    getProductsByCategory: builder.query({
      query: category => {
        return `products.json?orderBy="tipo"&equalTo="${category}"`
    }}),
  }),
})

export const {
  useGetCategoriesQuery,
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
} = shopApi