import styles from './Movie.module.css';

const Movie = ({ movie }) => {
  return (
    <div className={styles.card}>
      {movie.poster_path ? (
        <img
          className={styles.img}
          src={'https://image.tmdb.org/t/p/w300' + movie.poster_path}
          alt={movie?.title}
        />
      ) : null}
      <div>
        <h2 className={styles.title}>{movie?.original_title}</h2>
        <p>User Score: {movie?.vote_average * 10 + '%'}</p>
        <p>Overview: {movie?.overview}</p>
        <p>
          Genres:{' '}
          {movie?.genres ? movie.genres.map(genr => `${genr.name}, `) : null}
        </p>
      </div>
    </div>
  );
};

export default Movie;
