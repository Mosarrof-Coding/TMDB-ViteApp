import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

// Define the Radar chart component
export default function RadarChart() {
  // Data for 7 days demo popularities
  const data = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Demo Popularities",
        data: [75, 82, 60, 90, 50, 70, 85],
        backgroundColor: "rgba(255, 99, 132, 0.2)", // Custom background color with transparency
        borderColor: "rgba(255, 99, 132, 1)", // Red border color
        borderWidth: 2, // Thickness of the border
        pointBackgroundColor: "rgba(255, 99, 132, 1)", // Color of the points
        pointBorderColor: "#fff", // Border color of the points
        pointHoverBackgroundColor: "#fff", // Hover color
        pointHoverBorderColor: "rgba(255, 99, 132, 1)", // Hover border color
      },
    ],
  };

  // Customization options for the chart
  const options = {
    scales: {
      r: {
        ticks: {
          beginAtZero: true,
          backdropColor: "transparent", // Make the backdrop of the ticks transparent
        },
        grid: {
          color: "#E5E7EB", // Grid lines color (Tailwind color for gray-200)
        },
        angleLines: {
          color: "#D1D5DB", // Lines radiating from the center (Tailwind color for gray-300)
        },
      },
    },
    plugins: {
      legend: {
        position: "top", // Positioning the legend at the top
        labels: {
          color: "#374151", // Legend label color (Tailwind color for gray-700)
        },
      },
    },
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md">
      <Radar data={data} options={options} />
    </div>
  );
}
