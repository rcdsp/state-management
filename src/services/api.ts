// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], null>({
      query: () => `posts`,
    }),
    getPostById: builder.query<Post, number>({
      query: (id) => `post/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPostsQuery, useGetPostByIdQuery } = api;
