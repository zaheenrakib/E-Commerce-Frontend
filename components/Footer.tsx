"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 dark:bg-zinc-950 dark:border-zinc-800 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Newsletter Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-2">Subscribe to our newsletter</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Get the latest updates on new products and upcoming sales.
            </p>
          </div>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm focus:border-blue-500 focus:outline-none dark:bg-zinc-900 dark:border-zinc-700"
            />
            <button className="bg-teal-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-bold mb-4 block">
              <span className="text-white">Best<span className="text-teal-600">Buy</span></span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Your one-stop destination for premium products. Quality meets affordability in every purchase.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-teal-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-pink-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/products?category=new" className="hover:text-teal-600">New Arrivals</Link></li>
              <li><Link href="/products?category=bestsellers" className="hover:text-teal-600">Best Sellers</Link></li>
              <li><Link href="/products?category=electronics" className="hover:text-teal-600">Electronics</Link></li>
              <li><Link href="/products?category=fashion" className="hover:text-teal-600">Fashion</Link></li>
              <li><Link href="/deals" className="hover:text-teal-600">Deals</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/contact" className="hover:text-teal-600">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:text-teal-600">FAQs</Link></li>
              <li><Link href="/shipping" className="hover:text-teal-600">Shipping Info</Link></li>
              <li><Link href="/returns" className="hover:text-teal-600">Returns & Exchanges</Link></li>
              <li><Link href="/tracking" className="hover:text-teal-600">Order Tracking</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-teal-600 shrink-0" />
                <span>123 Commerce St, Market City, ST 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-teal-600 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-teal-600 shrink-0" />
                <span>support@storename.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 dark:border-zinc-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} StoreName. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-teal-600">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-teal-600">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-teal-600">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;