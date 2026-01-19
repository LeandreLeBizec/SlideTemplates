import React, { useEffect } from "react";
import { Users, Globe, Wrench, LucideIcon } from "lucide-react";

const WavestoneSlide = () => {
  // ========== TEMPLATE CONFIGURATION ==========
  // Customize these values to adapt the slide to your content
  
  // COLORS - Neutral grays to adapt to your brand
  const PRIMARY_COLOR = "#6b7280"; // Main color for cards and text box (gray-500)
  const ACCENT_COLOR = "#374151";  // Accent color for numbers and highlights (gray-700)
  const BACKGROUND_COLOR = "#ffffff"; // Slide background
  
  // MAIN HEADINGS (Level 1 & 2)
  const SECTION_TITLE = "[Section Title - H1]";
  const SUBTITLE = "[Subtitle - H2]";
  
  // CARDS DATA (3 cards with stats)
  const cards = [
    {
      number: "1.",
      title: "[Card Title 1\nMulti-line]",
      statValue: "[XX%]",
      description: "[Description text line 1\nDescription line 2]",
      icon: Users,
    },
    {
      number: "2.",
      title: "[Card Title 2\nMulti-line]",
      statValue: "[XX%]",
      description: "[Description text line 1\nDescription line 2\nDescription line 3]",
      icon: Globe,
    },
    {
      number: "3.",
      title: "[Card Title 3\nMulti-line]",
      statValue: "",
      description: "",
      icon: Wrench,
    },
  ];
  
  // TEXT BOX (Right overlay)
  const TEXT_BOX_CONTENT = {
    main: "[Main question or statement text",
    highlight: "highlighted portion",
    end: "]?",
  };
  
  // BACKGROUND IMAGE (optional)
  const SHOW_IMAGE_PLACEHOLDER = true;
  
  // ========== END CONFIGURATION ==========

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        // Navigation ready for multi-slide presentations
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden" style={{ backgroundColor: BACKGROUND_COLOR }}>
      <div
        className="w-full h-full grid"
        style={{
          gridTemplateColumns: "repeat(12, 1fr)",
          gridTemplateRows: "repeat(8, 1fr)",
        }}
      >
        {/* Left Content Section */}
        <div
          className="flex flex-col justify-start pt-8 pl-12 pr-6"
          style={{
            gridColumn: "1 / 7",
            gridRow: "1 / 9",
            zIndex: 50,
            position: "relative",
          }}
        >
          {/* Section Title - H1 Level */}
          <h1
            className="font-bold mb-4"
            style={{
              color: PRIMARY_COLOR,
              fontSize: "2.5vw",
            }}
          >
            {SECTION_TITLE}
          </h1>

          {/* Subtitle - H2 Level */}
          <h2
            className="font-semibold mb-6"
            style={{
              color: PRIMARY_COLOR,
              fontSize: "1.3vw",
            }}
          >
            {SUBTITLE}
          </h2>

          {/* Stats Cards Row */}
          <div className="grid grid-cols-3 gap-2" style={{ marginTop: "2vh" }}>
            {cards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={index}
                  className="rounded-lg p-4 flex flex-col justify-between relative overflow-hidden"
                  style={{
                    backgroundColor: PRIMARY_COLOR,
                    height: "70vh",
                  }}
                >
                  {/* Decorative lines */}
                  <div
                    className="absolute"
                    style={{
                      bottom: "20%",
                      left: "-10%",
                      width: "120%",
                      height: "1px",
                      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                      transform: "rotate(-15deg)",
                    }}
                  />
                  <div
                    className="absolute"
                    style={{
                      bottom: "30%",
                      left: "-10%",
                      width: "120%",
                      height: "1px",
                      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                      transform: "rotate(-15deg)",
                    }}
                  />

                  <div className="relative z-10">
                    {/* Card Number */}
                    <div
                      className="font-bold mb-2"
                      style={{
                        color: ACCENT_COLOR,
                        fontSize: "1.2vw",
                      }}
                    >
                      {card.number}
                    </div>
                    {/* Card Title - H3 Level */}
                    <h3 className="text-white font-semibold mb-3" style={{ fontSize: "0.85vw", lineHeight: "1.3" }}>
                      {card.title.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i < card.title.split('\n').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </h3>
                    {/* Stat Value */}
                    {card.statValue && (
                      <div
                        className="font-bold mb-2"
                        style={{
                          color: ACCENT_COLOR,
                          fontSize: "2vw",
                        }}
                      >
                        {card.statValue}
                      </div>
                    )}
                    {/* Description Text */}
                    {card.description && (
                      <p className="text-white italic" style={{ fontSize: "0.6vw", opacity: 0.9, lineHeight: "1.4" }}>
                        {card.description.split('\n').map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            {i < card.description.split('\n').length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </p>
                    )}
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 flex justify-end">
                    <IconComponent className="text-white opacity-30" style={{ width: "1.5vw", height: "1.5vw" }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Image Section with curved edge */}
        <div
          className="absolute"
          style={{
            top: 0,
            bottom: 0,
            left: "83%",
            right: 0,
            overflow: "visible",
          }}
        >
          {/* Curved background container */}
          <div
            className="absolute"
            style={{
              top: 0,
              bottom: 0,
              left: "-20vw",
              right: 0,
              clipPath: "ellipse(80% 100% at 85% 50%)",
            }}
          >
            {/* Image placeholder with gradient */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, #e5e7eb 0%, #d1d5db 50%, #9ca3af 100%)",
              }}
            />

            {/* Simulated office scene */}
            {SHOW_IMAGE_PLACEHOLDER && (
              <div className="absolute inset-0 flex items-center justify-center opacity-40">
                <div className="text-gray-600 font-bold" style={{ fontSize: "1.5vw" }}>
                  [Background Image]
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Text Box Overlay - foreground element */}
        <div
          className="absolute rounded-lg p-8 shadow-2xl"
          style={{
            backgroundColor: PRIMARY_COLOR,
            bottom: "15vh",
            right: "5vw",
            width: "35vw",
            zIndex: 100,
          }}
        >
          <p className="text-white font-medium" style={{ fontSize: "1.6vw", lineHeight: "1.4" }}>
            {TEXT_BOX_CONTENT.main}
            <br />
            <span
              className="font-semibold"
              style={{
                color: ACCENT_COLOR,
              }}
            >
              {TEXT_BOX_CONTENT.highlight}
            </span>
            {TEXT_BOX_CONTENT.end}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WavestoneSlide;