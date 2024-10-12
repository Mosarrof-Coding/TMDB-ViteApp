import { Bar } from "react-chartjs-2";
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// Register components
Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function FunnelChart() {
  const data = {
    labels: ["Leads", "Prospects", "Opportunities", "Sales"],
    datasets: [
      {
        label: "Funnel",
        data: [100, 80, 60, 40],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
      },
    ],
  };

  const options = {
    indexAxis: "y",
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
  };

  return <Bar data={data} options={options} />;
}
