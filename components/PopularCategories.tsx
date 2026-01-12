"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

const categories = [
  { id: 1, name: "Footwear", image: "/icons/shoe.png" },
  { id: 2, name: "Clothing", image: "/icons/clothing.png" },
  { id: 3, name: "Electronics", image: "/icons/electronics.png" },
  { id: 4, name: "Accessories", image: "/icons/accessories.png" },
  { id: 5, name: "Toys", image: "/icons/toys.png" },
  { id: 6, name: "Sports", image: "/icons/sports.png" },
];

const PopularCategories = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Popular Categories
      </h2>

      <Swiper
        modules={[FreeMode]}
        spaceBetween={16}
        slidesPerView="auto"
        freeMode={true}
        className="pb-4"
      >
        {categories.map((category) => (
          <SwiperSlide
            key={category.id}
            className="!w-28 sm:!w-32 md:!w-36"
          >
            <div className="flex flex-col items-center bg-white rounded-full sm:rounded-2xl shadow-sm hover:shadow-md transition p-4 cursor-pointer">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 mb-3">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <p className="text-sm font-medium text-gray-800 text-center">
                {category.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PopularCategories;
