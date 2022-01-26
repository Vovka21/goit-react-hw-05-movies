import { MutatingDots } from 'react-loader-spinner';
import React from 'react';
import styles from './Loader.module.css';
// import { LoaderWraper } from './Loader.styled';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <MutatingDots
        type="Puff"
        color="#00BFFF"
        height={150}
        width={150}
        timeout={1000}
      />
    </div>
  );
};

export default Loader;
