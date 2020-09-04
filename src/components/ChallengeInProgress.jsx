import React from 'react';
import { Link } from "react-router-dom";
import trophy from './image/trophy.png';

import styles from './Challenges.module.css';
import challengeImage2 from './image/challenge2.jpg';
import { AiOutlineLink } from 'react-icons/ai';

const ChallengeInProgress = ({challenges}) => {
  const inProgress = challenges.filter(challenge => challenge.status === 'inProgress');

  return (

    <div  style={{width:'100%'}}>
      <h1 style={{margin: '1%'}}>Wyzwania w trakcie realizacji</h1>
      {
        inProgress.length > 0
        ? <div className={styles.card_list}>
            {
              inProgress.map(challenge => (
                <Link to={`challenges/${challenge.id}`} className={styles.card} key={challenge.id}>
                  <img src={challengeImage2} alt={challenge.title} className={styles.img} />
                  <div className={styles.card_title}>
                    <h3 style={{color: '#fff'}}>{challenge.title}</h3>
                    <p>{challenge.category}</p>
                  </div>
                </Link>
              ))
            }
          </div>
        : <div className={styles.challenge_card_info}>
            <Link to='/challenges'>
            <img src={trophy} style={{width: '15%', height: 'auto', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
            <h2 style={{display:'block'}}>Nie masz aktualnie zadnych wyzwań</h2>
            <p style={{color: '#0098C9', fontWeight: 'bold', display:'block'}}>Kliknij aby dodać nowe!</p>
            </Link>
          </div>
      }
    </div>
  )
};


export default ChallengeInProgress;