import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'ca8f7db83e552c6e2e5b39184e2981e9';

export const fetchTrendingMoviesDay = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
  );
  return response.data.results;
};

export const fetchSearchMovies = async (searchQuery, page = 1) => {
  const response = await axios.get(`${BASE_URL}search/movie`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      query: searchQuery,
      page: page,
      include_adult: 'false',
    },
  });
  return response.data.results;
};

export const fetchMovieById = async id => {
  const response = await axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);
  return response.data;
};

export const fetchCast = async id => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`
  );
  return response.data;
};

export const fetchReviews = async id => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`
  );
  return response.data;
};
