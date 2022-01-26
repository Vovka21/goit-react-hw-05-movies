import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Search from '../../components/Search/Search';
import * as MoviesAPI from '../../services/MoviesAPI';

import MovieList from '../../components/MovieList/MovieList';
import LoadMoreButton from '../../components/LoadMoreButton/LoadMoreButton';
import Loader from '../../components/Loader/Loader';
import NotFound from '../../components/NotFound/NotFound';

const MoviesPage = () => {
  let navigation = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  const [searchQuery, setSearchQuery] = useState(query || '');
  const [currentPage, setCurrentPage] = useState('1');
  const [movies, setMovies] = useState([]);

  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchQuery) return;

    const getMovies = async () => {
      setLoading(true);
      try {
        const { results } = await MoviesAPI.fetchMoviesBySearch(
          searchQuery,
          currentPage,
        );

        if (results.length === 0) {
          alert('Nothing found');
        }

        setMovies(prev => [...prev, ...results]);
        setLoading(true);
        if (currentPage !== 1) {
          // scrollOnLoadButton();
          console.log('down');
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, [currentPage, searchQuery]);

  const handleOnSubmit = searchQuery => {
    setMovies([]);
    setSearchQuery(searchQuery);
    setCurrentPage(1);
    setError(null);

    navigation({
      ...location,
      search: `query=${searchQuery}`,
    });
  };

  const scrollOnLoadButton = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const handleLoadMore = () => {
    setCurrentPage(prevState => prevState + 1);
  };

  return (
    <>
      <Search onSubmit={handleOnSubmit} />
      {movies && movies.length > 0 && (
        <MovieList movies={movies} location={location} />
      )}
      {isLoading === false && movies.length >= 12 && (
        <LoadMoreButton onClick={handleLoadMore} />
      )}
      {isLoading && <Loader />}
      {error && <NotFound message={error.message} />}
    </>
  );
};

export default MoviesPage;
