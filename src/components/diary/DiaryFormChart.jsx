import React from 'react';
import styles from './DiaryFormChart.module.css';

class DiaryFormChart extends React.Component {

  handleChange = (e) => {
    const value = Math.ceil(e.target.value / 10);
    this.props.onChangeInForm(value);
  }

  render() {
    return (
      <div className={styles.chart__box}>
        <input
          type='range'
          list='tickmarks'
          onChange={this.handleChange}
          className={styles.chart__range}
        />
        <datalist id='tickmarks'>
          <option value='0'></option>
        </datalist>
      </div>
    );
  }
}

export default DiaryFormChart;
