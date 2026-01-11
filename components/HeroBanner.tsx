"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    id: 1,
    title: "Experience True Audio Perfection",
    subtitle: "Immerse yourself in crystal-clear sound with our latest noise-cancelling headphones.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
    color: "from-blue-600 to-purple-600",
    bg: "bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900",
    link: "/products/headphones"
  },
  {
    id: 2,
    title: "Next Gen Smart Wearables",
    subtitle: "Track your fitness, stay connected, and look stylish with our new smart watch collection.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
    color: "from-emerald-500 to-teal-500",
    bg: "bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900",
    link: "/products/watches"
  },
  {
    id: 3,
    title: "Capture Every Moment",
    subtitle: "Professional grade cameras for photography enthusiasts and creators.",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1000&auto=format&fit=crop",
    color: "from-orange-500 to-red-500",
    bg: "bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900",
    link: "/products/cameras"
  }
];

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden group">
      
      {/* Slides */}
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          } ${slide.bg}`}
        >
          <div className="container mx-auto px-4 md:px-6 h-full flex items-center">
            <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
              
              {/* Content */}
              <div className={`space-y-6 transform transition-all duration-1000 delay-300 ${
                index === currentSlide ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-gray-200 dark:border-zinc-800 text-sm font-semibold">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  Featured Collection
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r ${slide.color}`}>
                    {slide.title}
                  </span>
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg">
                  {slide.subtitle}
                </p>

                <div className="flex gap-4 pt-4">
                  <Link
                    href={slide.link}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-800 hover:scale-105 transition-all duration-300 dark:bg-white dark:text-black dark:hover:bg-gray-100"
                  >
                    <ShoppingBag className="h-5 w-5" />
                    Shop Now
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className={`relative h-[400px] lg:h-[600px] flex items-center justify-center transform transition-all duration-1000 delay-500 ${
                index === currentSlide ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95"
              }`}>
                 <div className="relative w-full h-full">
                   <div className={`absolute inset-0 bg-gradient-to-tr ${slide.color} opacity-20 rounded-full blur-3xl scale-75 animate-pulse`}></div>
                   <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-contain drop-shadow-2xl z-10"
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, 50vw"
                   />
                 </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-md shadow-lg hover:bg-white dark:hover:bg-black transition-all opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 duration-300"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-md shadow-lg hover:bg-white dark:hover:bg-black transition-all opacity-0 group-hover:opacity-100 translate-x-10 group-hover:translate-x-0 duration-300"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-gray-900 w-8 dark:bg-white" 
                : "bg-gray-400/50 hover:bg-gray-600 dark:bg-gray-600/50"
            }`}
          />
        ))}
      </div>

    </div>
  );
};

export default HeroBanner;