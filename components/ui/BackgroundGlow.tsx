"use client";

export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top right cyan light orb */}
      <div 
        className="absolute -top-40 -right-40 w-96 h-96 sm:w-[500px] sm:h-[500px] rounded-full bg-cyan-500/10 blur-[120px] animate-pulse-slow"
      />

      {/* Top left indigo light orb */}
      <div 
        className="absolute top-1/4 -left-40 w-96 h-96 sm:w-[600px] sm:h-[600px] rounded-full bg-indigo-600/10 blur-[140px] animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />

      {/* Middle right purple light orb */}
      <div 
        className="absolute top-2/3 -right-32 w-80 h-80 sm:w-[500px] sm:h-[500px] rounded-full bg-purple-600/10 blur-[130px] animate-pulse-slow"
        style={{ animationDelay: "4s" }}
      />

      {/* Bottom left cyan accent */}
      <div 
        className="absolute -bottom-40 left-1/3 w-96 h-96 sm:w-[550px] sm:h-[550px] rounded-full bg-cyan-600/10 blur-[150px]"
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-60" />
    </div>
  );
}
