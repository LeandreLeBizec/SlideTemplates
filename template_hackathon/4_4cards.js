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

  const TracksSlide = () => (
    <div 
      className="w-screen h-screen overflow-hidden relative flex flex-col"
      style={{
        background: '#2d4a6f',
        backgroundImage: 'radial-gradient(ellipse 1800px 1400px at 0% 20%, rgba(0, 0, 0, 0.75) 0%, transparent 60%), radial-gradient(circle 1000px at 100% 12%, #d9c4a8 0%, #b89a85 15%, #9d7891 35%, rgba(157, 120, 145, 0.4) 55%, transparent 70%)',
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
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <h1 className="text-gray-400 font-light" style={{ fontSize: '5vw', letterSpacing: '-0.02em' }}>
            Title
          </h1>
          <div className="border-4 border-yellow-400 px-6 py-3">
            <div className="text-yellow-400 font-bold text-center leading-tight" style={{ fontSize: '1.4vw' }}>
              BADGE<br />TEXT
            </div>
          </div>
        </div>

        {/* 2x2 Grid of Tracks */}
        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-6">
          {/* Card 1 */}
          <div className="bg-gray-900 bg-opacity-40 rounded-lg p-6 space-y-3">
            <h2 className="text-gray-400 font-semibold" style={{ fontSize: '1.2vw' }}>
              Card 1 Title
            </h2>
            <div className="space-y-2">
              <p className="text-gray-300" style={{ fontSize: '0.95vw' }}>
                <span className="font-semibold">Section 1:</span> <span className="font-light">Description text placeholder.</span>
              </p>
              <p className="text-gray-300" style={{ fontSize: '0.95vw' }}>
                <span className="font-semibold">Section 2:</span> <span className="font-light">Description text placeholder.</span>
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-900 bg-opacity-40 rounded-lg p-6 space-y-3">
            <h2 className="text-gray-400 font-semibold" style={{ fontSize: '1.2vw' }}>
              Card 2 Title
            </h2>
            <div className="space-y-2">
              <p className="text-gray-300" style={{ fontSize: '0.95vw' }}>
                <span className="font-semibold">Section 1:</span> <span className="font-light">Description text placeholder.</span>
              </p>
              <p className="text-gray-300" style={{ fontSize: '0.95vw' }}>
                <span className="font-semibold">Section 2:</span> <span className="font-light">Description text placeholder.</span>
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-900 bg-opacity-40 rounded-lg p-6 space-y-3">
            <h2 className="text-gray-400 font-semibold" style={{ fontSize: '1.2vw' }}>
              Card 3 Title
            </h2>
            <div className="space-y-2">
              <p className="text-gray-300" style={{ fontSize: '0.95vw' }}>
                <span className="font-semibold">Section 1:</span> <span className="font-light">Description text placeholder.</span>
              </p>
              <p className="text-gray-300" style={{ fontSize: '0.95vw' }}>
                <span className="font-semibold">Section 2:</span> <span className="font-light">Description text placeholder.</span>
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-900 bg-opacity-40 rounded-lg p-6 space-y-3">
            <h2 className="text-gray-400 font-semibold" style={{ fontSize: '1.2vw' }}>
              Card 4 Title
            </h2>
            <div className="space-y-2">
              <p className="text-gray-300" style={{ fontSize: '0.95vw' }}>
                <span className="font-semibold">Section 1:</span> <span className="font-light">Description text placeholder.</span>
              </p>
              <p className="text-gray-300" style={{ fontSize: '0.95vw' }}>
                <span className="font-semibold">Section 2:</span> <span className="font-light">Description text placeholder.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      {currentSlide === 0 && <TracksSlide />}

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