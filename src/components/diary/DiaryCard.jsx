import React from 'react';
import styles from './Diary.module.css';

const DiaryCard = (props) => (
  <div>
    {
      props.posts
        .filter(post => {
          const textFilter = post.title.toLowerCase().includes(props.postFilter.toLowerCase());
          const dateFilter = post.date.toString().includes(props.postFilter.toString());

          if(dateFilter) {
            return dateFilter;
          } else if(props.postFilter.length > 0) {
            return textFilter;
          } else {
            return true;
          }
        })
        .map(post => (
          <div id={post.id} className={styles.diary__post__box} key={post.id} onClick={props.onClickedDelete}>
            <div className={styles.diary__post__content}>
              <h3 className={styles.post__title}>{post.title}</h3>
              <span className={styles.post__date}>{post.date}</span>
              <p>{post.description}</p>
            </div>
            <div>
              <button id={`delete${post.id}`} className={styles.diary__post__button__delete}>usuń</button>
            </div>
          </div>
        ))
    }
  </div>
);

export default DiaryCard;