import React, { useState, useEffect } from "react";

const AgendaSlideTemplate = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Customizable content
  const agendaTitle = "Agenda";
  const agendaItems = [
    "First agenda item",
    "Second agenda item",
    "Third agenda item"
  ];
  const logoText = "COMPANY NAME";

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        setCurrentSlide((prev) => Math.min(prev + 1, 0));
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const romanNumerals = ["I.", "II.", "III.", "IV.", "V."];

  return (
    <div className="w-screen h-screen overflow-hidden bg-background">
      <div
        className="w-full h-full relative"
        style={{
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #404040 100%)",
        }}
      >
        {/* Grid Container */}
        <div
          className="w-full h-full grid"
          style={{
            gridTemplateColumns: "repeat(12, 1fr)",
            gridTemplateRows: "repeat(8, 1fr)",
            padding: "4vh 4vw",
          }}
        >
          {/* Agenda Title */}
          <div
            className="flex flex-col justify-start"
            style={{
              gridColumn: "1 / 7",
              gridRow: "1 / 2",
              zIndex: 60,
            }}
          >
            <h1 className="font-bold" style={{ fontSize: "4.5vw", lineHeight: 1.1, color: "#d4d4d4" }}>
              {agendaTitle}
            </h1>
          </div>

          {/* Agenda Items List */}
          <div
            className="flex flex-col justify-center"
            style={{
              gridColumn: "1 / 10",
              gridRow: "2 / 7",
              zIndex: 60,
              gap: "3vh",
            }}
          >
            {agendaItems.map((item, index) => (
              <div key={index} className="flex items-start" style={{ gap: "1vw" }}>
                <span className="text-white font-bold" style={{ fontSize: "2.2vw", lineHeight: 1.4, minWidth: "3vw" }}>
                  {romanNumerals[index]}
                </span>
                <p className="text-white font-medium" style={{ fontSize: "2.2vw", lineHeight: 1.4 }}>
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Logo */}
          <div
            className="flex items-end"
            style={{
              gridColumn: "1 / 4",
              gridRow: "8 / 9",
              zIndex: 60,
            }}
          >
            <svg viewBox="0 0 200 30" className="w-full max-w-xs" style={{ height: "auto" }}>
              <text
                x="0"
                y="24"
                fill="white"
                fontFamily="Arial, sans-serif"
                fontSize="20"
                fontWeight="600"
                letterSpacing="2"
              >
                {logoText}
              </text>
            </svg>
          </div>
        </div>

        {/* Decorative Curves - Background Layer */}
        <svg
          className="absolute"
          style={{
            bottom: 0,
            right: 0,
            width: "60vw",
            height: "55vh",
            zIndex: 10,
          }}
          viewBox="0 0 800 600"
          preserveAspectRatio="xMaxYMax meet"
        >
          {/* Accent Curve */}
          <path
            d="M 0 600 Q 200 400, 400 350 T 800 200 L 800 600 Z"
            fill="none"
            stroke="#a3a3a3"
            strokeWidth="3"
          />
          
          {/* Light Curve */}
          <path
            d="M 200 600 Q 400 350, 600 280 T 800 80 L 800 600 Z"
            fill="none"
            stroke="#e5e5e5"
            strokeWidth="3"
          />
          
          {/* Additional Accent Curve */}
          <path
            d="M 600 600 Q 700 500, 750 450 T 800 350"
            fill="none"
            stroke="#a3a3a3"
            strokeWidth="3"
          />
        </svg>
      </div>
    </div>
  );
};

export default AgendaSlideTemplate;