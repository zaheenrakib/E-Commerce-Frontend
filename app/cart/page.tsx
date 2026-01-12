"use client";

import React, { useMemo, useState } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";

type CartItem = {
  id: number;
  name: string;
  color: string;
  size: string;
  sku: string;
  image: string;
  seller: string;
  unitPrice: number;
  originalPrice: number;
  qty: number;
};

const initialItems: CartItem[] = [
  {
    id: 1,
    name: "Urban Edge Multipurpose Backpack Sbh-09",
    color: "Black",
    size: "FREE SIZE",
    sku: "SBH09_Black",
    image: "https://images.unsplash.com/photo-1518443872483-66348aa56f71?q=80&w=800&auto=format&fit=crop",
    seller: "M/S. Bismillah Enterprise",
    unitPrice: 699,
    originalPrice: 1100,
    qty: 4,
  },
];

const Cart: React.FC = () => {
  const [items, setItems] = useState<CartItem[]>(initialItems);

  const totals = useMemo(() => {
    const originalTotal = items.reduce((sum, i) => sum + i.originalPrice * i.qty, 0);
    const finalTotal = items.reduce((sum, i) => sum + i.unitPrice * i.qty, 0);
    const discountTotal = originalTotal - finalTotal;
    return { originalTotal, discountTotal, finalTotal };
  }, [items]);

  const formatCurrency = (n: number) => `৳ ${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  const changeQty = (id: number, delta: number) => {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i)));
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const sellerName = items[0]?.seller || "";

  return (
    <div className="min-h-screen max-w-7xl mx-auto bg-gray-50 pb-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="bg-white rounded-xl shadow-md">
              <div className="px-4 py-2 border-b border-gray-200 flex items-center gap-2 text-sm text-gray-600">
                <span>{sellerName}</span>
              </div>

              <div className="p-6">
                {items.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center justify-between border rounded-xl p-4">
                    <div className="flex items-start gap-4">
                      <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
                      <div>
                        <div className="text-sm text-gray-500">SN. {item.id}</div>
                        <div className="font-semibold text-gray-900">{item.name}</div>
                        <div className="text-sm text-gray-600">Color: {item.color}</div>
                        <div className="text-sm text-gray-600">Size: {item.size}</div>
                      </div>
                    </div>

                    <div className="flex-1 grid grid-cols-2 gap-2 text-sm">
                      <div className="text-right">
                        <div className="text-gray-600">Seller Product SKU : {item.sku}</div>
                        <div className="mt-2">
                          <span className="text-gray-600">Unit Price : </span>
                          <span className="font-semibold text-gray-900">{formatCurrency(item.unitPrice)}</span>
                          <span className="ml-2 line-through text-gray-400">{formatCurrency(item.originalPrice)}</span>
                        </div>
                        <div className="mt-2">
                          <span className="text-gray-600">Amount : </span>
                          <span className="font-semibold text-gray-900">{formatCurrency(item.unitPrice * item.qty)}</span>
                          <span className="ml-2 inline-block bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded">Save {formatCurrency((item.originalPrice - item.unitPrice) * item.qty)}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-end gap-2">
                        <div className="flex items-center border rounded-lg overflow-hidden">
                          <button onClick={() => changeQty(item.id, -1)} className="px-2 py-2 hover:bg-gray-100">
                            <Minus className="w-4 h-4" />
                          </button>
                          <div className="px-4 py-2 text-sm font-semibold">{item.qty}</div>
                          <button onClick={() => changeQty(item.id, 1)} className="px-3 py-2 hover:bg-gray-100">
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button onClick={() => removeItem(item.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-gray-800 font-semibold mb-4">Your Bill</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Sub-Total</span>
                  <span className="text-gray-900 font-medium">{formatCurrency(totals.originalTotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Discount</span>
                  <span className="text-red-600 font-medium">- {formatCurrency(totals.discountTotal)}</span>
                </div>
                <div className="border-t pt-3 mt-3 flex justify-between text-base font-bold">
                  <span>Total</span>
                  <span>{formatCurrency(totals.finalTotal)}</span>
                </div>
              </div>
              <button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-lg">Go To Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart