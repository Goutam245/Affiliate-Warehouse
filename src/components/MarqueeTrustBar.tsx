const items = [
  "⚡ Electrical Contractors",
  "❄️ HVAC Businesses",
  "☀️ Solar Installers",
  "TradeZone Partner",
  "Ideal Electrical",
  "Voltex",
  "No Lock-ins",
  "1.1% Fee Only",
  "100% Transparent",
];

const MarqueeTrustBar = () => {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="bg-card py-4 overflow-hidden border-y border-border">
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((item, i) => (
          <span
            key={i}
            className={`mx-8 text-sm font-medium ${
              i % 2 === 0 ? "text-primary" : "text-text-secondary"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeTrustBar;
