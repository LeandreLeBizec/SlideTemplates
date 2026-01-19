import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowDown, ArrowUp } from "lucide-react";

const OriginHackathonPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 1;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      } else if (e.key === "ArrowRight" && currentSlide < totalSlides - 1) {
        setCurrentSlide(currentSlide + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  const OrganizersSlide = () => (
    <div 
      className="w-screen h-screen overflow-hidden relative flex flex-col"
      style={{
        background: '#6b4a6f',
        backgroundImage: 'radial-gradient(ellipse 1800px 1400px at 0% 20%, rgba(40, 20, 40, 0.75) 0%, transparent 60%), radial-gradient(circle 1000px at 100% 12%, #e8b4c8 0%, #d89aaa 15%, #c87891 35%, rgba(200, 120, 145, 0.4) 55%, transparent 70%)',
      }}
    >
      {/* Grain/Texture Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-90"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.0' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px',
          mixBlendMode: 'overlay',
          zIndex: 1
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full px-12 py-8">
        {/* Title */}
        <h1 className="text-white font-light mb-8" style={{ fontSize: '4vw', letterSpacing: '-0.02em' }}>
          Organizers
        </h1>

        {/* Two Column Layout */}
        <div className="flex-1 grid grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {/* Logo Placeholder */}
            <div className="bg-white bg-opacity-20 rounded-lg flex items-center justify-center" style={{ height: '12vh' }}>
              <span className="text-white font-semibold">Logo 1</span>
            </div>
            
            {/* Partner Logos Row */}
            <div className="flex gap-3 justify-center">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="bg-white bg-opacity-10 rounded flex items-center justify-center" style={{ width: '4vw', height: '4vh' }}>
                  <span className="text-white text-xs opacity-60">L{i}</span>
                </div>
              ))}
            </div>

            {/* Section 1 */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full bg-white mt-1 flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-2" style={{ fontSize: '1.3vw' }}>
                    We are the <span className="text-pink-300">Keyword</span>
                  </h3>
                  <p className="text-gray-200 leading-relaxed" style={{ fontSize: '0.9vw' }}>
                    Placeholder description text explaining this section's main concept and value proposition.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full bg-white mt-1 flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-2" style={{ fontSize: '1.3vw' }}>
                    We bring the <span className="text-pink-300">Keyword</span>
                  </h3>
                  <p className="text-gray-200 leading-relaxed" style={{ fontSize: '0.9vw' }}>
                    Additional placeholder text describing the second key point with supporting details and context.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* Logo Placeholder */}
            <div className="bg-white bg-opacity-20 rounded-lg flex items-center justify-center" style={{ height: '12vh' }}>
              <span className="text-white font-semibold">Logo 2</span>
            </div>

            {/* Section 1 */}
            <div className="space-y-3 mt-14">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full bg-white mt-1 flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-2" style={{ fontSize: '1.3vw' }}>
                    We are the <span className="text-pink-300">Keyword</span>
                  </h3>
                  <p className="text-gray-200 leading-relaxed" style={{ fontSize: '0.9vw' }}>
                    Placeholder description text explaining this section's main concept and value proposition.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full bg-white mt-1 flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-2" style={{ fontSize: '1.3vw' }}>
                    We bring the <span className="text-pink-300">Keyword</span>
                  </h3>
                  <p className="text-gray-200 leading-relaxed" style={{ fontSize: '0.9vw' }}>
                    Additional placeholder text describing the second key point with supporting details and context.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      {currentSlide === 0 && <OrganizersSlide />}

      {/* Navigation Arrows */}
      {currentSlide > 0 && (
        <button
          onClick={() => setCurrentSlide(currentSlide - 1)}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white opacity-50 hover:opacity-100 transition-opacity z-50"
        >
          <ChevronLeft className="w-12 h-12" />
        </button>
      )}
      {currentSlide < totalSlides - 1 && (
        <button
          onClick={() => setCurrentSlide(currentSlide + 1)}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white opacity-50 hover:opacity-100 transition-opacity z-50"
        >
          <ChevronRight className="w-12 h-12" />
        </button>
      )}

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 text-white text-sm opacity-50 z-50">
        {currentSlide + 1} / {totalSlides}
      </div>
    </div>
  );
};

export default OriginHackathonPresentation;