import React from 'react';
import styles from '../styles/Summary.module.css';

const Summary = () => {
    return (
      <div className={styles.summaryContainer}>
        <h1 className={styles.mainValue}>63,179.71 USD</h1>
        <p className={styles.changeValue}>+ 2,161.42 (3.54%)</p>
      </div>
    );
};

export default Summary;