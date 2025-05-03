import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const mainStats = [
  { name: "Users", value: 9 },
  { name: "Members", value: 13 },
  { name: "Total Apartments", value: 36 },
  { name: "Available Apartments", value: 23 },
  { name: "Agreement Apartments", value: 13 },
];

import { Cell, Pie, PieChart } from "recharts";

const percentageStats = [
  { name: "Available %", value: 64 },
  { name: "Agreement %", value: 36 },
];

// Custom colors for the two sections
const COLORS = ["#00C49F", "#FF8042"];

const DashboardCharts = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 w-full">
      {/* Bar Chart Card */}
      <div className="bg-white shadow-md rounded-2xl p-4 h-[400px] flex flex-col">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">
          Main Stats Overview
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Monthly data distribution in bar format
        </p>
        <div className="flex-grow">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mainStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Pie Chart Card */}
      <div className="bg-white shadow-md rounded-2xl p-4 h-[400px] flex flex-col">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">
          Percentage Breakdown
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Comparison of available vs agreement percentages
        </p>
        <div className="flex-grow">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={percentageStats}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                label
              >
                {percentageStats.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardCharts;
