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
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm transition-all">
      
      {/* Top Row: Functional Layer */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between gap-8">
          
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-teal-700 text-white p-2 rounded-xl transition-transform group-hover:scale-110">
              <ShoppingCart className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-teal-700">
              Luxe<span className="text-teal-500">Mart</span>
            </span>
          </Link>

          {/* Middle: Search Bar (Hidden on Mobile) */}
          <div className="hidden md:flex flex-1 max-w-xl mx-auto">
            <div className="flex w-full relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search essentials, groceries, and more..."
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-transparent rounded-full text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-black/5 transition-all"
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                 <button className="h-full px-4 text-gray-500 hover:text-black font-medium text-sm border-l border-gray-200 transition-colors">
                   Search
                 </button>
              </div>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-6 shrink-0">
            {/* Mobile Search Toggle */}
            <button className="md:hidden text-gray-900 hover:text-gray-600 transition-colors">
              <Search className="h-6 w-6" />
            </button>

            {/* Wishlist */}
            <Link href="/wishlist" className="hidden md:flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors group">
              <div className="relative">
                <Heart className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-black text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white">3</span>
              </div>
              <span className="hidden lg:block text-sm font-medium">Wishlist</span>
            </Link>

            {/* Cart */}
            <div 
              className="relative group z-50"
              onMouseEnter={() => setIsCartOpen(true)}
              onMouseLeave={() => setIsCartOpen(false)}
            >
              <Link href="/cart" className="flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors">
                <div className="relative">
                  <ShoppingCart className="h-6 w-6" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-black text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white">2</span>
                </div>
                <span className="hidden lg:block text-sm font-medium">Cart</span>
              </Link>
              
              {/* Mini Cart Dropdown */}
              {isCartOpen && (
                <div className="absolute top-full right-0 mt-4 w-80 bg-white shadow-2xl rounded-2xl border border-gray-100 p-6 z-50 hidden md:block animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-100">
                    <p className="font-bold text-gray-900">Shopping Cart (2)</p>
                    <span className="text-xs text-gray-500">Subtotal: $499.49</span>
                  </div>
                  <div className="space-y-4 mb-6">
                     {/* Mock Item 1 */}
                     <div className="flex gap-4">
                       <div className="h-16 w-16 bg-gray-100 rounded-lg flex-shrink-0"></div>
                       <div className="flex-1 min-w-0">
                         <p className="text-sm font-medium text-gray-900 truncate">Wireless Headphones</p>
                         <p className="text-xs text-gray-500 mt-1">Black • Qty 1</p>
                         <p className="text-sm font-semibold text-gray-900 mt-1">$299.99</p>
                       </div>
                     </div>
                     {/* Mock Item 2 */}
                     <div className="flex gap-4">
                       <div className="h-16 w-16 bg-gray-100 rounded-lg flex-shrink-0"></div>
                       <div className="flex-1 min-w-0">
                         <p className="text-sm font-medium text-gray-900 truncate">Smart Watch Series 7</p>
                         <p className="text-xs text-gray-500 mt-1">Silver • Qty 1</p>
                         <p className="text-sm font-semibold text-gray-900 mt-1">$199.50</p>
                       </div>
                     </div>
                  </div>
                  <div className="space-y-2">
                    <Link href="/cart" className="block w-full bg-teal-700 text-white text-center py-3 rounded-full text-sm font-bold hover:bg-gray-800 transition-colors">
                      Checkout
                    </Link>
                    <Link href="/cart" className="block w-full bg-white text-black border border-gray-200 text-center py-3 rounded-full text-sm font-bold hover:bg-gray-50 transition-colors">
                      View Cart
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* User Auth */}
            <Link href="/login" className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-teal-800 text-white text-sm font-medium hover:bg-teal-700 transition-colors shadow-sm">
              <User className="h-4 w-4" />
              <span>Login</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
      </div>

      {/* Bottom Row: Discovery Layer (Clean & Minimal) */}
      <div className="hidden md:block border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex justify-center h-12">
             <ul className="flex items-center gap-10">
               <li>
                 <Link href="/products" className="text-sm font-medium text-gray-900 hover:text-gray-500 transition-colors">
                   New Arrivals
                 </Link>
               </li>
               {CATEGORIES.map((category) => (
                 <li key={category}>
                   <Link 
                     href={`/products?category=${category}`} 
                     className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
                   >
                     {category}
                   </Link>
                 </li>
               ))}
               <li>
                 <Link href="/deals" className="text-sm font-medium text-gray-900 hover:text-gray-500 transition-colors">
                   Sale
                 </Link>
               </li>
             </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
               <span className="text-lg font-bold">Menu</span>
               <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                 <X className="h-6 w-6" />
               </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <div>
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Shop Categories</h3>
                <div className="grid grid-cols-1 gap-1">
                  {CATEGORIES.map((category) => (
                    <Link 
                      key={category}
                      href={`/products?category=${category}`}
                      className="flex items-center justify-between px-2 py-3 text-gray-900 hover:bg-gray-50 rounded-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {category}
                      <ChevronDown className="-rotate-90 h-4 w-4 text-gray-400" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6 space-y-4">
                <Link href="/wishlist" className="flex items-center gap-3 text-gray-900 font-medium">
                  <Heart className="h-5 w-5" />
                  My Wishlist
                </Link>
                <Link href="/account" className="flex items-center gap-3 text-gray-900 font-medium">
                  <User className="h-5 w-5" />
                  My Account
                </Link>
                <Link href="/login" className="flex items-center justify-center gap-2 w-full py-3 bg-black text-white rounded-xl font-bold mt-4">
                  <LogIn className="h-5 w-5" />
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;