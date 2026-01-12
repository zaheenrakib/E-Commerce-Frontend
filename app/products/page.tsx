"use client";

import { useState, useMemo } from "react";
import { Search, ChevronDown } from "lucide-react";
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
const PRICE_RANGES = [
  { key: "all", label: "All prices", range: [0, Infinity] },
  { key: "0-50", label: "0 to 50", range: [0, 50] },
  { key: "50-100", label: "50 to 100", range: [50, 100] },
  { key: "100-200", label: "100 to 200", range: [100, 200] },
  { key: "200-300", label: "200 to 300", range: [200, 300] },
  { key: "300+", label: "More than 300", range: [300, Infinity] },
];

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState<string>("all");

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (selectedCategory !== "All") {
      result = result.filter((product) => product.category === selectedCategory);
    }

    const pr = PRICE_RANGES.find((r) => r.key === priceRange);
    if (pr) {
      const [min, max] = pr.range;
      result = result.filter((p) => p.price >= min && p.price <= max);
    }

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
        break;
    }

    return result;
  }, [selectedCategory, sortBy, priceRange]);

  return (
    <div className="min-h-screen max-w-7xl mx-auto pb-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <aside className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-md p-6 space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Categories</h3>
                <div className="space-y-2">
                  {CATEGORIES.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedCategory === category
                          ? "bg-teal-700 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Price</h3>
                <div className="space-y-2">
                  {PRICE_RANGES.map((r) => (
                    <label key={r.key} className="flex items-center gap-2 text-sm text-gray-700">
                      <input
                        type="radio"
                        name="price"
                        value={r.key}
                        checked={priceRange === r.key}
                        onChange={() => setPriceRange(r.key)}
                        className="accent-teal-600"
                      />
                      {r.label}
                    </label>
                  ))}
                </div>
                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => { setSelectedCategory("All"); setPriceRange("all"); }}
                    className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700"
                  >
                    Reset
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-teal-600 text-white">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </aside>

          <main className="lg:col-span-9">
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{selectedCategory === "All" ? "All Products" : selectedCategory}</h2>
                  <p className="text-sm text-gray-500">{filteredProducts.length} items found</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Sort by:</span>
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="appearance-none pl-3 pr-8 py-2 rounded-lg bg-gray-50 font-medium text-sm text-gray-900 focus:outline-none cursor-pointer hover:bg-gray-100"
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

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">No products found</h3>
                <p className="text-gray-500 mt-2">Try adjusting your filters to find what you're looking for.</p>
                <button 
                  onClick={() => { setSelectedCategory("All"); setPriceRange("all"); }}
                  className="mt-6 px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;