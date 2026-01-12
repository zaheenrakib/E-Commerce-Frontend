"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { 
  Star, 
  Minus, 
  Plus, 
  ShoppingCart, 
  Heart, 
  Share2, 
  Truck, 
  RotateCcw, 
  ShieldCheck,
  ChevronRight,
  User
} from "lucide-react";
import ProductCard from "@/components/ProductCard";

// Mock Data (In a real app, this would be fetched)
const PRODUCTS_DATA = [
  {
    id: 1,
    slug: "wireless-noise-cancelling-headphones",
    name: "Wireless Noise Cancelling Headphones",
    price: 299.99,
    rating: 4.8,
    reviews: 124,
    description: "Experience premium sound quality with our latest noise-cancelling headphones. Featuring adaptive sound control, 30-hour battery life, and plush ear cushions for all-day comfort.",
    sku: "HD-WIRELESS-001",
    stock: 15,
    category: "Electronics",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524678606372-987d7e66c447?q=80&w=1000&auto=format&fit=crop",
    ],
    features: [
      "Active Noise Cancellation",
      "30-hour Battery Life",
      "Multipoint Connection",
      "Voice Assistant Support",
      "Premium Carry Case included"
    ]
  },
  // Add more mock products as needed for demo
];

const RELATED_PRODUCTS = [
  {
    id: 2,
    slug: "smart-fitness-watch-series-5",
    name: "Smart Fitness Watch",
    category: "Wearables",
    price: 199.50,
    rating: 4.6,
    reviews: 850,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    slug: "bluetooth-speaker",
    name: "Bluetooth Speaker",
    category: "Audio",
    price: 89.99,
    rating: 4.5,
    reviews: 320,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    slug: "professional-microphone",
    name: "Professional Microphone",
    category: "Audio",
    price: 149.00,
    rating: 4.7,
    reviews: 150,
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1000&auto=format&fit=crop",
  },
];

const REVIEWS = [
  {
    id: 1,
    user: "Alex M.",
    rating: 5,
    date: "2 days ago",
    comment: "Absolutely amazing sound quality! The noise cancellation is top-notch, blocking out almost everything on my commute.",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 2,
    user: "Sarah K.",
    rating: 4,
    date: "1 week ago",
    comment: "Great headphones, very comfortable. Battery life is impressive. Only wish they came in more colors.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
  }
];

export default function ProductDetailsPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  // Find product by slug
  // For demo purposes, if slug matches our mock product, use it. 
  // Otherwise use the mock product as fallback or show not found.
  // In a real app: const product = await getProductBySlug(slug);
  
  const product = PRODUCTS_DATA.find(p => p.slug === slug) || PRODUCTS_DATA[0];

  // If we wanted to be strict:
  // if (!product) return notFound();

  const handleQuantityChange = (type: "inc" | "dec") => {
    if (type === "dec" && quantity > 1) setQuantity(quantity - 1);
    if (type === "inc" && quantity < product.stock) setQuantity(quantity + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black pb-20">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <Link href="/" className="hover:text-teal-600">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/products" className="hover:text-teal-600">Products</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-900 dark:text-white font-medium truncate max-w-[200px]">
            {product.name}
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 bg-white dark:bg-zinc-900 rounded-2xl p-6 lg:p-8 shadow-sm">
          
          {/* Left Column: Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-gray-100 dark:bg-zinc-800 rounded-2xl overflow-hidden group">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                priority
              />
              <div className="absolute top-4 right-4 z-10">
                <button className="p-2 bg-white/80 dark:bg-black/50 backdrop-blur-sm rounded-full text-gray-600 dark:text-gray-300 hover:text-red-500 transition-colors">
                  <Heart className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? "border-teal-600 ring-2 ring-teal-600/20"
                      : "border-transparent hover:border-gray-300 dark:hover:border-zinc-700"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`View ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Product Info */}
          <div className="flex flex-col">
            <div className="mb-2 flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold dark:bg-blue-900/30 dark:text-blue-300">
                In Stock
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                SKU: {product.sku}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-current"
                          : "text-gray-300 dark:text-zinc-700"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-medium ml-2">{product.rating}</span>
                <span className="text-gray-500 dark:text-gray-400">
                  ({product.reviews} reviews)
                </span>
              </div>
              <div className="w-px h-5 bg-gray-300 dark:bg-zinc-700"></div>
              <button className="flex items-center gap-2 text-sm text-teal-600 hover:underline">
                <Share2 className="h-4 w-4" />
                Share
              </button>
            </div>

            <div className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
              ${product.price}
            </div>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Actions */}
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="flex items-center border border-gray-300 dark:border-zinc-700 rounded-lg">
                  <button
                    onClick={() => handleQuantityChange("dec")}
                    className="p-3 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors rounded-l-lg disabled:opacity-50"
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange("inc")}
                    className="p-3 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors rounded-r-lg disabled:opacity-50"
                    disabled={quantity >= product.stock}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Only {product.stock} items left!
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-teal-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-teal-600/20">
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </button>
                <button className="flex-1 bg-gray-900 text-white dark:bg-white dark:text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all">
                  Buy Now
                </button>
              </div>
            </div>

            {/* Features/Trust */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-100 dark:border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-teal-600">
                  <Truck className="h-5 w-5" />
                </div>
                <div className="text-sm">
                  <p className="font-semibold">Free Delivery</p>
                  <p className="text-gray-500">Orders over $50</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-purple-600">
                  <RotateCcw className="h-5 w-5" />
                </div>
                <div className="text-sm">
                  <p className="font-semibold">30 Days Return</p>
                  <p className="text-gray-500">Hassle-free</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-lg text-green-600">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div className="text-sm">
                  <p className="font-semibold">2 Year Warranty</p>
                  <p className="text-gray-500">Full coverage</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-12">
          <div className="flex border-b border-gray-200 dark:border-zinc-800 mb-8">
            {["description", "reviews", "shipping"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 font-medium text-sm transition-colors relative ${
                  activeTab === tab
                    ? "text-teal-600"
                    : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-600"></span>
                )}
              </button>
            ))}
          </div>

          <div className="min-h-[200px]">
            {activeTab === "description" && (
              <div className="prose dark:prose-invert max-w-none">
                <h3 className="text-xl font-bold mb-4">Product Features</h3>
                <ul className="space-y-2 list-disc pl-5">
                  {product.features.map((feature, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-300">{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">Customer Reviews ({product.reviews})</h3>
                  <button className="px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors">
                    Write a Review
                  </button>
                </div>
                <div className="grid gap-6">
                  {REVIEWS.map((review) => (
                    <div key={review.id} className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-gray-100 dark:border-zinc-800">
                      <div className="flex items-start gap-4">
                        <div className="relative h-10 w-10 rounded-full overflow-hidden bg-gray-200">
                          <Image src={review.avatar} alt={review.user} fill className="object-cover" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-bold">{review.user}</h4>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          <div className="flex text-amber-400 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`h-4 w-4 ${i < review.rating ? "fill-current" : "text-gray-300"}`} />
                            ))}
                          </div>
                          <p className="text-gray-600 dark:text-gray-300">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "shipping" && (
              <div className="prose dark:prose-invert max-w-none">
                <h3 className="text-xl font-bold mb-4">Shipping Information</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We offer free standard shipping on all orders over $50. Standard shipping typically takes 3-5 business days.
                  Expedited shipping options are available at checkout.
                </p>
                <h3 className="text-xl font-bold mb-4">Returns Policy</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  If you are not completely satisfied with your purchase, you can return it within 30 days of receipt for a full refund.
                  Items must be unused and in their original packaging.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RELATED_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}