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

  const SponsorsSlide = () => (
    <div 
      className="w-screen h-screen overflow-hidden relative flex flex-col"
      style={{
        background: '#2d5a4a',
        backgroundImage: 'radial-gradient(ellipse 1800px 1400px at 0% 20%, rgba(20, 40, 30, 0.75) 0%, transparent 60%), radial-gradient(circle 1000px at 100% 12%, #a8d4c8 0%, #8abaa8 15%, #6a9a85 35%, rgba(106, 154, 133, 0.4) 55%, transparent 70%)',
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
        <h1 className="text-gray-400 font-light mb-8" style={{ fontSize: '4vw', letterSpacing: '-0.02em' }}>
          Title
        </h1>

        {/* Two Column Layout */}
        <div className="flex-1 grid grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {/* Logo Placeholder */}
            <div className="bg-white bg-opacity-20 rounded-lg flex items-center justify-center" style={{ height: '12vh' }}>
              <span className="text-gray-400 font-semibold">Logo</span>
            </div>

            {/* Section 1 */}
            <div className="space-y-3 mt-8">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full bg-white mt-1 flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="text-gray-300 font-semibold mb-2" style={{ fontSize: '1.3vw' }}>
                    Heading text placeholder
                  </h3>
                  <p className="text-gray-400 leading-relaxed" style={{ fontSize: '0.9vw' }}>
                    Description text placeholder explaining the main concept.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* Logo Placeholder */}
            <div className="bg-white bg-opacity-20 rounded-lg flex items-center justify-center" style={{ height: '12vh' }}>
              <span className="text-gray-400 font-semibold">Logo</span>
            </div>

            {/* Section 1 */}
            <div className="space-y-3 mt-8">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full bg-white mt-1 flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="text-gray-300 font-semibold mb-2" style={{ fontSize: '1.3vw' }}>
                    Heading text placeholder
                  </h3>
                  <p className="text-gray-400 leading-relaxed" style={{ fontSize: '0.9vw' }}>
                    Description text placeholder explaining the main concept.
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
      {currentSlide === 0 && <SponsorsSlide />}

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