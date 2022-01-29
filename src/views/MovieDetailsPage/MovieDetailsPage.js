import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import MovieNavigation from '../../components/MovieNavigation/MovieNavigation';
import GoBackButton from '../../components/GoBackButton/GoBackButton';
import * as MoviesAPI from '../../services/MoviesAPI';
import Movie from '../../components/Movie/Movie';
import PropTypes from 'prop-types';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  // const [error, setError] = useState(null);

  const [movie, setMovie] = useState({});

  useEffect(() => {
    MoviesAPI.fetchMovieById(movieId).then(data => {
      setMovie(data);
      // .catch(error => setError(error));
    });
  }, [movieId]);

  function handleGoBack() {
    navigate(location?.state?.from ?? '/');
  }

  return (
    <>
      <GoBackButton onBack={handleGoBack} />
      {movie && <Movie movie={movie} />}
      {movie && <MovieNavigation />}
    </>
  );
};

MovieDetailsPage.propTypes = {
  location: PropTypes.object,
};

export default MovieDetailsPage;
