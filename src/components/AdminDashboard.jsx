import React, { useState } from 'react';
import { DollarSign, Percent, ShieldCheck, Users } from 'lucide-react';

export default function AdminDashboard({ totalSales }) {
  // CEO হিসেবে আপনার প্ল্যাটফর্মের কমিশন রেট (যেমন: ৫%)
  const commissionRate = 0.05; 
  const ceoEarnings = totalSales * commissionRate;

  return (
    <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white p-6 rounded-2xl shadow-xl mt-10">
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
        <h2 className="text-lg font-bold flex items-center gap-2">
          <ShieldCheck className="text-emerald-400" /> CEO Control Panel & Revenue Log
        </h2>
        <span className="bg-emerald-500/20 text-emerald-400 text-xs px-3 py-1 rounded-full font-mono">Live Tracker</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Total Platform Volume */}
        <div className="bg-white/5 p-4 rounded-xl border border-white/10">
          <p className="text-xs text-gray-400">Total B2B Platform Sales</p>
          <p className="text-2xl font-black mt-1">${totalSales.toLocaleString()}</p>
        </div>

        {/* CEO Commission Rate */}
        <div className="bg-white/5 p-4 rounded-xl border border-white/10">
          <p className="text-xs text-gray-400">Your Fixed CEO Cut</p>
          <p className="text-2xl font-black mt-1 text-amber-400 flex items-center gap-1">
            <Percent size={20} /> 5.0% <span className="text-xs text-gray-400 font-normal">(Per Order)</span>
          </p>
        </div>

        {/* CEO Pure Profit */}
        <div className="bg-white/5 p-4 rounded-xl border-2 border-emerald-500/30 bg-emerald-500/5">
          <p className="text-xs text-emerald-400 font-medium">Your Profit (Net Earnings)</p>
          <p className="text-2xl font-black mt-1 text-emerald-400 flex items-center">
            <DollarSign size={22} />{ceoEarnings.toLocaleString()}
          </p>
        </div>
      </div>
      <p className="text-[11px] text-gray-500 mt-3 text-center">
        *Secure payment routing active. Vendor gets 95%, Platform Escrow routes 5% straight to CEO Bank/Wallet.
      </p>
    </div>
  );
}
