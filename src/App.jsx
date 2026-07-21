import React, { useState } from 'react';
import Navbar from './components/Navbar';
import AdminDashboard from './components/AdminDashboard';
import { ShieldCheck, Truck, Award } from 'lucide-react';

export default function App() {
  // ডেমো প্ল্যাটফর্ম সেলস ডাটা (টেস্ট করার জন্য)
  const [totalPlatformSales, setTotalPlatformSales] = useState(145800); 

  const products = [
    { id: 1, title: "OEM Wireless Noise Cancelling Headset Bulk", price: 8.50, moq: 100, img: "https://unsplash.com" },
    { id: 2, title: "Smart fitness tracker watch waterproof IP67", price: 14.20, moq: 50, img: "https://unsplash.com" },
    { id: 3, title: "Unisex Cotton Blank Hoodies Oversized Bulk", price: 6.10, moq: 200, img: "https://unsplash.com" },
    { id: 4, title: "Portable 4K Ultra HD Sports Action Camera", price: 29.00, moq: 20, img: "https://unsplash.com" }
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F7] pb-12">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 md:px-6 mt-6">
        {/* Banner Section */}
        <div className="bg-gradient-to-r from-orange-600 to-amber-500 rounded-2xl p-6 md:p-12 text-white shadow-lg">
          <div className="max-w-lg">
            <div className="flex items-center gap-2 bg-black/20 text-xs w-max px-3 py-1 rounded-full font-bold mb-3">
              <Award size={14}/> Verified Factory Suppliers Only
            </div>
            <h1 className="text-2xl md:text-5xl font-black tracking-tight leading-tight">
              Direct Sourcing From Global Manufacturers
            </h1>
            <p className="text-white/80 text-xs md:text-sm mt-2">
              Secure Trade Assurance protection on all bulk orders with verified logistics channels.
            </p>
          </div>
        </div>

        {/* Grid Container for Wholesale Products */}
        <div className="mt-8">
          <h3 className="text-lg font-extrabold text-gray-800 mb-4 border-l-4 border-[#FF6600] pl-3">
            Trending Wholesale Products
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((p) => (
              <div key={p.id} className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition">
                <div className="h-36 md:h-44 bg-gray-100">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-3">
                  <h4 className="text-xs md:text-sm text-gray-700 font-medium line-clamp-2">{p.title}</h4>
                  <div className="mt-2">
                    <p className="text-base md:text-lg font-black text-gray-900">${p.price.toFixed(2)}</p>
                    <p className="text-[11px] text-gray-400">Min. Order: {p.moq} pcs</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CEO Commission Panel Display */}
        <AdminDashboard totalSales={totalPlatformSales} />
      </main>
    </div>
  );
}
