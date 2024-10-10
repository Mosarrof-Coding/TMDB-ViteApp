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

const MarginalValueGraph = () => {
  // Sample data for the graph
  const days = ["d1", "d2", "d3", "d4", "d5", "d6", "d7"];
  const marginalValues = [150, 200, 180, 220, 300, 250, 400];

  // Data for the chart
  const data = {
    labels: days,
    datasets: [
      {
        label: "Popularity",
        data: marginalValues,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        fill: true,
        pointRadius: 3,
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `Popularity: ${context.raw}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: Math.max(...marginalValues) + 100,
      },
    },
  };

  return (
    <div>
      {/* <h2>7 Days popularity Trend</h2> */}
      <Line data={data} options={options} />
    </div>
  );
};

export default MarginalValueGraph;
