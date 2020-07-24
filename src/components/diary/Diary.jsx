import React from "react";
import DiaryChart from "./DiaryChart";
import ButtonAdd from "./ButtonAdd";
import SearchAppBar from './SearchAppBar';
import styles from './Diary.module.css';

class Diary extends React.Component {
  render() {
    return (
      <section className={styles.diary__section}>
        <header className={styles.diary__header}>
          <h1 className={styles.diary__header__title}>Twój dziennik nastrojów:</h1>
          <DiaryChart />
          <ButtonAdd />
        </header>
        <main>
          <SearchAppBar />
        </main>
      </section>
    );
  }
}


export default Diary;
