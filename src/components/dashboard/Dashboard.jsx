import React from 'react';
import ChartPie from './ChartPie';
import ChartLine from './ChartLine';
import styles from './Dashboard.module.css';
import ChallengeFinished from "../ChallengeFinished"
import ChallengeCard from "../ChallengeCard"
import ChallengeInProgress from "../ChallengeInProgress"
import { withRouter } from 'react-router-dom';

class Dashboard extends React.Component {

  render() {
    return (
      <>
        <section className={styles.chart__section}>
          <div className={styles.chart__box}>
            <h1 className={styles.chart__box__header}>Twoje postępy</h1>
            <ChartPie />
          </div>
          <div className={styles.chart__box}>
            <h2 className={styles.chart__box__header}>Poziom wytrwałości</h2>
            <ChartLine />
          </div>
          <ChallengeInProgress/>
          <ChallengeCard />
          <ChallengeFinished />
          
        </section>
      </>
    );
  }
}
export default Dashboard;
