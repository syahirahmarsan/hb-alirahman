import { useState } from "react";

import { QUIZZES } from "../data";

function FlipCard({ answer, cardNum, isFlipped, isSelected, isDisabled, onClick }) {
  return (
    <div
      onClick={isDisabled ? undefined : onClick}
      style={{
        perspective: "600px",
        height: "110px",
        cursor: isDisabled ? "default" : "pointer",
        flex: 1,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4,0.2,0.2,1)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            borderRadius: "16px",
            background: isDisabled && !isSelected ? "rgba(58,88,120,0.5)" : "rgba(58,80,112,0.9)",
            border: `2px solid ${
              isDisabled && !isSelected ? "rgba(245,200,66,0.15)" : "rgba(245,200,66,0.45)"
            }`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
          }}
        >
          <span style={{ fontSize: "1.8rem", opacity: isDisabled && !isSelected ? 0.3 : 0.8 }}>
            🎁
          </span>
          <span
            style={{
              fontSize: "1.1rem",
              fontWeight: "700",
              color: isDisabled && !isSelected ? "rgba(245,200,66,0.3)" : "#F5C842",
              letterSpacing: "0.05em",
            }}
          >
            Option {cardNum}
          </span>
        </div>

        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            borderRadius: "16px",
            transform: "rotateY(180deg)",
            background: isSelected
              ? "linear-gradient(135deg, #F5A623, #d4861a)"
              : "linear-gradient(135deg, #5BAAD4, #3a88b0)",
            border: `2px solid ${isSelected ? "#F5C842" : "rgba(91,170,212,0.6)"}`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: "0.95rem",
              fontWeight: "700",
              color: "white",
              textAlign: "center",
              padding: "0 8px",
            }}
          >
            {answer}
          </span>
          {isSelected && (
            <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.75)", letterSpacing: "0.05em" }}>
              ✓ chosen
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function QuizCard({ quiz, index, isRevealed, onReveal }) {
  const [flipped, setFlipped] = useState([false, false]);
  const [selected, setSelected] = useState(null);

  const handleFlip = (answerIndex) => {
    if (selected !== null) return;

    setFlipped((previous) => {
      const next = [...previous];
      next[answerIndex] = true;
      return next;
    });

    setTimeout(() => {
      setSelected(answerIndex);
      onReveal(index, quiz.answers[answerIndex]);
    }, 300);
  };

  return (
    <div
      style={{
        background: "rgba(30,45,65,0.75)",
        borderRadius: "20px",
        padding: "1.75rem",
        border: `2px solid ${isRevealed ? "rgba(245,200,66,0.45)" : "rgba(245,200,66,0.15)"}`,
        boxShadow: isRevealed ? "0 4px 30px rgba(245,166,35,0.2)" : "0 2px 16px rgba(0,0,0,0.2)",
        transition: "all 0.4s ease",
        marginBottom: "1.25rem",
        backdropFilter: "blur(4px)",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.25rem" }}>
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: isRevealed ? "#F5A623" : "rgba(245,200,66,0.2)",
            color: isRevealed ? "white" : "#F5C842",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "700",
            fontSize: "0.9rem",
            flexShrink: 0,
            transition: "all 0.4s ease",
          }}
        >
          {index + 1}
        </div>
        <p
          style={{
            fontSize: "clamp(0.95rem, 2.5vw, 1.05rem)",
            fontWeight: "500",
            color: "rgba(255,255,255,0.92)",
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          {quiz.question}
        </p>
      </div>

      <div style={{ display: "flex", gap: "0.75rem" }}>
        {quiz.answers.map((answer, answerIndex) => (
          <FlipCard
            key={answerIndex}
            answer={answer}
            cardNum={answerIndex + 1}
            isFlipped={flipped[answerIndex]}
            isSelected={selected === answerIndex}
            isDisabled={selected !== null && selected !== answerIndex}
            onClick={() => handleFlip(answerIndex)}
          />
        ))}
      </div>
    </div>
  );
}

function FinalMessage({ quizAnswers }) {
  return (
    <div
      style={{
        background: "rgba(30,45,65,0.85)",
        borderRadius: "20px",
        padding: "2rem",
        border: "2px solid rgba(245,200,66,0.45)",
        boxShadow: "0 4px 30px rgba(245,166,35,0.2)",
        textAlign: "center",
        animation: "fadeIn 0.7s ease",
        marginTop: "1.5rem",
        backdropFilter: "blur(4px)",
      }}
    >
      <div style={{ fontSize: "3rem", marginBottom: "2rem" }}>🎉</div>
      <h3
        style={{
          fontSize: "1.3rem",
          fontFamily: "'Georgia', serif",
          color: "white",
          marginBottom: "0.5rem",
        }}
      >
        The plan is set!
      </h3>
      <p
        style={{
          fontSize: "0.95rem",
          color: "rgba(255,255,255,0.8)",
          marginBottom: "1.75rem",
          lineHeight: 1.7,
        }}
      >
        Hope you enjoy every single moment of your birthday celebration, abang! 💜
      </p>

      <div
        style={{
          background: "rgba(245,200,66,0.08)",
          borderRadius: "14px",
          padding: "1.25rem",
          textAlign: "left",
          border: "1px solid rgba(245,200,66,0.25)",
        }}
      >
        {[
          ["🍳", "Breakfast", quizAnswers[0]],
          ["🎁", "Present", quizAnswers[1]],
          ["🛍️", "Shopping", quizAnswers[2]],
          ["📸", "Pictures", quizAnswers[3]],
          ["🍽️", "Lunch", quizAnswers[4]],
          ["🍰", "Dessert", quizAnswers[5]],
          ["🎮", "Activity", quizAnswers[6]],
          ["👩‍🍳", "Dinner", quizAnswers[7]],
        ].map(([emoji, label, value], index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "8px 0",
              borderBottom: index < 7 ? "1px solid rgba(245,200,66,0.15)" : "none",
            }}
          >
            <span style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.6)" }}>
              {emoji} {label}
            </span>
            <span style={{ fontWeight: "700", fontSize: "0.9rem", color: "#F5C842" }}>{value || "—"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function QuizSection() {
  const [revealed, setRevealed] = useState({});
  const [quizAnswers, setQuizAnswers] = useState({});

  const handleReveal = (index, answer) => {
    setRevealed((previous) => ({ ...previous, [index]: true }));
    setQuizAnswers((previous) => ({ ...previous, [index]: answer }));
  };

  const allAnswered = Object.keys(revealed).length === QUIZZES.length;

  return (
    <section
      id="quiz"
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
      <div style={{ maxWidth: 560, width: "100%", position: "relative", zIndex: 2 }}>

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
            our birthday date
          </p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 5vw, 3rem)",
              fontFamily: "'Arial Black','Arial',sans-serif",
              fontWeight: 900,
              color: "white",
              marginBottom: "0.75rem",
              lineHeight: 1.2,
              textShadow: "2px 2px 0 rgba(0,0,0,0.3)",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
            }}
          >
            The Birthday Plan 🗓️
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem" }}>
            Tap each card to reveal our plan for the day
          </p>
        </div>

        {QUIZZES.map((quiz, index) => (
          <QuizCard
            key={index}
            quiz={quiz}
            index={index}
            isRevealed={!!revealed[index]}
            onReveal={handleReveal}
          />
        ))}

        {allAnswered && <FinalMessage quizAnswers={quizAnswers} />}
      </div>
    </section>
  );
}
