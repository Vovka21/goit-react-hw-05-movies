import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MovieList.module.css';

const MovieList = ({ movies, location }) => {
  return (
    <ul className={styles.list}>
      {movies.map(({ id, original_title, poster_path, name }) => (
        <li key={id} className={styles.listItem}>
          <Link to={{ pathname: `/movies/${id}` }} state={{ from: location }}>
            {
              <>
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={original_title}
                    title={original_title}
                    width="360"
                    height="450"
                  />
                </div>
                <h2 className={styles.title}>
                  {original_title}
                  {name}
                </h2>
              </>
            }
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      poster_path: PropTypes.string,
    }),
  ),
  location: PropTypes.object,
};

export default MovieList;
