import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MovieNavigation from '../../components/MovieNavigation/MovieNavigation';
import GoBackButton from '../../components/GoBackButton/GoBackButton';
import * as MoviesAPI from '../../services/MoviesAPI';
import Movie from '../../components/Movie/Movie';
import PropTypes from 'prop-types';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  let navigate = useNavigate();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    MoviesAPI.fetchMovieById(movieId).then(data => {
      setMovie(data);
    });
  }, [movieId]);

  function handleGoBack() {
    // navigate(-1);
    navigate('/');
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
