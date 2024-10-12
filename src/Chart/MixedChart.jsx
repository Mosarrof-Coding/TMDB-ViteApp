import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  Title,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";

// Register components
ChartJS.register(
  Tooltip,
  Legend,
  Title,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale
);

export default function MixedChart() {
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        type: "line",
        label: "Line Dataset",
        data: [65, 59, 80, 81, 56],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
      {
        type: "bar",
        label: "Bar Dataset",
        data: [55, 30, 70, 60, 90],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
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
          text: "Months",
        },
      },
      y: {
        title: {
          display: true,
          text: "Values",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
      <Bar data={data} options={options} />
    </div>
  );
}
