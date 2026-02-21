const GradientMeshBg = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Orange orb */}
      <div
        className="mesh-orb absolute w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(255,107,0,0.4) 0%, transparent 70%)",
          top: "-10%",
          right: "-5%",
        }}
      />
      {/* Cyan orb */}
      <div
        className="mesh-orb-delay absolute w-[500px] h-[500px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(0,212,255,0.3) 0%, transparent 70%)",
          bottom: "10%",
          left: "-10%",
        }}
      />
      {/* Amber orb */}
      <div
        className="mesh-orb-slow absolute w-[400px] h-[400px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, rgba(255,209,0,0.3) 0%, transparent 70%)",
          top: "40%",
          left: "50%",
        }}
      />
      {/* Particle dots */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="particle absolute w-1 h-1 rounded-full bg-primary/30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${4 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
};

export default GradientMeshBg;
