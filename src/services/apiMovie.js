import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY_MOVIE = '2a04b92c28f63c397acf027304140741';

export const getTrendingMovies = () =>
  axios
    .get(`trending/all/day?api_key=${API_KEY_MOVIE}`)
    .then(data => data.data)
    .catch(error => console.error(error));

export const getMovieById = movieId =>
  axios
    .get(`movie/${movieId}?api_key=${API_KEY_MOVIE}`)
    .then(data => data.data)
    .catch(error => console.error(error));

export const searchMovie = query =>
  axios
    .get(`search/movie?query=${query}&api_key=${API_KEY_MOVIE}`)
    .then(data => data.data)
    .catch(error => console.error(error));

export const getActorsMovie = movieId =>
  axios
    .get(`movie/${movieId}/credits?api_key=${API_KEY_MOVIE}`)
    .then(data => data.data)
    .catch(error => console.error(error));

export const getReviewsMovie = movieId =>
  axios
    .get(`movie/${movieId}/reviews?api_key=${API_KEY_MOVIE}`)
    .then(data => data.data)
    .catch(error => console.error(error));
