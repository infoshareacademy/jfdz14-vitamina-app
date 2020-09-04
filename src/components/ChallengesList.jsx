import React from 'react';

import challengeImage1 from './image/challenge1.jpg';
import styles from './Challenges.module.css';


const ChallengesList = ({challenges, inProgress}) => {
 const  handleOnProgress = (itemId) => {
    let data = {};
    challenges.map(challenge => {
         if(challenge.id === itemId) {
         data = {
              category: challenge.category,
              description: challenge.description,
              id: challenge.id,
              img: challenge.img,
              title: challenge.title,
              status:  "inProgress",
         }
         };
         return challenge;
    })
    inProgress(itemId, data);
 }

  return (
    <div className={styles.card_list}>
      {
        challenges.map(challenge => (
          <div className={styles.card} key={challenge.id}
              onClick={() => handleOnProgress(challenge.id)}>
            <img src={challengeImage1} alt={challenge.title} className={styles.img} />
            <div className={styles.card_title}>
              <h3 style={{color: '#fff'}}>{challenge.title}</h3>
              <p>{challenge.category}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default ChallengesList;
