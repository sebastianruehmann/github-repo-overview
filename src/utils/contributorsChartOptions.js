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
        fontFamily: "Roboto",
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
        fontFamily: "Roboto",
        beginAtZero: true
      }
    }]
  }
}
