import React from 'react';
import styles from './Diary.module.css';
import { DATABASE_URL } from '../../index';

const DiaryCard = (props) => {
  const handleOnClickDelete = (e) => {
    props.onDelete(e.target.id)
  }

  console.log(props.posts)
  console.log(Object.entries(props.posts))
  const renderCards = props.posts.id

  return (
    <>
      {
        props.posts[0].id !== null
        ? props.posts
            .filter(post => {
              const textFilter = post.title.toLowerCase().includes(props.postFilter.toLowerCase());
              const dateFilter = post.date.includes(props.postFilter);

              if(dateFilter) {
                return dateFilter;
              } else if(props.postFilter.length > 0) {
                return textFilter;
              } else {
                return true;
              }
            })
            .reverse()
            .map(post => (
              <div className={styles.diary__post__box} key={post.id} >
                <div className={styles.diary__post__content}>
                  <h3 className={styles.post__title}>{post.title}</h3>
                  <span className={styles.post__date}>{post.date}</span>
                  <p>{post.description}</p>
                </div>
                <div>
                  <button id={post.id} className={styles.diary__post__button__delete} onClick={handleOnClickDelete}>usuń</button>
                </div>
              </div>
            ))
          : <div className={styles.diary__post__content}>
              <h3>Jak się dziś czujesz?</h3>
              <p>To mieisce na Twoje przemyślenia i doznania, których doświadczasz na co dzięń...</p>
          </div>
      }
    </>
  );
}

export default DiaryCard;