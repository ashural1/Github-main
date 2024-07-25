import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

function PieChart({ data, categories }) {
  const [chartData, setChartData] = useState({
    series: [
      {
        data,
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderRadiusApplication: "end",
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories,
     
      },
    },
  });

  return (
    <div>
      <div>
        <div id="chart">
          <ReactApexChart
          series={chartData.series}
            options={chartData.options}
            
            type="bar"
            height={350}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    </div>
  );
}

export default PieChart;
