import { Bubble } from "react-chartjs-2";
import {
  Chart,
  BubbleController,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register components
Chart.register(BubbleController, LinearScale, PointElement, Tooltip, Legend);

export default function BubbleChart() {
  const data = {
    datasets: [
      {
        label: "Dataset 1",
        data: [
          { x: 10, y: 10, r: 15 },
          { x: 15, y: 5, r: 10 },
          { x: 25, y: 8, r: 20 },
        ],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
      {
        label: "Dataset 2",
        data: [
          { x: 20, y: 20, r: 5 },
          { x: 25, y: 15, r: 15 },
          { x: 30, y: 10, r: 10 },
        ],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
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

  return <Bubble data={data} options={options} />;
}
