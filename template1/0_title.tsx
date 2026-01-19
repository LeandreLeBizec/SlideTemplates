import React, { useState, useEffect } from "react";

const TitleSlideTemplate = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Customizable content
  const mainTitle = "Main Title";
  const subtitle = "Subtitle or Tagline";
  const bodyText = "Your main question or description text goes here. Replace with your content.";
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

  return (
    <div className="w-screen h-screen overflow-hidden bg-background">
      {/* Slide 1: Title Slide */}
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
          {/* Title Section */}
          <div
            className="flex flex-col justify-start"
            style={{
              gridColumn: "1 / 7",
              gridRow: "1 / 3",
              zIndex: 60,
            }}
          >
            <h1 className="text-white font-bold" style={{ fontSize: "4.5vw", lineHeight: 1.1, marginBottom: "0.5vh" }}>
              {mainTitle}
            </h1>
            <h2 className="font-bold" style={{ fontSize: "4.5vw", lineHeight: 1.1, color: "#d4d4d4" }}>
              {subtitle}
            </h2>
          </div>

          {/* Question Text */}
          <div
            className="flex items-center"
            style={{
              gridColumn: "1 / 9",
              gridRow: "4 / 6",
              zIndex: 60,
            }}
          >
            <p className="text-white font-medium" style={{ fontSize: "2.2vw", lineHeight: 1.4 }}>
              {bodyText}
            </p>
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

export default TitleSlideTemplate;