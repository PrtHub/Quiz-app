import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const quizApi = createApi({
  reducerPath: "quizApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.api-ninjas.com/v1",
    prepareHeaders: (headers) => {
      headers.set("X-Api-Key", import.meta.env.VITE_TRIVIA_API_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getQuiz: builder.query({
      query: (category) => `/trivia?category=${category}&limit=10000`,
    }),
  }),
});

export const { useGetQuizQuery } = quizApi;
