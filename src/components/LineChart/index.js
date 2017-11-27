import React from 'react';
import { Line } from 'react-chartjs-2';
import propTypes from 'prop-types';

const LineChart = ({
  data, options, width, height
}) => (
  <div className="LineChart">
    <Line data={data} options={options} width={width} height={height} />
  </div>
);

LineChart.propTypes = {
  data: propTypes.object,
  options: propTypes.object,
  width: propTypes.number,
  height: propTypes.number
};

export default LineChart;
