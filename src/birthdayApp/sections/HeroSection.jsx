const HERO_STRIPES = [10, 20, 40, 45, 68, 75];

const HERO_BOKEH = [
  { size: 180, left: "5%", top: "55%", opacity: 0.18 },
  { size: 130, left: "15%", top: "62%", opacity: 0.13 },
  { size: 100, left: "22%", top: "50%", opacity: 0.1 },
  { size: 90, right: "8%", top: "10%", opacity: 0.15 },
  { size: 60, right: "18%", top: "5%", opacity: 0.1 },
  { size: 70, left: "40%", top: "5%", opacity: 0.12 },
  { size: 50, right: "30%", top: "15%", opacity: 0.08 },
];

function scrollToSection(sectionId) {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
}

export default function HeroSection() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #4a6080 0%, #5a7090 30%, #4a6080 60%, #3a5070 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "2rem",
      }}
    >
      {HERO_STRIPES.map((top, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: `${top}%`,
            height: "18%",
            background: "rgba(40,55,75,0.35)",
            pointerEvents: "none",
          }}
        />
      ))}

      {HERO_BOKEH.map((circle, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            width: circle.size,
            height: circle.size,
            borderRadius: "50%",
            background: "rgba(150,185,215,1)",
            opacity: circle.opacity,
            left: circle.left,
            right: circle.right,
            top: circle.top,
            pointerEvents: "none",
            filter: "blur(2px)",
          }}
        />
      ))}

      <svg
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "28%",
          minWidth: 160,
          pointerEvents: "none",
        }}
        viewBox="0 0 220 400"
        fill="none"
      >
        <ellipse cx="60" cy="310" rx="52" ry="62" fill="#F5A623" opacity="0.95" />
        <ellipse cx="50" cy="295" rx="18" ry="12" fill="rgba(255,255,255,0.25)" />
        <line x1="60" y1="372" x2="65" y2="400" stroke="#7a4a1a" strokeWidth="2" />
        <ellipse cx="130" cy="290" rx="44" ry="52" fill="#5BAAD4" opacity="0.9" />
        <ellipse cx="120" cy="277" rx="14" ry="9" fill="rgba(255,255,255,0.25)" />
        <line x1="130" y1="342" x2="128" y2="400" stroke="#7a4a1a" strokeWidth="2" />
        <ellipse cx="185" cy="320" rx="32" ry="38" fill="#E05A4B" opacity="0.9" />
        <ellipse cx="177" cy="309" rx="10" ry="7" fill="rgba(255,255,255,0.25)" />
        <line x1="185" y1="358" x2="183" y2="400" stroke="#7a4a1a" strokeWidth="2" />
        <ellipse cx="30" cy="130" rx="28" ry="34" fill="#F5A623" opacity="0.8" />
        <ellipse cx="22" cy="120" rx="9" ry="6" fill="rgba(255,255,255,0.2)" />
        <ellipse cx="80" cy="100" rx="24" ry="29" fill="#5BAAD4" opacity="0.75" />
        <ellipse cx="105" cy="115" rx="20" ry="24" fill="#E05A4B" opacity="0.75" />
        <path
          d="M55 164 Q45 180 55 196 Q65 212 55 228"
          stroke="#6a3a10"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>

      <svg
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          width: "26%",
          minWidth: 140,
          pointerEvents: "none",
        }}
        viewBox="0 0 200 400"
        fill="none"
      >
        <ellipse cx="140" cy="300" rx="48" ry="57" fill="#F5A623" opacity="0.95" />
        <ellipse cx="130" cy="287" rx="16" ry="10" fill="rgba(255,255,255,0.25)" />
        <line x1="140" y1="357" x2="135" y2="400" stroke="#7a4a1a" strokeWidth="2" />
        <ellipse cx="70" cy="320" rx="38" ry="45" fill="#5BAAD4" opacity="0.9" />
        <ellipse cx="60" cy="308" rx="12" ry="8" fill="rgba(255,255,255,0.25)" />
        <line x1="70" y1="365" x2="68" y2="400" stroke="#7a4a1a" strokeWidth="2" />
        <ellipse cx="30" cy="280" rx="26" ry="31" fill="#E05A4B" opacity="0.85" />
        <line x1="30" y1="311" x2="28" y2="400" stroke="#7a4a1a" strokeWidth="2" />
        <ellipse cx="170" cy="90" rx="26" ry="31" fill="#5BAAD4" opacity="0.75" />
        <ellipse cx="145" cy="80" rx="22" ry="26" fill="#F5A623" opacity="0.75" />
        <ellipse cx="120" cy="100" rx="18" ry="22" fill="#E05A4B" opacity="0.7" />
        <path
          d="M150 111 Q160 130 150 148 Q140 165 150 182"
          stroke="#6a3a10"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>

      <svg
        style={{
          position: "absolute",
          left: "2%",
          top: "5%",
          width: "22%",
          minWidth: 120,
          pointerEvents: "none",
        }}
        viewBox="0 0 180 320"
        fill="none"
      >
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
          <line
            key={index}
            x1="70"
            y1="130"
            x2={70 + Math.cos((angle * Math.PI) / 180) * 38}
            y2={130 + Math.sin((angle * Math.PI) / 180) * 38}
            stroke="#F5C842"
            strokeWidth={index % 2 === 0 ? 2.5 : 1.5}
            strokeLinecap="round"
          />
        ))}
        <polygon
          points="70,100 74,120 94,120 78,132 84,152 70,140 56,152 62,132 46,120 66,120"
          fill="#F5C842"
          opacity="0.9"
        />
        {[0, 60, 120, 180, 240, 300].map((angle, index) => (
          <line
            key={index}
            x1="130"
            y1="50"
            x2={130 + Math.cos((angle * Math.PI) / 180) * 22}
            y2={50 + Math.sin((angle * Math.PI) / 180) * 22}
            stroke="#F5C842"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        ))}
        <circle cx="130" cy="50" r="5" fill="#F5C842" />
        <line x1="40" y1="80" x2="40" y2="200" stroke="#8B6914" strokeWidth="3" />
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, index) => (
          <line
            key={index}
            x1="40"
            y1="90"
            x2={40 + Math.cos((angle * Math.PI) / 180) * 18}
            y2={90 + Math.sin((angle * Math.PI) / 180) * 18}
            stroke="#F5C842"
            strokeWidth="1"
            opacity="0.8"
          />
        ))}
        {[
          [150, 200],
          [30, 260],
          [160, 290],
          [90, 30],
        ].map(([x, y], index) => (
          <polygon
            key={index}
            points={`${x},${y - 8} ${x + 2},${y - 3} ${x + 8},${y - 3} ${x + 3},${y + 1} ${x + 5},${y + 7} ${x},${y + 3} ${x - 5},${y + 7} ${x - 3},${y + 1} ${x - 8},${y - 3} ${x - 2},${y - 3}`}
            fill="#F5C842"
            opacity="0.85"
          />
        ))}
      </svg>

      <svg
        style={{
          position: "absolute",
          right: "2%",
          top: "5%",
          width: "22%",
          minWidth: 120,
          pointerEvents: "none",
        }}
        viewBox="0 0 180 320"
        fill="none"
      >
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
          <line
            key={index}
            x1="110"
            y1="120"
            x2={110 + Math.cos((angle * Math.PI) / 180) * 36}
            y2={120 + Math.sin((angle * Math.PI) / 180) * 36}
            stroke="#F5C842"
            strokeWidth={index % 2 === 0 ? 2.5 : 1.5}
            strokeLinecap="round"
          />
        ))}
        <polygon
          points="110,93 114,113 134,113 118,125 124,145 110,133 96,145 102,125 86,113 106,113"
          fill="#F5C842"
          opacity="0.9"
        />
        {[0, 60, 120, 180, 240, 300].map((angle, index) => (
          <line
            key={index}
            x1="45"
            y1="55"
            x2={45 + Math.cos((angle * Math.PI) / 180) * 20}
            y2={55 + Math.sin((angle * Math.PI) / 180) * 20}
            stroke="#F5C842"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        ))}
        <circle cx="45" cy="55" r="5" fill="#F5C842" />
        <line x1="145" y1="70" x2="145" y2="200" stroke="#8B6914" strokeWidth="3" />
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, index) => (
          <line
            key={index}
            x1="145"
            y1="80"
            x2={145 + Math.cos((angle * Math.PI) / 180) * 18}
            y2={80 + Math.sin((angle * Math.PI) / 180) * 18}
            stroke="#F5C842"
            strokeWidth="1"
            opacity="0.8"
          />
        ))}
        {[
          [30, 200],
          [160, 260],
          [20, 290],
          [90, 30],
        ].map(([x, y], index) => (
          <polygon
            key={index}
            points={`${x},${y - 8} ${x + 2},${y - 3} ${x + 8},${y - 3} ${x + 3},${y + 1} ${x + 5},${y + 7} ${x},${y + 3} ${x - 5},${y + 7} ${x - 3},${y + 1} ${x - 8},${y - 3} ${x - 2},${y - 3}`}
            fill="#F5C842"
            opacity="0.85"
          />
        ))}
      </svg>

      <svg
        style={{
          position: "relative",
          zIndex: 3,
          width: "clamp(160px,38vw,280px)",
          marginBottom: "1.5rem",
          filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.35))",
          animation: "float 4s ease-in-out infinite",
        }}
        viewBox="0 0 240 260"
        fill="none"
      >
        <ellipse cx="120" cy="230" rx="90" ry="12" fill="#6a9abf" opacity="0.7" />
        <rect x="30" y="168" width="180" height="58" rx="6" fill="#e8c8b0" />
        <rect x="30" y="168" width="180" height="14" rx="4" fill="#c8896a" />
        <rect x="30" y="182" width="180" height="18" fill="#f4b8c8" />
        <rect x="30" y="200" width="180" height="18" fill="#f4b8c8" />
        <path
          d="M30,168 Q45,158 60,168 Q75,158 90,168 Q105,158 120,168 Q135,158 150,168 Q165,158 180,168 Q195,158 210,168 L210,168 L30,168Z"
          fill="#5a3010"
        />
        {[45, 75, 105, 135, 165, 195].map((x, index) => (
          <path
            key={index}
            d={`M${x},168 Q${x + 4},180 ${x + 2},186`}
            stroke="#5a3010"
            strokeWidth="6"
            strokeLinecap="round"
          />
        ))}
        <rect x="55" y="110" width="130" height="60" rx="5" fill="#e8c8b0" />
        <rect x="55" y="110" width="130" height="12" rx="4" fill="#c8896a" />
        <rect x="55" y="122" width="130" height="16" fill="#f4b8c8" />
        <rect x="55" y="138" width="130" height="16" fill="#f4b8c8" />
        <path
          d="M55,110 Q68,100 81,110 Q94,100 107,110 Q120,100 133,110 Q146,100 159,110 Q172,100 185,110 L185,110 L55,110Z"
          fill="#5a3010"
        />
        {[68, 95, 122, 149, 172].map((x, index) => (
          <path
            key={index}
            d={`M${x},110 Q${x + 3},120 ${x + 2},126`}
            stroke="#5a3010"
            strokeWidth="5"
            strokeLinecap="round"
          />
        ))}
        <rect x="80" y="62" width="80" height="50" rx="5" fill="#e8c8b0" />
        <rect x="80" y="62" width="80" height="10" rx="4" fill="#c8896a" />
        <rect x="80" y="72" width="80" height="14" fill="#f4b8c8" />
        <rect x="80" y="86" width="80" height="14" fill="#f4b8c8" />
        <path
          d="M80,62 Q90,53 100,62 Q110,53 120,62 Q130,53 140,62 Q150,53 160,62 L160,62 L80,62Z"
          fill="#5a3010"
        />
        {[88, 105, 122, 143].map((x, index) => (
          <path
            key={index}
            d={`M${x},62 Q${x + 2},70 ${x + 1},76`}
            stroke="#5a3010"
            strokeWidth="4"
            strokeLinecap="round"
          />
        ))}
        {[95, 110, 120, 130, 145].map((x, index) => (
          <g key={index}>
            <rect
              x={x - 4}
              y={22 + (index % 2) * 8}
              width="8"
              height="40"
              rx="3"
              fill={["#5BAAD4", "#F5A623", "#5BAAD4", "#F5A623", "#5BAAD4"][index]}
            />
            {[0, 1, 2, 3].map((stripe) => (
              <rect
                key={stripe}
                x={x - 4}
                y={22 + (index % 2) * 8 + stripe * 9}
                width="8"
                height="4"
                rx="1"
                fill="white"
                opacity="0.4"
              />
            ))}
            <ellipse cx={x} cy={18 + (index % 2) * 8} rx="4" ry="7" fill="#F5C842" opacity="0.9" />
            <ellipse cx={x} cy={20 + (index % 2) * 8} rx="2.5" ry="4" fill="#F5A623" />
          </g>
        ))}
      </svg>

      <div style={{ position: "relative", zIndex: 4, textAlign: "center" }}>
        <h1
          style={{
            fontSize: "clamp(2.8rem, 10vw, 6rem)",
            fontFamily: "'Arial Black', 'Arial', sans-serif",
            fontWeight: 900,
            color: "white",
            textTransform: "uppercase",
            lineHeight: 0.95,
            textShadow: "3px 3px 0 rgba(0,0,0,0.3), 0 0 40px rgba(255,255,255,0.1)",
            letterSpacing: "0.04em",
            margin: 0,
          }}
        >
          Happy
        </h1>
        <h1
          style={{
            fontSize: "clamp(3rem, 12vw, 7.5rem)",
            fontFamily: "'Arial Black', 'Arial', sans-serif",
            fontWeight: 900,
            color: "white",
            textTransform: "uppercase",
            lineHeight: 1,
            textShadow: "3px 3px 0 rgba(0,0,0,0.3), 0 0 40px rgba(255,255,255,0.1)",
            letterSpacing: "0.02em",
            margin: "0 0 1rem",
          }}
        >
          Birthday
        </h1>
        <p
          style={{
            fontSize: "clamp(1rem, 3vw, 1.4rem)",
            color: "rgba(255,255,255,0.8)",
            fontFamily: "'Georgia', serif",
            fontStyle: "italic",
            letterSpacing: "0.1em",
            marginBottom: "2rem",
          }}
        >
          ✦ suamiku tercinta ✦
        </p>
        <div
          style={{
            color: "rgba(255,255,255,0.45)",
            fontSize: "0.85rem",
            letterSpacing: "0.1em",
            animation: "bounce 2s ease-in-out infinite",
            cursor: "pointer",
          }}
          onClick={() => scrollToSection("wishes")}
        >
          scroll down ↓
        </div>
      </div>
    </section>
  );
}
