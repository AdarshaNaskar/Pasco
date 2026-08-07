import React from "react";

export default function EmbroideryMandala({
  className = "",
  size = 500,
  showBadge = false,
  badgeText = "£5",
}) {
  // Generate 16 main petals for center lotus
  const mainPetals = Array.from({ length: 16 }, (_, i) => {
    const angle = (i * 360) / 16;
    return angle;
  });

  // Generate 24 scalloped arches for inner ring
  const innerScallops = Array.from({ length: 24 }, (_, i) => {
    const angle = (i * 360) / 24;
    return angle;
  });

  // Generate 32 scalloped arches for outer ring
  const outerScallops = Array.from({ length: 32 }, (_, i) => {
    const angle = (i * 360) / 32;
    return angle;
  });

  // Generate 24 outer floral sprigs (alternating 12 large foliage stems & 12 beaded stems)
  const radiatingSprigs = Array.from({ length: 24 }, (_, i) => {
    const angle = (i * 360) / 24;
    const isLarge = i % 2 === 0;
    return { angle, isLarge };
  });

  return (
    <div className={`relative inline-block ${className}`} style={{ width: size, height: size }}>
      <div className="w-full h-full relative">
        <svg
          viewBox="0 0 600 600"
          className="w-full h-full drop-shadow-[0_10px_25px_rgba(180,130,60,0.15)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gold Thread Metallic Gradient */}
            <linearGradient id="goldThread" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D8AD6A" />
              <stop offset="35%" stopColor="#C49348" />
              <stop offset="70%" stopColor="#DFBA7D" />
              <stop offset="100%" stopColor="#AA7832" />
            </linearGradient>

            <linearGradient id="goldGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E5C388" />
              <stop offset="100%" stopColor="#B8873C" />
            </linearGradient>

            {/* Subtle embroidery stitch pattern filter */}
            <filter id="embroideryShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#704A15" floodOpacity="0.18" />
            </filter>
          </defs>

          {/* BACKGROUND SOFT SUNBURST GLOW */}
          <circle cx="300" cy="300" r="240" fill="#FAF6EE" opacity="0.6" />
          <circle cx="300" cy="300" r="220" fill="#F7EFE1" opacity="0.4" />

          {/* MAIN EMBROIDERED MANDALA CONTAINER */}
          <g stroke="url(#goldThread)" filter="url(#embroideryShadow)" strokeLinecap="round" strokeLinejoin="round">
            
            {/* === 1. INNERMOST CORE === */}
            <circle cx="300" cy="300" r="14" fill="#C49348" fillOpacity="0.25" strokeWidth="2.5" />
            <circle cx="300" cy="300" r="22" strokeWidth="2" strokeDasharray="4 3" />
            <circle cx="300" cy="300" r="30" strokeWidth="2.5" />
            <circle cx="300" cy="300" r="36" strokeWidth="1.5" />

            {/* === 2. CENTER LOTUS PETALS (16 Petals) === */}
            {mainPetals.map((angle, i) => (
              <g key={`petal-${i}`} transform={`rotate(${angle} 300 300)`}>
                {/* Outer Petal Contour */}
                <path
                  d="M 300 264 C 285 240, 282 205, 300 188 C 318 205, 315 240, 300 264 Z"
                  strokeWidth="2.2"
                  fill="#F5EA9B"
                  fillOpacity="0.08"
                />
                {/* Inner Petal Rib */}
                <path d="M 300 264 L 300 196" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.85" />
                {/* Petal Inner Teardrop Accent */}
                <circle cx="300" cy="215" r="3" fill="url(#goldThread)" stroke="none" />
              </g>
            ))}

            {/* === 3. MID CONCENTRIC RINGS & LACE SCALLOPS === */}
            <circle cx="300" cy="300" r="114" strokeWidth="3" />
            <circle cx="300" cy="300" r="120" strokeWidth="1.8" />
            <circle cx="300" cy="300" r="126" strokeWidth="2.5" />

            {/* Inner Ring Scallops (24 Arch Loops) */}
            {innerScallops.map((angle, i) => (
              <g key={`inner-scallop-${i}`} transform={`rotate(${angle} 300 300)`}>
                {/* Arch loop */}
                <path
                  d="M 284 174 A 16 16 0 0 1 316 174"
                  strokeWidth="2.2"
                  fill="none"
                />
                {/* Inner Arch Accent Dot */}
                <circle cx="300" cy="166" r="2.5" fill="url(#goldThread)" stroke="none" />
              </g>
            ))}

            <circle cx="300" cy="300" r="144" strokeWidth="2.5" />
            <circle cx="300" cy="300" r="152" strokeWidth="3.5" />
            <circle cx="300" cy="300" r="158" strokeWidth="1.8" />

            {/* === 4. SECONDARY SCALLOPED ARCHES WITH DOTS (32 Scallops) === */}
            {outerScallops.map((angle, i) => (
              <g key={`outer-scallop-${i}`} transform={`rotate(${angle} 300 300)`}>
                <path
                  d="M 288 142 A 12 12 0 0 1 312 142"
                  strokeWidth="2.2"
                  fill="none"
                />
                {/* Inner Teardrop/Dot in Arch */}
                <circle cx="300" cy="135" r="2" fill="url(#goldThread)" stroke="none" />
              </g>
            ))}

            <circle cx="300" cy="300" r="172" strokeWidth="2.8" />
            <circle cx="300" cy="300" r="182" strokeWidth="4" />
            <circle cx="300" cy="300" r="190" strokeWidth="2" strokeDasharray="6 4" />

            {/* === 5. OUTERMOST CROWN ARCHES (24 Crown Loops) === */}
            {radiatingSprigs.map(({ angle }, i) => (
              <g key={`crown-arch-${i}`} transform={`rotate(${angle} 300 300)`}>
                <path
                  d="M 282 110 A 18 18 0 0 1 318 110"
                  strokeWidth="2.5"
                  fill="none"
                />
                <circle cx="300" cy="101" r="3" fill="#C49348" strokeWidth="1" />
              </g>
            ))}

            <circle cx="300" cy="300" r="200" strokeWidth="3" />

            {/* === 6. RADIATING FLORAL BOTANICAL SPRIGS (Foliage & Buds) === */}
            {radiatingSprigs.map(({ angle, isLarge }, i) => (
              <g key={`sprig-${i}`} transform={`rotate(${angle} 300 300)`}>
                {isLarge ? (
                  /* Large Floral Sprig (Stem + 3-Leaf Bud Cluster + Dots) */
                  <g>
                    {/* Main vertical Stem */}
                    <path d="M 300 100 L 300 48" strokeWidth="2.5" />
                    
                    {/* Left Floral Branch & Leaf */}
                    <path d="M 300 78 C 288 74, 280 62, 282 52" strokeWidth="2" />
                    <circle cx="282" cy="50" r="3.5" fill="url(#goldThread)" stroke="none" />

                    {/* Right Floral Branch & Leaf */}
                    <path d="M 300 78 C 312 74, 320 62, 318 52" strokeWidth="2" />
                    <circle cx="318" cy="50" r="3.5" fill="url(#goldThread)" stroke="none" />

                    {/* Center Top Bud Cluster (3 Beads) */}
                    <path d="M 300 48 L 300 38" strokeWidth="2" />
                    <circle cx="300" cy="35" r="4.5" fill="url(#goldThread)" stroke="#8F6220" strokeWidth="1" />
                    <circle cx="292" cy="42" r="3" fill="url(#goldThread)" stroke="none" />
                    <circle cx="308" cy="42" r="3" fill="url(#goldThread)" stroke="none" />
                  </g>
                ) : (
                  /* Smaller Interleaved Bead Stem */
                  <g>
                    <path d="M 300 100 L 300 62" strokeWidth="2" strokeDasharray="5 3" />
                    <path d="M 300 62 L 300 55" strokeWidth="2" />
                    <circle cx="300" cy="50" r="4" fill="url(#goldThread)" stroke="#A0732A" strokeWidth="1" />
                  </g>
                )}
              </g>
            ))}

            {/* Outer Decorative Stitched Beads Ring */}
            {Array.from({ length: 48 }).map((_, i) => {
              const ang = (i * 360) / 48;
              const rad = 282;
              const x = 300 + rad * Math.cos((ang * Math.PI) / 180);
              const y = 300 + rad * Math.sin((ang * Math.PI) / 180);
              return <circle key={`dot-${i}`} cx={x} cy={y} r="2" fill="url(#goldThread)" stroke="none" opacity="0.85" />;
            })}
          </g>
        </svg>
      </div>

      {/* OVERLAY PRICE / OFFER BADGE (matching the exact £5 badge in reference photo) */}
      {showBadge && (
        <motion.div
          className="absolute top-[12%] right-[10%] z-20"
          initial={{ scale: 0, rotate: -15 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.3 }}
        >
          <div className="relative group cursor-pointer">
            {/* Soft outer glow */}
            <div className="absolute -inset-1 rounded-full bg-[#A87938]/40 blur-md group-hover:bg-[#A87938]/60 transition-all duration-300" />
            
            {/* Circular Price Tag Badge */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#B88744] via-[#A27334] to-[#865B20] text-white shadow-xl flex items-center justify-center border-2 border-[#E9C88F]/60 transform group-hover:scale-105 transition-transform duration-300">
              <span className="font-serif font-bold text-2xl sm:text-3xl tracking-tight text-[#FAF4EA] drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                {badgeText}
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
