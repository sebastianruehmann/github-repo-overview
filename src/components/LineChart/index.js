import React, { Component } from 'react';
import { Line, defaults } from 'react-chartjs-2';

const LineChart = ({data, options, width, height}) => (
  <div className="LineChart">
    <Line data={data} options={options} width={width} height={height}/>
  </div>
);

export default LineChart;