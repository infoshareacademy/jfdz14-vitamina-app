import React from 'react';
import DiaryChart from "./DiaryChart";
import ButtonAdd from "./ButtonAdd";
import SearchAppBar from './SearchAppBar';
import DiaryCard from './DiaryCard';
import styles from './Diary.module.css';


const DiaryDashboard = (props) => (
  <section className={styles.diary__section}>
    <header className={styles.diary__header}>
      <h1 className={styles.diary__header__title}>Twój dziennik nastrojów:</h1>
      <DiaryChart data={props.data}/>
      <ButtonAdd onClickToForm={props.onClickToForm}/>
    </header>
    <main>
      <SearchAppBar onKeyUpSearch={props.onKeyUpSearch} />
      <DiaryCard posts={props.posts} postFilter={props.postFilter} onDelete={props.onDelete} />
    </main>
  </section>
);

export default DiaryDashboard;