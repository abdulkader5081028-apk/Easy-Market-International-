import React from 'react';
import { Search, ShoppingCart, User, Globe, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top Bar for Web (Hidden on Mobile Screens for App Optimization) */}
      <div className="hidden md:flex bg-gray-50 text-xs text-gray-500 px-6 py-2 justify-between items-center">
        <div>Premium Wholesale B2B Marketplace</div>
        <div className="flex gap-4">
          <span className="hover:text-[#FF6600] cursor-pointer flex items-center gap-1"><Globe size={13}/> EN - USD</span>
          <span className="hover:text-[#FF6600] cursor-pointer">Supplier Membership</span>
        </div>
      </div>

      {/* Main App Navbar */}
      <div className="px-4 md:px-6 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Menu className="md:hidden text-gray-700" size={24} />
          <div className="text-2xl md:text-3xl font-black text-[#FF6600] tracking-tight">
            Alibaba<span className="text-gray-900 text-lg md:text-xl">.CEO</span>
          </div>
        </div>

        {/* Search Bar - Expands across full width on Mobile App view */}
        <div className="flex-1 max-w-2xl flex items-center border-2 border-[#FF6600] rounded-full overflow-hidden bg-gray-50">
          <input 
            type="text" 
            placeholder="Search wholesale products..." 
            className="w-full px-4 py-1.5 md:py-2.5 outline-none text-xs md:text-sm bg-transparent"
          />
          <button className="bg-[#FF6600] text-white px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-bold flex items-center gap-1">
            <Search size={14} /> <span className="hidden sm:inline">Search</span>
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 text-gray-700">
          <User size={22} className="cursor-pointer hover:text-[#FF6600]" />
          <div className="relative cursor-pointer hover:text-[#FF6600]">
            <ShoppingCart size={22} />
            <span className="absolute -top-1.5 -right-1.5 bg-[#FF6600] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">2</span>
          </div>
        </div>
      </div>
    </header>
  );
}
