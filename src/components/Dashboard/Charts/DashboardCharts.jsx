import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import CustomTooltip from "./CustomTooltip";

const COLORS = ["#00C49F", "#FF8042"];
const MAIN_COLORS = ["#FF74A1", "#F098FF", "#9DD1FB"];

const DashboardCharts = ({ chartsData }) => {
  const mainStats = [
    { name: "Total Users", value: chartsData.users },
    { name: "Total Members", value: chartsData.members },
    { name: "Total Apartments", value: chartsData.apartments },
  ];

  const percentageStats = [
    { name: "Available Apartments %", value: chartsData.availablePercentage },
    { name: "Agreement Apartments %", value: chartsData.agreementPercentage },
  ];

  return (
    <div className="grid lg:grid-cols-3 gap-6 w-full">
      {/* Bar Chart Card */}
      <div className="lg:col-span-2 bg-white shadow-md rounded-lg p-4 h-[400px] flex flex-col">
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
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar dataKey="value" radius={[5, 5, 0, 0]}>
                {mainStats.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={MAIN_COLORS[index]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* Pie Chart Card */}
      <div className="lg:col-span-1 bg-white shadow-md rounded-lg p-4 h-[400px] flex flex-col">
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
              <Tooltip content={<CustomTooltip />} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardCharts;
