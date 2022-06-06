import React, { Component } from 'react';
import Chart from 'chart.js';


let fortniteRecentGamesChart;

export default class FortniteRecentGames extends Component {
  constructor(props) {
      super(props);
      this.chartRef = React.createRef();
  }

  componentDidMount() {
    this.buildChart();
  }
  componentDidUpdate() {
    this.buildChart();
  }

  buildChart() {
    const myChartRef = this.chartRef.current.getContext("2d");
    const { data } = this.props;

    if (typeof fortniteRecentGamesChart !== "undefined"){
      fortniteRecentGamesChart.destroy();
    }
    
    let chartData = this.getChartData(data); // only need data because our data will include labels
    fortniteRecentGamesChart = new Chart(myChartRef, {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
            label: 'Kills',
            backgroundColor: 'rgba(115, 210, 255, 0.4)',
            borderColor: 'rgba(0, 0, 255, 0.4)',
            lineTension: 0,
            data: chartData
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Recent Matches',
          fontSize: 20
        },
        legend: {
          display: true,
          position: 'right'
        },
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              unit: 'hour',
              displayFormats: {
                hour: 'MMM D h:mm a'
              }
            },
            ticks: {
              source: 'auto'
            }
          }]
        },
        animation: {
          duration: 2000,
          easing: 'easeOutBounce'
        }
      }
    });
  }

  getChartData(data) {
    let recentGamesData = [];
    if(data){
      data.recentMatches.forEach(match => {
        return recentGamesData.push({ x: this.convertDate(match.dateCollected), y: match.kills});
      });
    }

    return recentGamesData;
  }

  convertDate(date) {
      date = new Date(date);
      var offset = new Date().getTimezoneOffset();
      var convertedDate = date.setMinutes(date.getMinutes() - offset);
      return convertedDate;
  }


  render() {
    return (
      <div>
        <canvas
          id='fortniteRecentGamesChart'
          ref={this.chartRef}
        />
      </div>
    );
  }
}