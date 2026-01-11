"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, ShoppingBag, Truck, ShieldCheck } from "lucide-react";

const HeroBanner = () => {
  return (
    <div className="relative w-full bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-sm font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              New Arrival
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
              Experience True <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Audio Perfection
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
              Immerse yourself in crystal-clear sound with our latest noise-cancelling headphones. Designed for comfort, built for performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products/headphones"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:scale-105 transition-all duration-300"
              >
                <ShoppingBag className="h-5 w-5" />
                Shop Now
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-gray-700 font-semibold border border-gray-200 shadow-sm hover:bg-gray-50 hover:text-blue-600 transition-all duration-300 dark:bg-zinc-800 dark:text-gray-200 dark:border-zinc-700 dark:hover:bg-zinc-700"
              >
                View Collection
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-4 text-sm font-medium text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-blue-600" />
                Free Shipping
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-blue-600" />
                2 Year Warranty
              </div>
            </div>
          </div>

          {/* Product Image Section */}
          <div className="relative z-10 lg:h-[500px] flex items-center justify-center">
             {/* Main Image Card */}
            <div className="relative w-full max-w-[500px] aspect-square">
               {/* Abstract Blob Background */}
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full blur-2xl scale-90 animate-pulse"></div>
               
               <div className="relative h-full w-full transition-transform hover:scale-105 duration-500 ease-out">
                 <Image
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop"
                    alt="Premium Headphones"
                    fill
                    className="object-contain drop-shadow-2xl z-10"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                 />
               </div>

               {/* Floating Info Cards */}
               <div className="absolute -bottom-4 -left-4 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20 dark:border-zinc-700/50 animate-bounce delay-1000 duration-[3000ms]">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-8 w-8 rounded-full border-2 border-white dark:border-zinc-800 bg-gray-200 overflow-hidden">
                           <Image 
                             src={`https://images.unsplash.com/photo-${i === 1 ? '1534528741775-53994a69daeb' : i === 2 ? '1506794778202-cad84cf45f1d' : '1507003211169-0a1dd7228f2d'}?auto=format&fit=crop&w=64&q=80`}
                             alt="User"
                             width={32}
                             height={32}
                           />
                        </div>
                      ))}
                    </div>
                    <div className="text-xs">
                      <p className="font-bold text-gray-900 dark:text-white">1k+ Reviews</p>
                      <div className="flex text-yellow-400">
                        <Star className="h-3 w-3 fill-current" />
                        <Star className="h-3 w-3 fill-current" />
                        <Star className="h-3 w-3 fill-current" />
                        <Star className="h-3 w-3 fill-current" />
                        <Star className="h-3 w-3 fill-current" />
                      </div>
                    </div>
                  </div>
               </div>

               <div className="absolute top-10 right-0 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-white/20 dark:border-zinc-700/50 rotate-3 hover:rotate-0 transition-transform">
                  <span className="font-bold text-blue-600">$299.99</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroBanner;