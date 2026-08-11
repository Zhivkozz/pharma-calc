import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function DissolutionPlot({ timePoints, referenceUnits, testUnits }) {
  if (!timePoints || timePoints.length === 0) {
    return null;
  }

  // Extract single sets of values (treating input as mean values)
  const referenceValues = referenceUnits[0] || [];
  const testValues = testUnits[0] || [];

  const data = {
    labels: timePoints.map(t => t + ' min'),
    datasets: [
      {
        label: 'Reference Product',
        data: referenceValues,
        borderColor: '#667eea',
        backgroundColor: 'rgba(102, 126, 234, 0.15)',
        borderWidth: 2.5,
        fill: true,
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: '#667eea',
        pointBorderColor: 'white',
        pointBorderWidth: 2,
      },
      {
        label: 'Test Product',
        data: testValues,
        borderColor: '#764ba2',
        backgroundColor: 'rgba(118, 75, 162, 0.15)',
        borderWidth: 2.5,
        fill: true,
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: '#764ba2',
        pointBorderColor: 'white',
        pointBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: { size: 13, weight: '500' },
          padding: 15,
          usePointStyle: true,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          font: { size: 12 },
          callback: function (value) {
            return value + '%';
          },
        },
        title: {
          display: true,
          text: 'Dissolution (%)',
          font: { size: 13, weight: '600' },
        },
      },
      x: {
        ticks: {
          font: { size: 12 },
        },
        title: {
          display: true,
          text: 'Time (minutes)',
          font: { size: 13, weight: '600' },
        },
      },
    },
  };

  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-700 mb-4">
        Dissolution Curves
      </h3>
      <div className="bg-white border-2 border-gray-300 rounded-lg p-5" style={{ height: '400px' }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
