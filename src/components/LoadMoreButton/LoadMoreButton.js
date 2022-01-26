import propTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ onClick }) => (
  <button onClick={onClick} className={styles.button}>
    load more
  </button>
);

Button.propTypes = {
  onClick: propTypes.func.isRequired,
};

export default Button;
