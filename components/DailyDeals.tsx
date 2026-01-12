"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

type Deal = {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  available: number;
};

const deals: Deal[] = [
  { id: 1, name: "Fastrack Fleek Quartz Analog With Day and Date Blu", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop", price: 5300, originalPrice: 6300, available: 1 },
  { id: 2, name: "Philips Hp8108 1000 Watts Hair Dryer", image: "https://images.unsplash.com/photo-1586201375754-1421e8a53a93?q=80&w=1000&auto=format&fit=crop", price: 1800, originalPrice: 2599, available: 61 },
  { id: 3, name: "Ww1436 Casio Vintage Digital Rose Gold Chain Watch", image: "https://images.unsplash.com/photo-1512069772990-ec0b1341267f?q=80&w=1000&auto=format&fit=crop", price: 6000, originalPrice: 7490, available: 39 },
  { id: 4, name: "Philips Nati00 1000 Series Compact Air Fryer | 4.2", image: "https://images.unsplash.com/photo-1546069901-eacef0df84d5?q=80&w=1000&auto=format&fit=crop", price: 7500, originalPrice: 13390, available: 3 },
  { id: 5, name: "West Bay Premium Comforter Wb 2981", image: "https://images.unsplash.com/photo-1496412705862-4d1b1f0c8f59?q=80&w=1000&auto=format&fit=crop", price: 2000, originalPrice: 3000, available: 20 },
  { id: 6, name: "Kemei Km-3365 Hot And Normal Air Foldable Hair Dry", image: "https://images.unsplash.com/photo-1587951506215-5b5f3821d891?q=80&w=1000&auto=format&fit=crop", price: 1099, originalPrice: 1799, available: 77 },
];

const DailyDeals: React.FC = () => {
  const [remaining, setRemaining] = useState<number>(0);
  const target = useMemo(() => Date.now() + 12 * 60 * 60 * 1000, []);

  useEffect(() => {
    const tick = () => setRemaining(Math.max(0, target - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  const hours = String(Math.floor(remaining / 3600000)).padStart(2, "0");
  const minutes = String(Math.floor((remaining % 3600000) / 60000)).padStart(2, "0");
  const seconds = String(Math.floor((remaining % 60000) / 1000)).padStart(2, "0");

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const format = (n: number) => `৳ ${n.toLocaleString("en-US")}`;

  return (
    <section className="px-4 py-8 bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 text-white rounded-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">Daily Deals</h2>
            <div className="hidden sm:flex items-center gap-2 text-sm">
              <span className="uppercase tracking-wider">Ends in</span>
              <span className="px-2 py-1 bg-white/20 rounded-md">{hours}</span>
              <span>:</span>
              <span className="px-2 py-1 bg-white/20 rounded-md">{minutes}</span>
              <span>:</span>
              <span className="px-2 py-1 bg-white/20 rounded-md">{seconds}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button ref={prevRef} className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition">‹</button>
            <button ref={nextRef} className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition">›</button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={16}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            768: { slidesPerView: 3.2 },
            1024: { slidesPerView: 4.2 },
            1280: { slidesPerView: 5.2 },
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          onBeforeInit={(sw) => {
            // @ts-ignore
            sw.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            sw.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          loop
        >
          {deals.map((d) => (
            <SwiperSlide key={d.id}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden text-gray-900">
                <div className="relative h-40 flex items-center justify-center bg-white">
                  <img src={d.image} alt={d.name} className="h-36 object-contain" />
                  <div className="absolute left-3 top-3 bg-red-600 text-white text-xs font-bold rounded px-2 py-1">
                    Save {format(d.originalPrice - d.price)}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold">{format(d.price)}</span>
                    <span className="text-sm line-through text-gray-400">{format(d.originalPrice)}</span>
                  </div>
                  <p className="mt-2 text-sm font-medium line-clamp-2">{d.name}</p>
                  <div className="mt-3 text-xs text-gray-600">Available: {d.available}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default DailyDeals