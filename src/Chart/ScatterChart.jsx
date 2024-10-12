import { Scatter } from "react-chartjs-2";
import {
  Chart,
  ScatterController,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register components
Chart.register(ScatterController, LinearScale, PointElement, Tooltip, Legend);

export default function ScatterChart() {
  const data = {
    datasets: [
      {
        label: "Scatter Dataset",
        data: [
          { x: -10, y: 0 },
          { x: 0, y: 10 },
          { x: 10, y: 5 },
        ],
        backgroundColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "X Axis",
        },
      },
      y: {
        title: {
          display: true,
          text: "Y Axis",
        },
      },
    },
  };
  <div className="w-64">
    <Scatter data={data} options={options} />
  </div>;
}
