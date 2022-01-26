import { useState } from 'react';
import PropTypes from 'prop-types';
import { CgSearch } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import NotFound from '../NotFound/NotFound';
import styles from './Search.module.css';

const SearchBar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmitChange = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };

  const message = { message: 'Enter a query' };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchQuery.trim() === '') {
      NotFound(message);
      return;
    }

    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <header className={styles.searchbar}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <button type="submit" className={styles.button}>
          <IconContext.Provider value={{ color: 'ffffff', size: '2em' }}>
            <div className={styles.buttonLabel}>
              <CgSearch />
            </div>
          </IconContext.Provider>
        </button>

        <input
          className={styles.input}
          type="text"
          // autocomplete="off"
          autoFocus
          placeholder="Search films"
          name="searchQuery"
          value={searchQuery}
          onChange={handleSubmitChange}
        />
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
