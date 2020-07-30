import React from 'react';
import styles from './Diary.module.css';
import { Slider } from 'antd';
import { FrownOutlined, SmileOutlined } from '@ant-design/icons';

class DiaryFormChart extends React.Component {
  state = {
    value: 0,
  };

  handleChange = value => {
    this.setState({ value: value});
  };

  render() {
    // const { max, min } = this.props;
    // const { value } = this.state;
    // const mid = ((max - min) / 2).toFixed(5);
    // const preColorCls = value >= mid ? '' : 'icon-wrapper-active';
    // const nextColorCls = value >= mid ? 'icon-wrapper-active' : '';
    return (
      <div className="icon-wrapper">
        <input type='range' className={styles.diary__header__chart}/>
        {/* <FrownOutlined className={preColorCls} />
        <Slider {...this.props} onChange={this.handleChange} value={value} />
        <SmileOutlined className={nextColorCls} /> */}
      </div>
    );
  }
}

export default DiaryFormChart;
