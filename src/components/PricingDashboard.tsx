const PricingDashboard = () => {
  const rows = [
    { product: "10mm Cable /m", last: "$4.20", current: "$3.87", change: "-7.8%", alert: true, down: true },
    { product: "LED Downlight", last: "$18.50", current: "$17.10", change: "-7.6%", alert: true, down: true },
    { product: "32A Breaker", last: "$24.00", current: "$24.00", change: "0%", alert: false, down: false },
    { product: "Solar Inv. 5kw", last: "$890", current: "$847", change: "-4.8%", alert: true, down: true },
  ];

  return (
    <div className="glass-card rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-orange px-6 py-3">
        <span className="font-heading font-bold text-foreground text-sm">Price Tracking Dashboard</span>
      </div>
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left px-4 py-3 text-text-secondary font-medium">Product</th>
              <th className="text-right px-4 py-3 text-text-secondary font-medium">Last Price</th>
              <th className="text-right px-4 py-3 text-text-secondary font-medium">Current</th>
              <th className="text-right px-4 py-3 text-text-secondary font-medium">Change</th>
              <th className="text-center px-4 py-3 text-text-secondary font-medium">Alert</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-border/50 hover:bg-surface-light/50 transition-colors">
                <td className="px-4 py-3 font-medium text-foreground">{row.product}</td>
                <td className="px-4 py-3 text-right text-text-secondary font-mono">{row.last}</td>
                <td className="px-4 py-3 text-right text-foreground font-mono font-bold">{row.current}</td>
                <td className={`px-4 py-3 text-right font-mono font-bold ${row.down ? "text-success" : "text-muted-foreground"}`}>
                  {row.down ? "▼" : "→"} {row.change}
                </td>
                <td className="px-4 py-3 text-center">
                  {row.alert ? (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs bg-primary/20 text-primary font-medium">
                      🔔 Active
                    </span>
                  ) : (
                    <span className="text-muted-foreground">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PricingDashboard;
