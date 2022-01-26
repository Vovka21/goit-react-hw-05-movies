import PropTypes from 'prop-types';
import styles from './Button.module.css';

const GoBackButton = ({ onBack }) => (
  <button type="button" onClick={onBack} className={styles.button}>
    ⟸ Go back
  </button>
);

GoBackButton.propTypes = {
  onBack: PropTypes.func.isRequired,
};

export default GoBackButton;
