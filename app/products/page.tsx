"use client";

import React, { useState, useMemo } from "react";
import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";
import ProductCard, { Product } from "@/components/ProductCard";

// Mock Data
const PRODUCTS: Product[] = [
  {
    id: 1,
    slug: "wireless-noise-cancelling-headphones",
    name: "Wireless Noise Cancelling Headphones",
    category: "Electronics",
    price: 299.99,
    rating: 4.8,
    reviews: 1240,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
    isNew: true,
  },
  {
    id: 2,
    slug: "smart-fitness-watch-series-5",
    name: "Smart Fitness Watch Series 5",
    category: "Wearables",
    price: 199.50,
    rating: 4.6,
    reviews: 850,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    slug: "ergonomic-office-chair",
    name: "Ergonomic Office Chair",
    category: "Furniture",
    price: 249.00,
    rating: 4.5,
    reviews: 420,
    image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    slug: "minimalist-mechanical-keyboard",
    name: "Minimalist Mechanical Keyboard",
    category: "Electronics",
    price: 129.99,
    rating: 4.9,
    reviews: 2100,
    image: "https://images.unsplash.com/photo-1595044426077-d36d9236d54a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isNew: true,
  },
  {
    id: 5,
    slug: "premium-leather-backpack",
    name: "Premium Leather Backpack",
    category: "Accessories",
    price: 89.95,
    rating: 4.7,
    reviews: 315,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 6,
    slug: "organic-cotton-t-shirt",
    name: "Organic Cotton T-Shirt",
    category: "Clothing",
    price: 24.99,
    rating: 4.3,
    reviews: 150,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 7,
    slug: "4k-ultra-hd-action-camera",
    name: "4K Ultra HD Action Camera",
    category: "Electronics",
    price: 349.00,
    rating: 4.4,
    reviews: 670,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 8,
    slug: "ceramic-coffee-mug-set",
    name: "Ceramic Coffee Mug Set",
    category: "Home",
    price: 39.99,
    rating: 4.8,
    reviews: 540,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=1000&auto=format&fit=crop",
  },
];

const CATEGORIES = ["All", "Electronics", "Wearables", "Furniture", "Accessories", "Clothing", "Home"];

const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter and Sort Logic
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Filter by Category
    if (selectedCategory !== "All") {
      result = result.filter((product) => product.category === selectedCategory);
    }

    // Filter by Search
    if (searchQuery) {
      result = result.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Featured or default order
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black pb-20">
      {/* Header & Controls */}
      <div className="bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800 sticky top-16 z-30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            
            {/* Title & Count */}
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Shop All Products</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Showing {filteredProducts.length} results
              </p>
            </div>

            {/* Search & Actions */}
            <div className="flex w-full md:w-auto gap-3">
              <div className="relative flex-1 md:w-80">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              
              <button 
                className="md:hidden p-2.5 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <SlidersHorizontal className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </button>
            </div>
          </div>

          {/* Filters Row (Desktop) */}
          <div className={`mt-4 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between ${isFilterOpen ? 'block' : 'hidden md:flex'}`}>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-gray-900 text-white dark:bg-white dark:text-black"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-zinc-800 dark:text-gray-300 dark:hover:bg-zinc-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">Sort by:</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none pl-3 pr-8 py-1.5 rounded-lg bg-transparent font-medium text-sm text-gray-900 dark:text-white focus:outline-none cursor-pointer hover:bg-gray-100 dark:hover:bg-zinc-800"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 py-8">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-gray-100 dark:bg-zinc-800 mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">No products found</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Try adjusting your search or filters to find what you're looking for.
            </p>
            <button 
              onClick={() => {setSearchQuery(""); setSelectedCategory("All");}}
              className="mt-6 px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;