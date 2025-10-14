import React from "react";

export default function PageIllustration() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Static Grid SVG */}
      <svg
        className="absolute inset-0 h-full w-full -z-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
            x="0"
            y="0"
          >
            <path
              d="M0 80V0H80"
              fill="none"
              stroke="rgba(203,213,225,0.3)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Animated Lines */}
      <div className="absolute inset-0 z-10">
        <style>
          {`
            @keyframes moveLineY {
              0% { transform: translateY(-80px); opacity: 0; }
              10%, 90% { opacity: 1; }
              100% { transform: translateY(calc(100vh + 80px)); opacity: 0; }
            }

            @keyframes moveLineX {
              0% { transform: translateX(-80px); opacity: 0; }
              10%, 90% { opacity: 1; }
              100% { transform: translateX(calc(100vw + 80px)); opacity: 0; }
            }

            .animate-line-y {
              animation: moveLineY 6s linear infinite;
            }
            .animate-line-x {
              animation: moveLineX 6s linear infinite;
            }
          `}
        </style>

        {/* Vertical Blue Lines */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute top-0 w-[1px] h-48 bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0 animate-line-y "
            style={{
              left: `${i * 80}px`,
              animationDelay: `${i * -0.7}s`,
            }}
          />
        ))}

        {/* Horizontal Blue Lines */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute left-0 h-[1px] w-48 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 animate-line-x"
            style={{
              top: `${i * 80}px`,
              animationDelay: `${i * -1}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
