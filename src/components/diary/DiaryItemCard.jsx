import React from 'react';
import styles from './Diary.module.css';
import DiaryCard from './DiaryCartd';

const DiaryItemCard = ({ posts, postFilter, onDelete }) => {

  return (
    <>
      {
        posts[0].id !== null
        ? posts
            .filter(post => {
              const textFilter = post.title.toLowerCase().includes(postFilter.toLowerCase());
              const dateFilter = post.date.includes(postFilter);
              const fillFilter = postFilter.length > 0;

              if(dateFilter) {
                return dateFilter;
              } else if(fillFilter) {
                return textFilter;
              }
            })
            .reverse()
            .map(post => {
              return (
                <DiaryCard
                  key={post.id}
                  id={post.id}
                  date={post.date}
                  title={post.title}
                  description={post.description}
                  onDelete={onDelete}
                />
              )
            })
        : <div className={styles.diary__post__content} style={{paddingLeft: '3%'}}>
              <h3>Jak się dziś czujesz?</h3>
              <p>To mieisce na Twoje przemyślenia i doznania, których doświadczasz na co dzięń...</p>
          </div>
      }
    </>
  );
}

export default DiaryItemCard;