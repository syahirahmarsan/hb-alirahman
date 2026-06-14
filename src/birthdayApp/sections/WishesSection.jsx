import familyImage from "../../assets/family.jpg";
import foreverImage from "../../assets/forever.jpg";
import princessImage from "../../assets/princess.jpg";
import usImage from "../../assets/us.jpg";

const PHOTO_SLOTS = [
  { image: usImage, label: "Us, always" },
  { image: familyImage, label: "Our little family" },
  { image: princessImage, label: "Our princess" },
  { image: foreverImage, label: "Together forever" },
];

const SLOT_COLORS = [
  { bg: "linear-gradient(135deg, #5BAAD4, #3a88b0)", border: "rgba(91,170,212,0.4)" },
  { bg: "linear-gradient(135deg, #F5A623, #d4861a)", border: "rgba(245,166,35,0.4)" },
  { bg: "linear-gradient(135deg, #E05A4B, #bc3e31)", border: "rgba(224,90,75,0.4)" },
  { bg: "linear-gradient(135deg, #5BAAD4, #F5A623)", border: "rgba(245,200,66,0.4)" },
];

const WISHES_BOKEH = [
  { size: 120, left: "3%", top: "60%", opacity: 0.12 },
  { size: 80, right: "5%", top: "20%", opacity: 0.1 },
  { size: 60, left: "20%", top: "10%", opacity: 0.08 },
  { size: 90, right: "15%", top: "70%", opacity: 0.1 },
];

function scrollToSection(sectionId) {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
}

export default function WishesSection() {
  return (
    <section
      id="wishes"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #3a5070 0%, #4a6080 40%, #3a5070 100%)",
        padding: "5rem 1.5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >

      {WISHES_BOKEH.map((circle, index) => (
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
          top: "5%",
          left: "2%",
          width: 80,
          opacity: 0.5,
          pointerEvents: "none",
        }}
        viewBox="0 0 80 80"
      >
        {[0, 45, 90, 135].map((angle, index) => (
          <line
            key={index}
            x1="40"
            y1="40"
            x2={40 + Math.cos((angle * Math.PI) / 180) * 28}
            y2={40 + Math.sin((angle * Math.PI) / 180) * 28}
            stroke="#F5C842"
            strokeWidth="2"
            strokeLinecap="round"
          />
        ))}
        <polygon
          points="40,20 43,33 57,33 46,41 50,54 40,46 30,54 34,41 23,33 37,33"
          fill="#F5C842"
          opacity="0.9"
        />
      </svg>

      <svg
        style={{
          position: "absolute",
          bottom: "8%",
          right: "3%",
          width: 70,
          opacity: 0.45,
          pointerEvents: "none",
        }}
        viewBox="0 0 80 80"
      >
        {[0, 60, 120, 180, 240, 300].map((angle, index) => (
          <line
            key={index}
            x1="40"
            y1="40"
            x2={40 + Math.cos((angle * Math.PI) / 180) * 24}
            y2={40 + Math.sin((angle * Math.PI) / 180) * 24}
            stroke="#F5C842"
            strokeWidth="2"
            strokeLinecap="round"
          />
        ))}
        <circle cx="40" cy="40" r="6" fill="#F5C842" />
      </svg>

      <div style={{ maxWidth: 680, width: "100%", textAlign: "center", position: "relative", zIndex: 2 }}>
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
          from my heart to yours
        </p>
        <h2
          style={{
            fontSize: "clamp(1.8rem, 5vw, 3rem)",
            fontFamily: "'Arial Black','Arial',sans-serif",
            fontWeight: 900,
            color: "white",
            marginBottom: "2.5rem",
            lineHeight: 1.2,
            textShadow: "2px 2px 0 rgba(0,0,0,0.3)",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
          }}
        >
          My Wishes for You 💌
        </h2>

        <div
          style={{
            background: "rgba(30,45,65,0.7)",
            borderRadius: "20px",
            padding: "2.5rem",
            border: "1px solid rgba(245,200,66,0.25)",
            boxShadow: "0 4px 40px rgba(0,0,0,0.25)",
            marginBottom: "3rem",
            textAlign: "left",
            backdropFilter: "blur(4px)",
          }}
        >
          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
              lineHeight: 1.9,
              color: "rgba(255,255,255,0.9)",
              fontFamily: "'Georgia',serif",
              fontStyle: "italic",
            }}
          >
            "My dearest suamiku tercinta, on your special day, I want you to know how truly loved you are.
            You are not just my husband — you are my best friend, my partner in every adventure,
            and the most wonderful Ayah to our daughter. Every day with you is a gift I never
            take for granted. Your smile lights up our home, your laughter fills our hearts, and
            your love makes everything feel possible. May this birthday bring you all the joy,
            peace, and happiness you deserve. Here's to many more years of love, laughter, and
            beautiful memories together — just us, and our little one. 🎈"
          </p>
          <p
            style={{
              textAlign: "right",
              color: "#F5C842",
              marginTop: "1.5rem",
              fontSize: "1rem",
              fontFamily: "'Georgia',serif",
            }}
          >
            — With all my love, always 💍
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "1rem",
          }}
        >
          {PHOTO_SLOTS.map((slot, index) => (
            <div
              key={index}
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                border: `2px solid ${SLOT_COLORS[index].border}`,
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                transition: "transform 0.2s ease",
                cursor: "default",
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  height: "120px",
                  background: SLOT_COLORS[index].bg,
                }}
              >
                <img
                  src={slot.image}
                  alt={slot.label}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              <div
                style={{
                  padding: "0.75rem",
                  fontSize: "0.8rem",
                  color: "white",
                  fontWeight: "600",
                  textAlign: "center",
                  background: "rgba(30,45,65,0.85)",
                }}
              >
                {slot.label}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "3rem",
            display: "inline-flex",
            gap: "0.5rem",
            color: "rgba(255,255,255,0.5)",
            fontSize: "0.85rem",
            letterSpacing: "0.1em",
            animation: "bounce 2s ease-in-out infinite",
            cursor: "pointer",
          }}
          onClick={() => scrollToSection("timeline")}
        >
          see today's plan ↓
        </div>
      </div>
    </section>
  );
}
