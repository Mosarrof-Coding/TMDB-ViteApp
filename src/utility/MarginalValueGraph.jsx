/* eslint-disable react/prop-types */
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";

// Register required components
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

const MarginalValueGraph = ({ days, popularity }) => {
  const data = {
    labels: days,
    datasets: [
      {
        label: "Popularity",
        data: popularity,
        borderColor: "rgba(75, 192, 192, 1)", // Line color
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Point fill color
        borderWidth: 1, // Line width
        fill: false, // Disable filling under the line
        pointRadius: 3, // Point size
        pointBackgroundColor: "rgba(75, 192, 192, 1)", // Point color
        pointHoverRadius: 7, // Hovered point size
        tension: 0.1, // Curved line effect
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: true, // Keep tooltips
        callbacks: {
          label: function (context) {
            return `Popularity: ${context.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        display: false, // Hide the X axis
        grid: {
          display: true, // Disable gridlines on X axis
        },
      },
      y: {
        display: false, // Hide the Y axis
        grid: {
          display: false, // Disable gridlines on Y axis
        },
        beginAtZero: true,
        max: popularity.length ? Math.max(...popularity) + 50 : 100, // Dynamic Y-axis max
      },
    },
    elements: {
      point: {
        radius: 5, // Adjust point radius
      },
      line: {
        tension: 0.01, // Smooth curve for the line
      },
    },
  };

  return (
    <div className="w-60 max-h-[100px]">
      <Line data={data} options={options} />
    </div>
  );
};

export default MarginalValueGraph;
