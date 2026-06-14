const EVENTS = [
  {
    time: "7:30 AM",
    emoji: "👧",
    title: "Drop off at Daycare",
    desc: "Send our little princess to daycare - kisses and hugs!",
    color: "#F5A623",
  },
  {
    time: "8:00 AM",
    emoji: "☕",
    title: "Breakfast",
    desc: "Kick off the birthday morning with a cosy breakfast together.",
    color: "#5BAAD4",
  },
  {
    time: "9:00 AM",
    emoji: "🏦",
    title: "Bank Account Opening",
    desc: "Quick errand - get that sorted so the rest of the day is free!",
    color: "#E05A4B",
  },
  {
    time: "10:00 AM",
    emoji: "🎁",
    title: "Birthday Present Shopping",
    desc: "Time to pick out that special gift!",
    color: "#F5C842",
  },
  {
    time: "11:30 AM",
    emoji: "📸",
    title: "Photo Session",
    desc: "Strike a pose! Capture the birthday memories.",
    color: "#F5A623",
  },
  {
    time: "12:00 PM",
    emoji: "🍜",
    title: "Lunch",
    desc: "Birthday lunch - the highlight of the afternoon!",
    color: "#E05A4B",
  },
  {
    time: "2:00 PM",
    emoji: "🍰",
    title: "Dessert",
    desc: "Something sweet for my sweet husband!",
    color: "#F5C842",
  },
  {
    time: "3:00 PM",
    emoji: "🎉",
    title: "Fun Time",
    desc: "Let's have some fun together!",
    color: "#5BAAD4",
  },
  {
    time: "7:00 PM",
    emoji: "🍽️",
    title: "Home-Cooked Dinner",
    desc: "A special dinner made with love, just for you.",
    color: "#F5A623",
  },
];

const TIMELINE_BOKEH = [
  { size: 100, left: "2%", top: "20%", opacity: 0.1 },
  { size: 70, right: "4%", top: "60%", opacity: 0.09 },
  { size: 55, left: "18%", top: "80%", opacity: 0.08 },
];

export default function TimelineSection() {
  return (
    <section
      id="timeline"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #2e4060 0%, #3a5070 50%, #2e4060 100%)",
        padding: "5rem 1.5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {TIMELINE_BOKEH.map((bokeh, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            width: bokeh.size,
            height: bokeh.size,
            borderRadius: "50%",
            background: "rgba(150,185,215,1)",
            opacity: bokeh.opacity,
            left: bokeh.left,
            right: bokeh.right,
            top: bokeh.top,
            pointerEvents: "none",
            filter: "blur(2px)",
          }}
        />
      ))}

      <svg
        style={{
          position: "absolute",
          top: "4%",
          right: "3%",
          width: 70,
          opacity: 0.45,
          pointerEvents: "none",
        }}
        viewBox="0 0 80 80"
      >
        {[0, 45, 90, 135].map((angle, index) => (
          <line
            key={index}
            x1="40"
            y1="40"
            x2={40 + Math.cos((angle * Math.PI) / 180) * 26}
            y2={40 + Math.sin((angle * Math.PI) / 180) * 26}
            stroke="#F5C842"
            strokeWidth="2"
            strokeLinecap="round"
          />
        ))}
        <polygon
          points="40,20 43,33 57,33 46,41 50,54 40,46 30,54 34,41 23,33 37,33"
          fill="#F5C842"
          opacity="0.85"
        />
      </svg>

      <div style={{ maxWidth: 580, width: "100%", position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p
            style={{
              fontSize: "0.85rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#F5C842",
              marginBottom: "0.75rem",
              fontWeight: "600",
            }}
          >
            the birthday itinerary
          </p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 5vw, 3rem)",
              fontFamily: "'Arial Black','Arial',sans-serif",
              fontWeight: 900,
              color: "white",
              lineHeight: 1.2,
              textShadow: "2px 2px 0 rgba(0,0,0,0.3)",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
            }}
          >
            Today&apos;s Plan 🗓️
          </h2>
        </div>

        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: "72px",
              top: 0,
              bottom: 0,
              width: "2px",
              background: "linear-gradient(180deg, rgba(245,200,66,0.6), rgba(245,200,66,0.1))",
              borderRadius: "2px",
            }}
          />

          {EVENTS.map((event, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
                marginBottom: index < EVENTS.length - 1 ? "1.5rem" : 0,
                animation: `fadeIn 0.5s ease ${index * 0.07}s both`,
              }}
            >
              <div style={{ width: "64px", flexShrink: 0, textAlign: "right", paddingTop: "14px" }}>
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: "700",
                    color: "#F5C842",
                    letterSpacing: "0.03em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {event.time}
                </span>
              </div>

              <div style={{ position: "relative", zIndex: 1, flexShrink: 0, marginTop: "10px" }}>
                <div
                  style={{
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    background: event.color,
                    border: "3px solid rgba(255,255,255,0.2)",
                    boxShadow: `0 0 10px ${event.color}88`,
                  }}
                />
              </div>

              <div
                style={{
                  flex: 1,
                  background: "rgba(30,45,65,0.75)",
                  borderRadius: "14px",
                  padding: "0.9rem 1.1rem",
                  border: `1px solid ${event.color}44`,
                  backdropFilter: "blur(4px)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(mouseEvent) => {
                  mouseEvent.currentTarget.style.transform = "translateX(4px)";
                  mouseEvent.currentTarget.style.boxShadow = `0 4px 20px ${event.color}33`;
                }}
                onMouseLeave={(mouseEvent) => {
                  mouseEvent.currentTarget.style.transform = "translateX(0)";
                  mouseEvent.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.3rem" }}>
                  <span style={{ fontSize: "1.1rem" }}>{event.emoji}</span>
                  <span style={{ fontWeight: "700", fontSize: "0.95rem", color: "white" }}>{event.title}</span>
                </div>
                <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.5, margin: 0 }}>
                  {event.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "3rem",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            gap: "0.5rem",
            color: "rgba(255,255,255,0.5)",
            fontSize: "0.85rem",
            letterSpacing: "0.1em",
            animation: "bounce 2s ease-in-out infinite",
            cursor: "pointer",
          }}
          onClick={() => document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" })}
        >
          pick your choices below ↓
        </div>
      </div>
    </section>
  );
}
