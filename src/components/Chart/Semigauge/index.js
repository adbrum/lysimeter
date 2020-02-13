import React, { Component } from "react";
import Chart from "react-apexcharts";

class Semigauge extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [20],
      options: {
        chart: {
          type: "radialBar",
          offsetY: -20,
        },
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: "#e7e7e7",
              strokeWidth: "97%",
              margin: 5, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: 2,
                left: 0,
                color: "#999",
                opacity: 1,
                blur: 2,
              },
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                offsetY: -2,
                fontSize: "22px",
              },
            },
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "light",
            shadeIntensity: 0.4,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 53, 91],
          },
        },
        labels: ["Average Results"],
      },
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="col mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="radialBar"
              width="280"
            />
          </div>
          <div className="col mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="radialBar"
              width="280"
            />
          </div>
          <div className="col mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="radialBar"
              width="280"
            />
          </div>
          <div className="col mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="radialBar"
              width="280"
            />
          </div>
          <div className="col mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="radialBar"
              width="280"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Semigauge;
