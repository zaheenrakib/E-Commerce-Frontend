"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    id: 1,
    title: "Minimalist Living, Maximum Style",
    subtitle: "Discover curated collections that bring calm and sophistication to your everyday life.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop",
    accent: "bg-amber-500",
    link: "/products/furniture"
  },
  {
    id: 2,
    title: "Essential Wardrobe Staples",
    subtitle: "Timeless pieces crafted with premium materials for lasting comfort and elegance.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
    accent: "bg-slate-600",
    link: "/products/fashion"
  },
  {
    id: 3,
    title: "Functional Beauty Essentials",
    subtitle: "Skincare and wellness products designed for natural radiance and mindful self-care.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop",
    accent: "bg-rose-400",
    link: "/products/beauty"
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
    <div className="relative w-full h-[600px] md:h-[700px] bg-white overflow-hidden group">
      
      {/* Slides */}
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="container mx-auto px-4 md:px-6 h-full flex items-center">
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
              
              {/* Content */}
              <div className={`space-y-8 transform transition-all duration-1000 delay-300 ${
                index === currentSlide ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 text-sm font-medium text-gray-600">
                  <span className={`relative flex h-2 w-2 ${slide.accent} rounded-full`}></span>
                  New Collection
                </div>

                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-teal-600 leading-tight">
                  {slide.title}
                </h1>

                <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                  {slide.subtitle}
                </p>

                <div className="flex gap-4 pt-4 ">
                  <Link
                    href={slide.link}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-teal-600 text-white font-semibold hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-lg shadow-gray-900/10"
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
                   <div className="absolute inset-0 bg-gray-50 rounded-3xl scale-90"></div>
                   <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-contain drop-shadow-xl z-10 rounded-2xl"
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
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/80 backdrop-blur-md shadow-lg hover:bg-white transition-all opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 duration-300"
      >
        <ChevronLeft className="h-6 w-6 text-gray-900" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/80 backdrop-blur-md shadow-lg hover:bg-white transition-all opacity-0 group-hover:opacity-100 translate-x-10 group-hover:translate-x-0 duration-300"
      >
        <ChevronRight className="h-6 w-6 text-gray-900" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-gray-900 w-8" 
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

    </div>
  );
};

export default HeroBanner;