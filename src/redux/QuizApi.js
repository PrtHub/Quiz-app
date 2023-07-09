import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const quizApi = createApi({
  reducerPath: "quizApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.api-ninjas.com/v1",
    prepareHeaders: (headers) => {
      headers.set("X-Api-Key", "yd/CEUAO0KImA0w3Ur62Cg==AYGz8OEs0C4etV9r");
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
