import {
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const mainStats = [
  { name: "Users", value: 9 },
  { name: "Members", value: 13 },
  { name: "Total Apartments", value: 36 },
  { name: "Available Apartments", value: 23 },
  { name: "Agreement Apartments", value: 13 },
];

const percentageStats = [
  { name: "Available %", value: 64 },
  { name: "Agreement %", value: 36 },
];

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

      {/* Area Chart */}
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={percentageStats}>
          <defs>
            <linearGradient id="colorPercent" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00C49F" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#00C49F" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#00C49F"
            fillOpacity={1}
            fill="url(#colorPercent)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardCharts;
