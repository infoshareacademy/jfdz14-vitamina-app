import React from 'react';
import styles from './Diary.module.css';


const ButtonAdd = () => (
    <>
      <div className={styles.button}>
        <span className={styles.button__icon}>+</span>
        <p className={styles.button__content}>Dodaj nową pozycję do dziennika</p>
      </div>
    </>
  );

export default ButtonAdd;