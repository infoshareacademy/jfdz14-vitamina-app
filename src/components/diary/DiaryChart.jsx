import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

class DiaryChart extends PureComponent {

  render() {
    const data = this.props.value;
    return (
      <ResponsiveContainer
        width='100%'
        minHeight={150}
        // height={230}
      >
        <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10, right: 0, left: 0, bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#87d068" stopOpacity={0.8}/>
            <stop offset="100%" stopColor="#0098c9" stopOpacity={0.5}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="#58798b" />
        <YAxis hide={true}  />
        <Tooltip />
        <Area type="monotone" dataKey="nastrój" stroke="#58798b" strokeWidth={2} fill="url(#colorUv)" />
      </AreaChart>
      </ResponsiveContainer>
    );
  }
}

export default DiaryChart;
