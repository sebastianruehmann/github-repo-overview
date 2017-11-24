export default {
  legend: {
    display: false
  },
  responsive: true,
  scales: {
    xAxes: [{
      display: true,
      scaleLabel: {
        display: true,
        labelString: 'Users'
      },
      ticks: {
        autoSkip: false
      }
    }],
    yAxes: [{
      display: true,
      scaleLabel: {
        display: true,
        labelString: 'Number of contributions'
      },
      ticks: {
        beginAtZero: true
      }
    }]
  }
}
