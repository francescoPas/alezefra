"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [countdown, setCountdown] = useState<string>("00:00:00");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const targetDate = new Date(2026, 4, 31, 0, 0, 0);
      const diff = Math.max(0, Math.floor((targetDate.getTime() - now.getTime()) / 1000));

      const hours = Math.floor(diff / 3600);
      const minutes = Math.floor((diff % 3600) / 60);
      const seconds = diff % 60;

      setCountdown(
        `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
      );
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-black">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-yellow-900/20 animate-pulse"></div>
      
      {/* Animated orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-red-500/30 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-yellow-500/30 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-orange-500/20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Title with glow effect */}
        <div className={`transition-all duration-1000 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-300 to-red-300 drop-shadow-2xl pt-20 animate-pulse-slow">
            ALEZ & FRA
          </h1>
          <div className="h-1 w-80 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 mx-auto mt-6 rounded-full shadow-lg shadow-red-500/50 animate-pulse"></div>
        </div>

        {/* Countdown */}
        <div className={`transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="mt-20 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 rounded-lg blur opacity-30 animate-pulse"></div>
            <p className="relative text-6xl md:text-7xl font-mono font-bold text-white mt-16 tracking-widest px-8 py-6 bg-black/50 backdrop-blur-sm rounded-lg border border-red-500/30">
              {countdown}
            </p>
          </div>
        </div>

        {/* Stay Tuned */}
        <div className={`transition-all duration-1000 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-red-300 mt-16 tracking-widest animate-pulse-slow">
            STAY TUNED!
          </p>
        </div>

        {/* Decorative dots */}
        <div className="mt-20 flex gap-2 justify-center">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}
