import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'pon', nastrój: 0,
  },
  {
    name: 'pon', nastrój: 2.5,
  },
  {
    name: 'wt', nastrój: 5,
  },
  {
    name: 'śr', nastrój: 0,
  },
  {
    name: 'czw', nastrój: 7.5,
  },
  {
    name: 'pt', nastrój: 8,
  },
  {
    name: 'sb', nastrój: 10,
  },
  {
    name: 'nd', nastrój: 5,
  },
];

class DiaryChart extends PureComponent {

  render() {
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
        {/* <BarChart
          // width={500}
          // height={230}
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis dataKey="name" />
          <YAxis hide={true} />
          <Tooltip />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="nastrój" fill="#0098c9" />
        </BarChart> */}
      </ResponsiveContainer>
    );
  }
}

export default DiaryChart;
