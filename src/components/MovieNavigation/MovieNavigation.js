import { Outlet, useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MovieNavigation.module.css';

const MovieNavigation = () => {
  const location = useLocation();
  return (
    <>
      <h2 className={styles.title}>Additional information</h2>
      <ul>
        <li>
          <Link
            to={{
              pathname: `cast `,
              state: { ...location.state },
            }}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: `reviews`,
              state: { ...location.state },
            }}
          >
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

MovieNavigation.propTypes = {
  location: PropTypes.object,
};

export default MovieNavigation;
