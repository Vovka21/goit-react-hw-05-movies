import { useState, useEffect } from 'react';
import * as MoviesAPI from '../../services/MoviesAPI';
import { useLocation } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';
import styles from './HomePage.module.css';

export default function HomePage() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    MoviesAPI.fetchMovies()
      .then(data => setMovies(data.results))
      .catch(error => setError(error));
  }, []);

  return (
    <>
      <h1 className={styles.title}>Trending today</h1>

      {movies && movies.length > 0 && (
        <MovieList movies={movies} location={location} />
      )}
    </>
  );
}
