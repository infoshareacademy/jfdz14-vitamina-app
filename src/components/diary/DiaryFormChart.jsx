import React from 'react';
import styles from './DiaryFormChart.module.css';

class DiaryFormChart extends React.Component {
  state = {
    value: 5,
  };

  handleChange = (e) => {
    const value = e.target.value;
    this.props.onChangegsInForm(value);
  };

  render() {
    return (
      <div className={styles.chart__box}>
        <input
          type='range'
          list='tickmarks'
          max='10'
          min='0'
          value={this.state.value}
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
