import React from 'react';
import ChartPie from './ChartPie';

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <div>
          <h1>Twoje postępy</h1>
        </div>
        <ChartPie />
      </>
    );
  }
}
export default Dashboard;
