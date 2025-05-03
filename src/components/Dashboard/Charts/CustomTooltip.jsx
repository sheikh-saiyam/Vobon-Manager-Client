const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-md rounded-lg px-4 py-2 text-sm">
        <p className="text-muted-foreground font-medium">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm text-zinc-800 dark:text-zinc-200">
            {entry.name}: <span className="font-semibold">{entry.value}</span>
          </p>
        ))}
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
