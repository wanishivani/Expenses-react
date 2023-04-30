import ChartBar from "./ChartBar";
import "./Chart.css";
import React from "react";

const Chart = (props) => {
  const datapointsvalues = props.dataPoints.map(datapoint => datapoint.value);
  const totalMaximum = Math.max(...datapointsvalues);
  console.log(props.datapointvalue);

  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={totalMaximum}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
