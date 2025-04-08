import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";  // react 붙어야 함!
import { getBaseUrl } from "../../../utils/baseURL";

const ordersApi = createApi({
  reducerPath: 'ordersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/orders`,
    credentials: 'include',
  }),
  tagTypes: ['Orders'],
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (newOrder) => ({
        url: '/',
        method: 'POST',
        body: newOrder,
      }),
    }),
    getOrdersByEmail : builder.query({
      query: (email) => ({
        url: `/email/${email}`,
      }),
      providesTags: ['Orders']
    })
  }),
});

export const { useCreateOrderMutation, useGetOrdersByEmailQuery } = ordersApi;  // 요렇게 되어야 함
export default ordersApi;
