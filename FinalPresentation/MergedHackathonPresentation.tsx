import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Clock, Frown, DollarSign, MessageSquare, Eye, BookOpen } from "lucide-react";

const HackathonPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 8;
  
  // Logo URLs hosted on GitHub
  const chatGPTLogoUrl = "https://raw.githubusercontent.com/LeandreLeBizec/SlideTemplates/main/assets/ChatGPT_logo_white_noBG.png";
  const dustLogoUrl = "https://raw.githubusercontent.com/LeandreLeBizec/SlideTemplates/main/assets/Dust_logo_noBG.png";

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

  // Slide 0: Title Slide
  const TitleSlide = () => (
    <div
      className="w-screen h-screen overflow-hidden grid relative"
      style={{
        background: '#2d4a6f',
        backgroundImage: 'radial-gradient(ellipse 1800px 1400px at 0% 20%, rgba(0, 0, 0, 0.75) 0%, transparent 60%), radial-gradient(circle 1000px at 100% 12%, #d9c4a8 0%, #b89a85 15%, #9d7891 35%, rgba(157, 120, 145, 0.4) 55%, transparent 70%)',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridTemplateRows: 'repeat(8, 1fr)',
        gap: '2vh 2vw'
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

      {/* Main Title - Top Left */}
      <div
        className="flex flex-col items-start justify-end pl-12 relative"
        style={{ gridColumn: '1 / 7', gridRow: '1 / 5', paddingBottom: '6vh', zIndex: 10 }}
      >
        <h1 className="text-white font-normal" style={{ fontSize: '7.8vw', letterSpacing: '-0.06em', lineHeight: '0.85' }}>
          SLIDE<br />STORM
        </h1>
        <p className="text-yellow-400 font-light mt-3" style={{ fontSize: '1.4vw', letterSpacing: '0.02em' }}>
          AI Slides That Don't Suck
        </p>
      </div>

      {/* Badge - Top Right */}
      <div
        className="flex items-start justify-end pr-12 pt-8 relative"
        style={{ gridColumn: '10 / 13', gridRow: '1 / 3', zIndex: 10 }}
      >
        <div className="border-4 border-yellow-400 px-6 py-3">
          <div className="text-yellow-400 font-bold text-center leading-tight" style={{ fontSize: '1.5vw' }}>
            42 PARIS<br />HACKATHON
          </div>
        </div>
      </div>

      {/* Date and Event Logos - Center */}
      <div
        className="flex flex-col items-center justify-center gap-6 relative"
        style={{ gridColumn: '5 / 9', gridRow: '4 / 6', zIndex: 10 }}
      >
        <div className="bg-white bg-opacity-10 rounded px-6 py-2 flex items-center justify-center" style={{ height: '3vh' }}>
          <span className="text-white font-light" style={{ fontSize: '1.1vw' }}>21 Janvier 2026</span>
        </div>
        <div className="flex items-center gap-4">
          {/* Logo 1 - ChatGPT */}
          <div className="flex items-center justify-center" style={{ width: '5vw', height: '4vw' }}>
            <img 
              src={chatGPTLogoUrl} 
              alt="ChatGPT" 
              className="w-full h-full object-contain"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>
          <span className="text-white text-3xl font-bold">×</span>
          {/* Logo 2 - Dust */}
          <div className="flex items-center justify-center" style={{ width: '5vw', height: '4vw' }}>
            <img 
              src={dustLogoUrl} 
              alt="Dust" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Sponsor Logos - Bottom */}
      <div
        className="flex flex-col gap-4 px-8 relative"
        style={{ gridColumn: '3 / 11', gridRow: '7 / 9', zIndex: 10 }}
      >
        {/* First Row */}
        <div className="flex items-center justify-around gap-4">
          <div className="flex-1 bg-white bg-opacity-20 rounded flex items-center justify-center" style={{ height: '5vh' }}>
            <span className="text-white font-semibold text-xs">42 Paris</span>
          </div>
          <div className="flex-1 bg-white bg-opacity-20 rounded flex items-center justify-center" style={{ height: '5vh' }}>
            <span className="text-white font-semibold text-xs">Alpic</span>
          </div>
          <div className="flex-1 bg-white bg-opacity-20 rounded flex items-center justify-center" style={{ height: '5vh' }}>
            <span className="text-white font-semibold text-xs">Dust</span>
          </div>
          <div className="flex-1 bg-white bg-opacity-20 rounded flex items-center justify-center" style={{ height: '5vh' }}>
            <span className="text-white font-semibold text-xs">Lightpanda</span>
          </div>
        </div>
        {/* Second Row */}
        <div className="flex items-center justify-around gap-4">
          <div className="flex-1 bg-white bg-opacity-20 rounded flex items-center justify-center" style={{ height: '5vh' }}>
            <span className="text-white font-semibold text-xs">Lovable</span>
          </div>
          <div className="flex-1 bg-white bg-opacity-20 rounded flex items-center justify-center" style={{ height: '5vh' }}>
            <span className="text-white font-semibold text-xs">Horizon Factory</span>
          </div>
          <div className="flex-1 bg-white bg-opacity-20 rounded flex items-center justify-center" style={{ height: '5vh' }}>
            <span className="text-white font-semibold text-xs">Hexa</span>
          </div>
          <div className="flex-1 bg-white bg-opacity-20 rounded flex items-center justify-center" style={{ height: '5vh' }}>
            <span className="text-white font-semibold text-xs">FullEnrich</span>
          </div>
        </div>
      </div>
    </div>
  );

  // Slide 1: Problem & Solution Slide
  const ProblemSolutionSlide = () => (
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
      <div className="relative z-10 flex flex-col h-full px-16 py-12">
        {/* Top Section - The Problem */}
        <div className="flex-1 flex flex-col justify-center pb-8">
          <div className="mb-8 flex items-center gap-4">
            <div className="bg-yellow-400 bg-opacity-20 px-4 py-2 rounded">
              <h1 className="text-yellow-400 font-light" style={{ fontSize: '2.8vw', letterSpacing: '-0.02em' }}>
                The Problem
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-around gap-12 px-16">
            <div className="flex flex-col items-center gap-3 flex-1">
              <Clock className="text-white" style={{ width: '4vw', height: '4vw' }} strokeWidth={1.5} />
              <p className="text-white font-light text-center leading-tight" style={{ fontSize: '1.2vw' }}>
                Thousands of hours<br />wasted creating
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 flex-1">
              <Frown className="text-white" style={{ width: '4vw', height: '4vw' }} strokeWidth={1.5} />
              <p className="text-white font-light text-center leading-tight" style={{ fontSize: '1.2vw' }}>
                Existing tools<br />disappoint
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 flex-1">
              <DollarSign className="text-white" style={{ width: '4vw', height: '4vw' }} strokeWidth={1.5} />
              <p className="text-white font-light text-center leading-tight" style={{ fontSize: '1.2vw' }}>
                Multiple subscriptions<br />required
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white border-opacity-10 my-4"></div>

        {/* Bottom Section - The Solution */}
        <div className="flex-1 flex flex-col justify-center pt-8">
          <div className="mb-8 flex items-center gap-4">
            <div className="bg-yellow-400 bg-opacity-20 px-4 py-2 rounded">
              <h1 className="text-yellow-400 font-light" style={{ fontSize: '2.8vw', letterSpacing: '-0.02em' }}>
                Our Solution
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-around gap-12 px-16">
            <div className="flex flex-col items-center gap-3 flex-1">
              <div className="flex items-center justify-center" style={{ width: '5.5vw', height: '5.5vw' }}>
                <img 
                  src={chatGPTLogoUrl} 
                  alt="ChatGPT" 
                  className="w-full h-full object-contain"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
              <p className="text-white font-light text-center leading-tight" style={{ fontSize: '1.2vw' }}>
                ChatGPT App<br />everyone uses
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 flex-1">
              <Eye className="text-white" style={{ width: '4vw', height: '4vw' }} strokeWidth={1.5} />
              <p className="text-white font-light text-center leading-tight" style={{ fontSize: '1.2vw' }}>
                Vision LLM<br />for structure
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 flex-1">
              <BookOpen className="text-white" style={{ width: '4vw', height: '4vw' }} strokeWidth={1.5} />
              <p className="text-white font-light text-center leading-tight" style={{ fontSize: '1.2vw' }}>
                Ready-to-use<br />templates
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Slide 2: Demo Slide
  const DemoSlide = () => (
    <div
      className="w-screen h-screen overflow-hidden relative flex items-center justify-center"
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

      {/* Demo Title */}
      <div className="relative z-10">
        <h1 className="text-white font-light" style={{ fontSize: '12vw', letterSpacing: '-0.04em' }}>
          DEMO
        </h1>
      </div>
    </div>
  );

  // Slide 3: Technical Stack
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
      <div className="relative z-10 flex flex-col h-full px-12 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-white font-light" style={{ fontSize: '4.5vw', letterSpacing: '-0.02em' }}>
            Technical Stack
          </h1>
        </div>

        {/* 2x2 Grid Architecture */}
        <div className="flex-1 relative flex items-start justify-center px-16 pt-8">
          <div className="grid grid-cols-2 grid-rows-2 relative" style={{ gap: '4rem' }}>
            {/* Card 1: ChatGPT - Top Left */}
            <div className="bg-blue-500 bg-opacity-20 border-2 border-blue-400 rounded-lg p-6 space-y-3 relative">
              <h2 className="text-white font-bold text-center" style={{ fontSize: '1.6vw' }}>
                ChatGPT
              </h2>
              <div className="space-y-2">
                <p className="text-gray-300 text-center leading-relaxed" style={{ fontSize: '1.05vw' }}>
                  <span className="font-light">Trigger & conversation<br />Capture user intent</span>
                </p>
              </div>
              {/* Arrow to Alpic (horizontal right) */}
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 flex flex-col items-center justify-center gap-0" style={{ fontSize: '1.8vw', width: '4rem' }}>
                <span className="text-yellow-400">→</span>
                <span className="text-yellow-400">←</span>
              </div>
            </div>

            {/* Card 2: Alpic - Top Right */}
            <div className="bg-purple-500 bg-opacity-20 border-2 border-purple-400 rounded-lg p-6 space-y-3 relative">
              <h2 className="text-white font-bold text-center" style={{ fontSize: '1.6vw' }}>
                Alpic
              </h2>
              <div className="space-y-2">
                <p className="text-gray-300 text-center leading-relaxed" style={{ fontSize: '0.95vw' }}>
                  <span className="font-light">SkyBridge Project<br />Widget, MCP Server<br />and Tools</span>
                </p>
              </div>
              {/* Arrow to Railway (diagonal down-left) */}
              <div className="absolute left-1/4 top-full flex items-center justify-center gap-1" style={{ fontSize: '1.8vw', height: '4rem' }}>
                <span className="text-yellow-400 transform rotate-90">→</span>
                <span className="text-yellow-400 transform rotate-90">←</span>
              </div>
            </div>

            {/* Card 3: Railway - Bottom Left */}
            <div className="bg-green-500 bg-opacity-20 border-2 border-green-400 rounded-lg p-6 space-y-3 relative">
              <h2 className="text-white font-bold text-center" style={{ fontSize: '1.6vw' }}>
                Railway
              </h2>
              <div className="space-y-2">
                <p className="text-gray-300 text-center leading-relaxed" style={{ fontSize: '1.05vw' }}>
                  <span className="font-light">Proxy / Security</span>
                </p>
              </div>
              {/* Arrow to Dust (horizontal right) */}
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 flex flex-col items-center justify-center gap-0" style={{ fontSize: '1.8vw', width: '4rem' }}>
                <span className="text-yellow-400">→</span>
                <span className="text-yellow-400">←</span>
              </div>
            </div>

            {/* Card 4: Dust - Bottom Right */}
            <div className="bg-orange-500 bg-opacity-20 border-2 border-orange-400 rounded-lg p-6 space-y-3">
              <h2 className="text-white font-bold text-center" style={{ fontSize: '1.6vw' }}>
                Dust
              </h2>
              <div className="space-y-2">
                <p className="text-gray-300 text-center leading-relaxed" style={{ fontSize: '1.05vw' }}>
                  <span className="font-light">Agentic orchestration<br />Deck generation in </span>
                  <code className="text-yellow-400 bg-gray-800 bg-opacity-50 px-1 rounded">.tsx</code>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Slide 4: Generation Lifecycle
  const LifecycleSlide = () => (
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
        {/* Title */}
        <h1 className="text-white font-light mb-4" style={{ fontSize: '3.2vw', letterSpacing: '-0.02em' }}>
          Generation Lifecycle
        </h1>

        {/* Lifecycle Flow */}
        <div className="flex-1 flex items-center justify-center overflow-hidden">
          <div className="grid grid-cols-2 gap-x-8 gap-y-3 max-w-6xl w-full">
            {/* Step 1 */}
            <div className="flex items-start gap-3 col-span-2">
              <div className="flex items-center justify-center bg-blue-500 rounded-full flex-shrink-0" style={{ width: '2.5vw', height: '2.5vw' }}>
                <span className="text-white font-bold" style={{ fontSize: '1.1vw' }}>1</span>
              </div>
              <div className="flex-1 bg-gray-900 bg-opacity-40 rounded-lg p-3">
                <p className="text-gray-200 leading-snug" style={{ fontSize: '0.85vw' }}>
                  <span className="font-semibold text-white">User triggers app from ChatGPT</span>
                  <br />
                  <span className="font-light">Interface opens in chat</span>
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-3 col-span-2">
              <div className="flex items-center justify-center bg-purple-500 rounded-full flex-shrink-0" style={{ width: '2.5vw', height: '2.5vw' }}>
                <span className="text-white font-bold" style={{ fontSize: '1.1vw' }}>2</span>
              </div>
              <div className="flex-1 bg-gray-900 bg-opacity-40 rounded-lg p-3">
                <p className="text-gray-200 leading-snug" style={{ fontSize: '0.85vw' }}>
                  <span className="font-semibold text-white">User inputs prompt + uploads files</span>
                  <br />
                  <span className="font-light">PDF/PNG templates and content description</span>
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-3 col-span-2">
              <div className="flex items-center justify-center bg-pink-500 rounded-full flex-shrink-0" style={{ width: '2.5vw', height: '2.5vw' }}>
                <span className="text-white font-bold" style={{ fontSize: '1.1vw' }}>3</span>
              </div>
              <div className="flex-1 bg-gray-900 bg-opacity-40 rounded-lg p-3">
                <p className="text-gray-200 leading-snug" style={{ fontSize: '0.85vw' }}>
                  <span className="font-semibold text-white">Create Dust conversation via server/tools</span>
                  <br />
                  <span className="font-light">Initialize orchestration workflow</span>
                </p>
              </div>
            </div>

            {/* Step 4a - MCP Compatible */}
            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center bg-green-500 rounded-full flex-shrink-0" style={{ width: '2.5vw', height: '2.5vw' }}>
                <span className="text-white font-bold" style={{ fontSize: '1.1vw' }}>4a</span>
              </div>
              <div className="flex-1 bg-green-900 bg-opacity-30 border border-green-500 rounded-lg p-3">
                <p className="text-gray-200 leading-snug" style={{ fontSize: '0.8vw' }}>
                  <span className="font-semibold text-green-400">MCP Compatible</span>
                  <br />
                  <span className="font-light">Send directly via MCP</span>
                </p>
              </div>
            </div>

            {/* Step 4b - Not MCP Compatible */}
            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center bg-orange-500 rounded-full flex-shrink-0" style={{ width: '2.5vw', height: '2.5vw' }}>
                <span className="text-white font-bold" style={{ fontSize: '1.1vw' }}>4b</span>
              </div>
              <div className="flex-1 bg-orange-900 bg-opacity-30 border border-orange-500 rounded-lg p-3">
                <p className="text-gray-200 leading-snug" style={{ fontSize: '0.8vw' }}>
                  <span className="font-semibold text-orange-400">Non-MCP Format</span>
                  <br />
                  <span className="font-light">Route through Railway</span>
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex items-start gap-3 col-span-2">
              <div className="flex items-center justify-center bg-cyan-500 rounded-full flex-shrink-0" style={{ width: '2.5vw', height: '2.5vw' }}>
                <span className="text-white font-bold" style={{ fontSize: '1.1vw' }}>5</span>
              </div>
              <div className="flex-1 bg-gray-900 bg-opacity-40 rounded-lg p-3">
                <p className="text-gray-200 leading-snug" style={{ fontSize: '0.85vw' }}>
                  <span className="font-semibold text-white">Dust agent generates .tsx</span>
                  <br />
                  <span className="font-light">Uses template database + user input</span>
                </p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="flex items-start gap-3 col-span-2">
              <div className="flex items-center justify-center bg-yellow-500 rounded-full flex-shrink-0" style={{ width: '2.5vw', height: '2.5vw' }}>
                <span className="text-white font-bold" style={{ fontSize: '1.1vw' }}>6</span>
              </div>
              <div className="flex-1 bg-gray-900 bg-opacity-40 rounded-lg p-3">
                <p className="text-gray-200 leading-snug" style={{ fontSize: '0.85vw' }}>
                  <span className="font-semibold text-white">App renders .tsx in iframe</span>
                  <br />
                  <span className="font-light">Final presentation displayed to user</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Slide 5: Current Status & Roadmap
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
        <h1 className="text-white font-light mb-8" style={{ fontSize: '4.5vw', letterSpacing: '-0.02em' }}>
          Current Status & Roadmap
        </h1>

        {/* Two Column Layout */}
        <div className="flex-1 grid grid-cols-2 gap-12 items-start px-8">
          {/* Column 1 - Current Features */}
          <div className="flex flex-col gap-5">
            {/* Column 1 Header */}
            <div className="mb-3">
              <h2 className="text-gray-300 font-light" style={{ fontSize: '2.2vw' }}>
                What We Can Do Now
              </h2>
            </div>

            {/* Column 1 Features */}
            <div className="space-y-4 border-l-4 border-green-500 pl-8">
              <div className="space-y-1">
                <p className="text-green-400 font-semibold" style={{ fontSize: '1.1vw' }}>
                  Presentation Creation from template
                </p>
                <p className="text-gray-300 font-light" style={{ fontSize: '0.95vw' }}>
                  • Import templates in PDF or PNG format<br />
                  • Default template auto-selection
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-green-400 font-semibold" style={{ fontSize: '1.1vw' }}>
                  Prompt System
                </p>
                <p className="text-gray-300 font-light" style={{ fontSize: '0.95vw' }}>
                  Specify content and style - more precision = better results
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-green-400 font-semibold" style={{ fontSize: '1.1vw' }}>
                  Presentation Display
                </p>
                <p className="text-gray-300 font-light" style={{ fontSize: '0.95vw' }}>
                  Direct chat display with full-screen viewing mode
                </p>
              </div>
            </div>
          </div>

          {/* Column 2 - Upcoming Features */}
          <div className="flex flex-col gap-5">
            {/* Column 2 Header */}
            <div className="mb-3">
              <h2 className="text-gray-300 font-light" style={{ fontSize: '2.2vw' }}>
                Upcoming Features
              </h2>
            </div>

            {/* Column 2 Features */}
            <div className="space-y-4 border-l-4 border-yellow-500 pl-8">
              <div>
                <p className="text-yellow-400 font-semibold" style={{ fontSize: '1.1vw' }}>
                  PDF Export (with light panda)
                </p>
              </div>
              <div>
                <p className="text-yellow-400 font-semibold" style={{ fontSize: '1.1vw' }}>
                  Iterative Editing
                </p>
              </div>
              <div>
                <p className="text-yellow-400 font-semibold" style={{ fontSize: '1.1vw' }}>
                  PowerPoint (PPT) Export
                </p>
              </div>
              <div>
                <p className="text-yellow-400 font-semibold" style={{ fontSize: '1.1vw' }}>
                  Manual Slide Editing
                </p>
              </div>
              <div>
                <p className="text-yellow-400 font-semibold" style={{ fontSize: '1.1vw' }}>
                  Extended File Format Support
                </p>
              </div>
              <div>
                <p className="text-yellow-400 font-semibold" style={{ fontSize: '1.1vw' }}>
                  Document Import
                </p>
              </div>
              <div>
                <p className="text-yellow-400 font-semibold" style={{ fontSize: '1.1vw' }}>
                  Predefined Audience Profiles
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Slide 6: Business Model
  const BusinessPlanSlide = () => (
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
        {/* Title */}
        <h1 className="text-white font-light mb-12" style={{ fontSize: '4.5vw', letterSpacing: '-0.02em' }}>
          Business Model
        </h1>

        {/* Two Column Layout */}
        <div className="flex-1 grid grid-cols-2 gap-16 px-8">
          {/* Left Column - Freemium Model */}
          <div className="flex flex-col gap-8">
            <div className="bg-gray-900 bg-opacity-40 rounded-xl p-6 space-y-4">
              <h2 className="text-blue-400 font-semibold text-center mb-4" style={{ fontSize: '1.8vw' }}>
                Freemium Strategy
              </h2>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center bg-blue-500 rounded-full flex-shrink-0" style={{ width: '2.5vw', height: '2.5vw' }}>
                    <span className="text-white font-bold" style={{ fontSize: '1.2vw' }}>1</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-200 leading-relaxed" style={{ fontSize: '1vw' }}>
                      <span className="font-semibold text-white">Free Demo</span>
                      <br />
                      <span className="font-light">Limited free generations to showcase capabilities</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center bg-purple-500 rounded-full flex-shrink-0" style={{ width: '2.5vw', height: '2.5vw' }}>
                    <span className="text-white font-bold" style={{ fontSize: '1.2vw' }}>2</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-200 leading-relaxed" style={{ fontSize: '1vw' }}>
                      <span className="font-semibold text-white">Web App Conversion</span>
                      <br />
                      <span className="font-light">Drive users to subscription platform</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center bg-green-500 rounded-full flex-shrink-0" style={{ width: '2.5vw', height: '2.5vw' }}>
                    <span className="text-white font-bold" style={{ fontSize: '1.2vw' }}>3</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-200 leading-relaxed" style={{ fontSize: '1vw' }}>
                      <span className="font-semibold text-white">Subscription Plans</span>
                      <br />
                      <span className="font-light">Monthly/yearly access to full features</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Enterprise Services */}
          <div className="flex flex-col gap-8">
            <div className="bg-gray-900 bg-opacity-40 rounded-xl p-6 space-y-4">
              <h2 className="text-orange-400 font-semibold text-center mb-4" style={{ fontSize: '1.8vw' }}>
                Enterprise Services
              </h2>
              
              <div className="space-y-4 pl-4">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-gray-200 leading-relaxed" style={{ fontSize: '1vw' }}>
                      <span className="font-semibold text-white">Custom Templates</span>
                      <br />
                      <span className="font-light">Branded templates tailored to company identity</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-gray-200 leading-relaxed" style={{ fontSize: '1vw' }}>
                      <span className="font-semibold text-white">Audience Profiles</span>
                      <br />
                      <span className="font-light">Pre-configured settings for specific use cases</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-gray-200 leading-relaxed" style={{ fontSize: '1vw' }}>
                      <span className="font-semibold text-white">API Access</span>
                      <br />
                      <span className="font-light">Integration with existing enterprise workflows</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-gray-200 leading-relaxed" style={{ fontSize: '1vw' }}>
                      <span className="font-semibold text-white">Priority Support</span>
                      <br />
                      <span className="font-light">Dedicated assistance and custom solutions</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-6">
          <p className="text-gray-400 italic" style={{ fontSize: '1vw' }}>
            Following the proven model of competitors like Gamma
          </p>
        </div>
      </div>
    </div>
  );

  // Slide 7: Try SlideStorm
  const TrySlideStormSlide = () => (
    <div
      className="w-screen h-screen overflow-hidden relative flex flex-col"
      style={{
        background: '#6b4a7f',
        backgroundImage: 'radial-gradient(ellipse 1800px 1400px at 0% 20%, rgba(60, 30, 70, 0.75) 0%, transparent 60%), radial-gradient(circle 1000px at 100% 12%, #d8b4d8 0%, #c89ad8 15%, #a878b8 35%, rgba(168, 120, 184, 0.4) 55%, transparent 70%)',
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
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-12 py-8">
        {/* Lightning Icon */}
        <div className="mb-6" style={{ fontSize: '4.5vw' }}>
          <span className="text-yellow-400">⚡</span>
        </div>

        {/* Title */}
        <h1 className="text-white font-light text-center mb-3" style={{ fontSize: '4.5vw', letterSpacing: '-0.02em' }}>
          Try SlideStorm Now
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-center mb-10" style={{ fontSize: '1.2vw' }}>
          Create professional presentations in minutes, not hours
        </p>

        {/* Two Cards */}
        <div className="flex flex-col gap-5 w-full max-w-3xl mb-12">
          {/* Card 1 - ChatGPT Plus */}
          <div className="border-3 border-yellow-400 rounded-xl p-5 bg-gray-900 bg-opacity-30">
            <p className="text-yellow-400 font-semibold text-center mb-2" style={{ fontSize: '1.15vw' }}>
              ChatGPT Plus (Developer Mode)
            </p>
            <p className="text-white text-center font-mono" style={{ fontSize: '0.95vw' }}>
              slidestorm-17f72845.alpic.live/mcp
            </p>
          </div>

          {/* Card 2 - Free Emulator */}
          <div className="border-3 border-purple-300 rounded-xl p-5 bg-gray-900 bg-opacity-20">
            <p className="text-purple-200 font-semibold text-center mb-2" style={{ fontSize: '1.15vw' }}>
              Free Emulator (No ChatGPT Required)
            </p>
            <p className="text-white text-center font-mono" style={{ fontSize: '0.95vw' }}>
              slidestorm-17f72845.alpic.live/try
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center gap-3">
          {/* Names */}
          <div className="flex items-center gap-4">
            <div className="bg-gray-900 bg-opacity-40 rounded-lg px-6 py-2">
              <span className="text-white font-medium" style={{ fontSize: '1.05vw' }}>Léandre Le Bizec</span>
            </div>
            <div className="bg-gray-900 bg-opacity-40 rounded-lg px-6 py-2">
              <span className="text-white font-medium" style={{ fontSize: '1.05vw' }}>Bastien Legrand</span>
            </div>
          </div>

          {/* Footer Text */}
          <p className="text-gray-400 text-center" style={{ fontSize: '0.8vw' }}>
            Built at ORIGIN Hackathon - 17-21 January 2026
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      {currentSlide === 0 && <TitleSlide />}
      {currentSlide === 1 && <ProblemSolutionSlide />}
      {currentSlide === 2 && <DemoSlide />}
      {currentSlide === 3 && <TracksSlide />}
      {currentSlide === 4 && <LifecycleSlide />}
      {currentSlide === 5 && <ProgramSlide />}
      {currentSlide === 6 && <BusinessPlanSlide />}
      {currentSlide === 7 && <TrySlideStormSlide />}

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

export default HackathonPresentation;