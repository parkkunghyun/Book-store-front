import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { getBaseUrl } from "../../../utils/baseURL";

const baseQuery = fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/books`,
    credentials: 'include', // 쿠키 등을 포함
    prepareHeaders: (Headers) => {
        const token = localStorage.getItem('token');
        if(token) {
            Headers.set('Authorization', `Bearer ${token}`)
        }
        return Headers;
    }
})

const booksApi = createApi({
    reducerPath: 'booksApi', // store에 들어갈 이름
    baseQuery, // fetch 설정 (base url 등)
    tagTypes: ['Books'], // 캐싱 관리용 tag
    endpoints: (builder) => ({
        fetchAllBooks: builder.query({
            query: () => "/",
            providesTags: ["Books"]
        }),
        fetchBookById: builder.query({
            query: (id) => `/${id}`,
            providesTags: (results, error, id) => [{type: 'Books', id}]
        }),
        addBook: builder.mutation({
            query: (newBook) => ({
                url: '/create-book',
                method: "POST",
                body: newBook
            }),
            invalidatesTags: ['Books']
        }),
        updateBook: builder.mutation({
            query: ({id,...rest}) => ({
                url: `/edit/${id}`,
                method: 'PUT',
                body: rest,
                headers: {
                    'Content-Type': 'application/json'
                }
            }),
            invalidatesTags: ['Books']
        }),
        deleteBook : builder.mutation({
            query: (id) => ({
                url: `/delete/${id}`,
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            }),
            invalidatesTags: ['Books']
        })

    })
});

export const {useFetchAllBooksQuery, useFetchBookByIdQuery, addBook, updateBook, deleteBook} = booksApi;
export default booksApi;