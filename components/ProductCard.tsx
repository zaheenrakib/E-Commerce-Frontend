import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Star, Heart } from "lucide-react";

export interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  isNew?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative bg-white  rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex gap-2">
        {product.isNew && (
          <span className="bg-teal-600  text-white text-xs font-bold px-2 py-1 rounded-full">
            New
          </span>
        )}
        {product.rating >= 4.8 && (
          <span className="bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            Best Seller
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 dark:bg-black/50 text-gray-600 dark:text-gray-300 hover:text-red-500 hover:bg-white transition-colors opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300">
        <Heart className="h-4 w-4" />
      </button>

      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-zinc-800">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        
        {/* Quick Add Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="w-full bg-white font-medium py-2 rounded-lg shadow-lg hover:bg-teal-600 hover:text-white dark:hover:bg-teal-600 transition-colors flex items-center justify-center gap-2">
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="text-xs mb-1 font-medium uppercase tracking-wider">
          {product.category}
        </div>
        <h3 className="text-lg font-semibold text-teal-700 mb-2 line-clamp-1 group-hover:text-teal-600 transition-colors">
          <Link href={`/products/${product.slug}`}>
            {product.name}
          </Link>
        </h3>
        
        <div className="flex items-center justify-between mt-3">
          <div className="flex flex-col">
             <div className="flex items-center gap-1 mb-1">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              <span className="text-sm font-medium text-gray-700 ">
                {product.rating}
              </span>
              <span className="text-xs text-gray-500">({product.reviews})</span>
            </div>
            <div className="text-xl font-bold text-gray-800">
              ${product.price.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;