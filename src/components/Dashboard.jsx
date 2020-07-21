import React from 'react';
import ChartPie from './ChartPie';
import ChartLine from './ChartLine';
import styles from './Dashboard.module.css';

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
        </section>
      </>
    );
  }
}
export default Dashboard;
