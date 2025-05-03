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
    <div className="grid md:grid-cols-2 gap-8 w-full h-[400px]">
      {/* Bar Chart */}
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

      {/* Pie Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={percentageStats}
            cx="50%"
            cy="50%"
            innerRadius={60} // Makes it a donut
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
  );
};

export default DashboardCharts;
