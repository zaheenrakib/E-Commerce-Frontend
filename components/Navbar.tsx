"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, User, Menu, X, Heart } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-zinc-950 dark:border-zinc-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <span className="text-blue-600">Store</span>Name
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 items-center">
            <Link href="/" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Shop
            </Link>
            <Link href="/categories" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Categories
            </Link>
            <Link href="/deals" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Deals
            </Link>
          </nav>

          {/* Icons & Actions */}
          <div className="flex items-center gap-4">

            <div className="hidden md:flex items-center flex-1 mx-8 relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full rounded-full border border-gray-200 bg-gray-50 px-4 py-2 pl-4 pr-10 text-sm focus:border-blue-500 focus:bg-white focus:outline-none dark:bg-zinc-900 dark:border-zinc-800"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600">
              <Search className="h-4 w-4" />
            </button>
          </div>
            {/* Mobile Search Toggle (Optional) */}
            <button className="md:hidden text-gray-700 dark:text-gray-200">
              <Search className="h-5 w-5" />
            </button>

            <Link href="/wishlist" className="hidden md:block text-gray-700 hover:text-blue-600 dark:text-gray-200">
              <Heart className="h-5 w-5" />
            </Link>

            <Link href="/cart" className="relative text-gray-700 hover:text-blue-600 dark:text-gray-200">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] text-white">
                2
              </span>
            </Link>

            <Link href="/account" className="hidden md:block text-gray-700 hover:text-blue-600 dark:text-gray-200">
              <User className="h-5 w-5" />
            </Link>
            
            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-gray-700 dark:text-gray-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white p-4 dark:bg-zinc-950 dark:border-zinc-800">
          <div className="space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-md border border-gray-200 bg-gray-50 p-2 pl-10 text-sm focus:border-blue-500 focus:outline-none dark:bg-zinc-900 dark:border-zinc-800"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-50 dark:hover:bg-zinc-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-50 dark:hover:bg-zinc-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                href="/categories"
                className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-50 dark:hover:bg-zinc-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Categories
              </Link>
              <Link
                href="/account"
                className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-50 dark:hover:bg-zinc-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                My Account
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;