import { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [maxHeight, setMaxHeight] = useState(100);
  const [hoveredBarIndex, setHoveredBarIndex] = useState(null);

  // Demo data for 30 days (random popularity values)
  const demoData = [
    75, 50, 60, 80, 90, 55, 65, 85, 40, 70, 30, 95, 60, 45, 100, 35, 55, 65, 85,
    40, 60, 50, 70, 90, 80, 65, 55, 75, 40, 95,
  ];

  // Chart data
  const chartData = {
    labels: Array.from({ length: 30 }, (_, i) => `${i + 1}`), // Labels for 30 days
    datasets: [
      {
        label: "Popularity",
        data: demoData, // Demo data for each day
        backgroundColor: demoData.map((_, index) =>
          index === hoveredBarIndex
            ? "rgba(54, 162, 235, 1)"
            : "rgba(54, 162, 235, 0.5)"
        ),
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 0,
      },
    ],
  };

  // Complete chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow the chart to expand vertically
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      title: {
        display: false, // Hide the title
        text: "30-Day Popularity Progress",
      },
      tooltip: {
        enabled: true, // Enable tooltips
        mode: "index", // Show tooltips for all bars at the index
        intersect: true, // Tooltip will show when hovering over the chart area
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Start the Y-axis at zero
        max: maxHeight, // Set max height from state
        ticks: {
          stepSize: 10, // Set the step size for ticks on the Y-axis
        },
      },
      x: {
        stacked: true, // Enable stacking of bars on the x-axis
        categoryPercentage: 0.8, // Controls the width of the category
        barPercentage: 0.8, // Controls the width of the bars
        ticks: {
          autoSkip: false, // Disable auto skipping of labels
        },
      },
    },
    elements: {
      bar: {
        maxBarThickness: 100, // Set maximum bar thickness
        barThickness: "60%", // Percentage-based bar thickness
      },
    },
    animation: {
      duration: 500, // Duration of animations
      easing: "easeOutBounce", // Easing function for animations
    },
    onHover: (event, elements) => {
      if (elements.length > 0) {
        const index = elements[0].index; // Get the index of the hovered bar
        setHoveredBarIndex(index); // Update the state with the hovered index
      } else {
        setHoveredBarIndex(null); // Reset if not hovering over any bar
      }
    },
  };

  return (
    <div className="w-full max-h-[180px] sm:max-h-[280px] lg:max-h-[400px] bg-white flex flex-col my-2 lg:my-6">
      <Bar data={chartData} options={options} />
      <div className="flex items-center justify-between mt-4 opacity-0 invisible">
        <label htmlFor="maxHeight" className="text-sm">
          Max Height: {maxHeight}
        </label>
        <input
          id="maxHeight"
          type="range"
          min="50"
          max="200"
          value={maxHeight}
          onChange={(e) => setMaxHeight(e.target.value)}
          className="w-full bg-blue-200 rounded-lg appearance-none"
        />
      </div>
    </div>
  );
};

export default BarChart;
