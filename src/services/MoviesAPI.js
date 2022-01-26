import axios from 'axios';
const API_KEY = 'ec54c0409f7f71b36a33826187600e03';
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchMovies() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/all/day?api_key=${API_KEY}`,
  );
}

export async function fetchMovieById(movieId) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
    );
    return data;
  } catch (error) {
    console.log('===ERROR===', error);
  }
}

export function fetchMoviesBySearch(searchQuery, currentPage) {
  return fetchWithErrorHandling(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=${currentPage}&language=en-US`,
  );
}

export function fetchCast(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`,
  );
}

export function fetchReviews(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&page=1`,
  );
}
