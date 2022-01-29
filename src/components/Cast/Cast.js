import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import * as MoviesAPI from '../../services/MoviesAPI';
import styles from './Cast.module.css';

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    MoviesAPI.fetchCast(movieId)
      .then(({ cast }) => setCredits(cast))
      .catch(error => setError(error));
  }, [movieId]);

  return (
    <>
      <ul className={styles.list}>
        {credits &&
          credits.length > 0 &&
          credits.map(actor => (
            <li key={actor?.id} className={styles.listItem}>
              {actor.profile_path ? (
                <img
                  className={styles.img}
                  src={'https://image.tmdb.org/t/p/w300' + actor?.profile_path}
                  alt={actor?.original_name}
                  // width="100px"
                />
              ) : null}

              <div className={styles.names}>
                <div>
                  <p>Name:</p> {actor?.original_name}
                </div>
                <div>
                  <p>Character:</p> {actor?.character}
                </div>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Cast;
