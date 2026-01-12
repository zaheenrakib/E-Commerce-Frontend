"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

const categories = [
  { id: 1, name: "Footwear", image: "/assets/category/footwear.jpg" },
  { id: 2, name: "Clothing", image: "/assets/category/clothing.jpg" },
  { id: 3, name: "Electronics", image: "/assets/category/electronics.jpg" },
  { id: 4, name: "Accessories", image: "/assets/category/accessories.jpg" },
  { id: 5, name: "Toys", image: "/assets/category/toys.jpg" },
  { id: 6, name: "Sports", image: "/assets/category/sports.jpg" },
  { id: 7, name: "Clothing", image: "/assets/category/clothing.jpg" },
  { id: 9, name: "Electronics", image: "/assets/category/electronics.jpg" },
  { id: 10, name: "Accessories", image: "/assets/category/accessories.jpg" },
  { id: 11, name: "Toys", image: "/assets/category/toys.jpg" },
  { id: 12, name: "Sports", image: "/assets/category/sports.jpg" },
];

const PopularCategories = () => {
  const [loading, setLoading] = useState(true);

  // Simulate API loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="px-4 py-8 bg-white">
      <h2 className="text-4xl font-semibold text-gray-900 mb-6">
        Popular Categories
      </h2>

      {loading ? (
        <div className="flex gap-6 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gray-200 animate-pulse" />
              <div className="mt-3 w-16 h-3 bg-gray-200 rounded animate-pulse" />
            </div>
          ))}
        </div>
      ) : (
        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView="auto"
          spaceBetween={14}
          freeMode
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop
        >
          {categories.map((category) => (
            <SwiperSlide
              key={category.id}
              className="!w-24 sm:!w-28 md:!w-32"
            >
              <div className="flex flex-col items-center cursor-pointer group">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-sm group-hover:shadow-md transition">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-3 text-sm font-medium text-gray-800 text-center group-hover:text-indigo-600 transition">
                  {category.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default PopularCategories;
