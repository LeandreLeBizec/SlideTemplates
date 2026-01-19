import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Wifi, Camera, Users, ShoppingCart, CreditCard, Ticket } from "lucide-react";

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

  const InformationsSlide = () => (
    <div 
      className="w-screen h-screen overflow-hidden relative flex flex-col"
      style={{
        background: 'linear-gradient(to right, #1a3d3d 0%, #2d5a4a 30%, #4a7a5a 60%, #7a9a6a 85%, #aab870 100%)',
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
        <h1 className="text-white font-light mb-8" style={{ fontSize: '5vw', letterSpacing: '-0.02em' }}>
          Informations
        </h1>

        {/* HARD CONSTRAINT: Icons on straight line, vertically centered */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col gap-8">
            {/* Icons Row - Perfectly Aligned */}
            <div className="flex justify-center items-center gap-20">
              <div className="flex items-center justify-center bg-yellow-400 bg-opacity-20 rounded-lg" style={{ width: '64px', height: '64px' }}>
                <span className="text-yellow-400 text-xs font-semibold">Icon</span>
              </div>
              <div className="flex items-center justify-center bg-yellow-400 bg-opacity-20 rounded-lg" style={{ width: '64px', height: '64px' }}>
                <span className="text-yellow-400 text-xs font-semibold">Icon</span>
              </div>
              <div className="flex items-center justify-center bg-yellow-400 bg-opacity-20 rounded-lg" style={{ width: '64px', height: '64px' }}>
                <span className="text-yellow-400 text-xs font-semibold">Icon</span>
              </div>
              <div className="flex items-center justify-center bg-yellow-400 bg-opacity-20 rounded-lg" style={{ width: '64px', height: '64px' }}>
                <span className="text-yellow-400 text-xs font-semibold">Icon</span>
              </div>
              <div className="flex items-center justify-center bg-yellow-400 bg-opacity-20 rounded-lg" style={{ width: '64px', height: '64px' }}>
                <span className="text-yellow-400 text-xs font-semibold">Icon</span>
              </div>
              <div className="flex items-center justify-center bg-yellow-400 bg-opacity-20 rounded-lg" style={{ width: '64px', height: '64px' }}>
                <span className="text-yellow-400 text-xs font-semibold">Icon</span>
              </div>
              <div className="flex items-center justify-center bg-yellow-400 bg-opacity-20 rounded-lg" style={{ width: '64px', height: '64px' }}>
                <span className="text-yellow-400 text-xs font-semibold">Icon</span>
              </div>
            </div>

            {/* Text Placeholders Below - Aligned with icons */}
            <div className="flex justify-center items-start gap-20">
              <div className="text-white text-center text-sm font-light" style={{ width: '64px' }}>Text<br />Placeholder</div>
              <div className="text-white text-center text-sm font-light" style={{ width: '64px' }}>Text</div>
              <div className="text-white text-center text-sm font-light" style={{ width: '64px' }}>Text</div>
              <div className="text-white text-center text-sm font-light" style={{ width: '64px' }}>Text</div>
              <div className="text-white text-center text-sm font-light" style={{ width: '64px' }}>Text</div>
              <div className="text-white text-center text-sm font-light" style={{ width: '64px' }}>Text</div>
              <div className="text-white text-center text-sm font-light" style={{ width: '64px' }}>Text<br />Placeholder</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ProgramSlide = () => (
    <div 
      className="w-screen h-screen overflow-hidden relative flex flex-col"
      style={{
        background: '#2d4a6f',
        backgroundImage: 'radial-gradient(ellipse 1800px 1400px at 0% 20%, rgba(0, 0, 0, 0.75) 0%, transparent 60%), radial-gradient(circle 1000px at 100% 12%, #d9c4a8 0%, #b89a85 15%, #9d7891 35%, rgba(157, 120, 145, 0.4) 55%, transparent 70%), radial-gradient(circle 900px at 35% 100%, rgba(147, 112, 219, 0.5) 0%, rgba(138, 43, 226, 0.3) 30%, transparent 60%)',
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
        <h1 className="text-gray-400 font-light mb-8" style={{ fontSize: '5vw', letterSpacing: '-0.02em' }}>
          Title
        </h1>

        {/* Two Column Schedule */}
        <div className="flex-1 grid grid-cols-2 gap-12 items-center px-8">
          {/* Column 1 - Moved down */}
          <div className="flex flex-col gap-5 mt-12">
            {/* Column 1 Header */}
            <div>
              <h2 className="text-gray-300 font-light mb-3" style={{ fontSize: '2.2vw' }}>
                Column 1 Title
              </h2>
              <div className="bg-green-500 bg-opacity-80 px-5 py-3 inline-block">
                <span className="text-white font-semibold" style={{ fontSize: '1.2vw' }}>Label Text</span>
              </div>
            </div>

            {/* Column 1 Events */}
            <div className="space-y-5 border-l-4 border-green-500 pl-8">
              <div className="space-y-1">
                <p className="text-gray-300" style={{ fontSize: '1.1vw' }}>
                  <span className="font-light">Time | </span>
                  <span className="text-green-400 font-semibold">Label: </span>
                  <span className="font-light">Description text.</span>
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-gray-300" style={{ fontSize: '1.1vw' }}>
                  <span className="font-light">Time | </span>
                  <span className="text-green-400 font-semibold">Label: </span>
                  <span className="font-light">Description text.</span>
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-gray-300" style={{ fontSize: '1.1vw' }}>
                  <span className="font-light">Time | </span>
                  <span className="text-green-400 font-semibold">Label: </span>
                  <span className="font-light">Description text.</span>
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-gray-300" style={{ fontSize: '1.1vw' }}>
                  <span className="font-light">Time | </span>
                  <span className="text-green-400 font-semibold">Label: </span>
                  <span className="font-light">Description text.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Column 2 - Moved up higher for staggered effect */}
          <div className="flex flex-col gap-5 mb-32">
            {/* Column 2 Header */}
            <div>
              <h2 className="text-gray-300 font-light mb-3" style={{ fontSize: '2.2vw' }}>
                Column 2 Title
              </h2>
              <div className="bg-yellow-500 bg-opacity-80 px-5 py-3 inline-block">
                <span className="text-white font-semibold" style={{ fontSize: '1.2vw' }}>Label Text</span>
              </div>
            </div>

            {/* Column 2 Events */}
            <div className="space-y-5 border-l-4 border-yellow-500 pl-8">
              <div className="space-y-1">
                <p className="text-gray-300" style={{ fontSize: '1.1vw' }}>
                  <span className="font-light">Time | </span>
                  <span className="text-yellow-400 font-semibold">Label: </span>
                  <span className="font-light">Description text.</span>
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-gray-300" style={{ fontSize: '1.1vw' }}>
                  <span className="font-light">Time | </span>
                  <span className="text-yellow-400 font-semibold">Label: </span>
                  <span className="font-light">Description text.</span>
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-gray-300" style={{ fontSize: '1.1vw' }}>
                  <span className="font-light">Time | </span>
                  <span className="text-yellow-400 font-semibold">Label: </span>
                  <span className="font-light">Description text.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      {currentSlide === 0 && <ProgramSlide />}

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