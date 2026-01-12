"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, User, Menu, X, Heart, ChevronDown, LogIn } from "lucide-react";

const CATEGORIES = [
  "Electronics",
  "Fashion",
  "Home & Decor",
  "Beauty",
  "Sports",
  "Toys",
  "Automotive"
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-zinc-950 border-b border-gray-200 dark:border-zinc-800 shadow-sm">
      
      {/* Top Row: Functional Layer */}
      <div className="border-b border-gray-100 dark:border-zinc-800">
        <div className="container mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between gap-4">
          
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold shrink-0">
            <div className="bg-teal-600 text-white p-1 rounded-lg">
              <ShoppingCart className="h-6 w-6" />
            </div>
            <span>Best<span className="text-teal-600">Buy</span></span>
          </Link>

          {/* Middle: Search Bar (Hidden on Mobile) */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-auto">
            <div className="flex w-full">
              <div className="relative">
                <select className="h-full px-4 py-2.5 rounded-l-full border-y border-l border-gray-300 bg-gray-50 text-sm text-gray-700 focus:outline-none focus:border-blue-500 hover:bg-gray-100 cursor-pointer appearance-none pr-8 dark:bg-zinc-900 dark:border-zinc-700 dark:text-gray-300">
                  <option>All Categories</option>
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
              </div>
              <input
                type="text"
                placeholder="Search for products..."
                className="flex-1 px-4 py-2.5 border border-gray-300 border-l-0 bg-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:bg-zinc-900 dark:border-zinc-700"
              />
              <button className="px-6 py-2.5 bg-teal-600 text-white rounded-r-full hover:bg-blue-700 transition-colors">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-4 shrink-0">
            {/* Mobile Search Toggle */}
            <button className="md:hidden p-2 text-gray-700 dark:text-gray-200">
              <Search className="h-6 w-6" />
            </button>

            {/* Wishlist */}
            <Link href="/wishlist" className="hidden md:flex flex-col items-center gap-1 group text-gray-700 dark:text-gray-300 hover:text-teal-600">
              <div className="relative">
                <Heart className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full">3</span>
              </div>
              <span className="text-xs font-medium">Wishlist</span>
            </Link>

            {/* Cart with Mini-Cart Hover */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsCartOpen(true)}
              onMouseLeave={() => setIsCartOpen(false)}
            >
              <Link href="/cart" className="flex flex-col items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-teal-600">
                <div className="relative">
                  <ShoppingCart className="h-6 w-6" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-teal-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full">2</span>
                </div>
                <span className="hidden md:block text-xs font-medium">Cart</span>
              </Link>
              
              {/* Mini Cart Dropdown */}
              {isCartOpen && (
                <div className="absolute top-full right-0 mt-2 w-72 bg-white dark:bg-zinc-900 shadow-xl rounded-lg border border-gray-100 dark:border-zinc-800 p-4 z-50 hidden md:block animate-in fade-in slide-in-from-top-2 duration-200">
                  <p className="text-sm font-semibold mb-3 pb-2 border-b dark:border-zinc-800">Shopping Cart (2)</p>
                  <div className="space-y-3 mb-4">
                     {/* Mock Item 1 */}
                     <div className="flex gap-3">
                       <div className="h-12 w-12 bg-gray-100 rounded"></div>
                       <div className="flex-1">
                         <p className="text-sm font-medium line-clamp-1">Wireless Headphones</p>
                         <p className="text-xs text-gray-500">1 x $299.99</p>
                       </div>
                     </div>
                     {/* Mock Item 2 */}
                     <div className="flex gap-3">
                       <div className="h-12 w-12 bg-gray-100 rounded"></div>
                       <div className="flex-1">
                         <p className="text-sm font-medium line-clamp-1">Smart Watch</p>
                         <p className="text-xs text-gray-500">1 x $199.50</p>
                       </div>
                     </div>
                  </div>
                  <div className="flex justify-between font-bold text-sm mb-4">
                    <span>Total:</span>
                    <span>$499.49</span>
                  </div>
                  <Link href="/cart" className="block w-full bg-teal-600 text-white text-center py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                    View Cart
                  </Link>
                </div>
              )}
            </div>

            {/* User Auth */}
            <Link href="/login" className="hidden md:flex flex-col items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-teal-600">
              <User className="h-6 w-6" />
              <span className="text-xs font-medium">Login</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-700 dark:text-gray-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Row: Discovery Layer */}
      <div className="hidden md:block bg-gray-50 dark:bg-zinc-900/50 border-b border-gray-200 dark:border-zinc-800">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex justify-center items-center h-12">
             <ul className="flex items-center gap-8">
               <li>
                 <Link href="/products" className="text-sm font-semibold text-gray-900 dark:text-white hover:text-teal-600">
                   All Products
                 </Link>
               </li>
               {CATEGORIES.map((category) => (
                 <li key={category}>
                   <Link 
                     href={`/products?category=${category}`} 
                     className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-teal-600 transition-colors"
                   >
                     {category}
                   </Link>
                 </li>
               ))}
               <li>
                 <Link href="/deals" className="text-sm font-medium text-red-600 hover:text-red-700">
                   Hot Deals
                 </Link>
               </li>
             </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-zinc-950 border-b border-gray-200 dark:border-zinc-800 shadow-lg p-4 max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="space-y-6">
             {/* Mobile Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-900"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>

            {/* Mobile Categories */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Shop by Category</h3>
              <div className="grid grid-cols-2 gap-2">
                {CATEGORIES.map((category) => (
                  <Link 
                    key={category}
                    href={`/products?category=${category}`}
                    className="px-3 py-2 rounded-md bg-gray-50 dark:bg-zinc-900 text-sm text-gray-700 dark:text-gray-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Account Links */}
            <div className="border-t border-gray-100 dark:border-zinc-800 pt-4 space-y-3">
              <Link href="/wishlist" className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <Heart className="h-5 w-5" />
                <span>My Wishlist</span>
              </Link>
              <Link href="/account" className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <User className="h-5 w-5" />
                <span>My Account</span>
              </Link>
              <Link href="/login" className="flex items-center gap-3 text-teal-600 font-medium">
                <LogIn className="h-5 w-5" />
                <span>Sign In / Register</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;