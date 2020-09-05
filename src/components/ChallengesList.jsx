import React from 'react';
import { Link } from 'react-router-dom';

import challengeImage1 from './image/challenge1.jpg';
import styles from './Challenges.module.css';


const ChallengesList = ({challenges, inProgress}) => {
  return (
    <div className={styles.card_list}>
      {
        challenges.map(challenge => (
          <Link to={`challenges/${challenge.id}`} className={styles.card} key={challenge.id}>
            <img src={challengeImage1} alt={challenge.title} className={styles.img} />
              <div className={styles.card_title}>
                <h3 style={{color: '#fff'}}>{challenge.title}</h3>
                <p>{challenge.category}</p>
              </div>
          </Link>
        ))
      }
    </div>
  );
}

export default ChallengesList;
