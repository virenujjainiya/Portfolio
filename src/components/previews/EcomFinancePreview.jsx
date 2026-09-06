import React, { useState } from 'react';
import { TrendingUp, FileSpreadsheet, ShieldCheck, Layers } from 'lucide-react';

export default function EcomFinancePreview() {
  const [platform, setPlatform] = useState('meesho'); // 'meesho' | 'amazon' | 'flipkart'

  const dataMap = {
    meesho: {
      file: 'Meesho_Settlement_Aug.xlsx',
      rows: '1,240 rows parsed in 28ms',
      settlement: '₹3,48,200',
      settlementGrowth: '+18.4%',
      returnLoss: '₹14,850',
      returnOpt: '-4.2% Optimized',
      keepRatio: '89.2%',
      products: [
        { name: 'Wireless Noise-Canceling Earbuds', sales: '₹1,84,200', returns: '2.8%', status: 'KEEP', statusColor: 'bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800' },
        { name: 'Braided Type-C Fast Cable (2m)', sales: '₹48,900', returns: '18.4%', status: 'REMOVE', statusColor: 'bg-red-50 dark:bg-red-950/60 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800' },
        { name: 'Waterproof Bluetooth Speaker 20W', sales: '₹94,500', returns: '7.9%', status: 'WATCH', statusColor: 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800' }
      ]
    },
    amazon: {
      file: 'Amazon_MTR_B2C_Aug.xlsx',
      rows: '3,450 rows parsed in 42ms',
      settlement: '₹8,92,400',
      settlementGrowth: '+24.1%',
      returnLoss: '₹31,200',
      returnOpt: '-6.8% Optimized',
      keepRatio: '94.6%',
      products: [
        { name: 'Ultra-Bass Gaming Headset Pro', sales: '₹4,12,000', returns: '1.9%', status: 'KEEP', statusColor: 'bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800' },
        { name: 'Magnetic Wireless PowerBank 10k', sales: '₹2,68,400', returns: '3.4%', status: 'KEEP', statusColor: 'bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800' },
        { name: 'Silicone Shockproof Phone Case', sales: '₹84,200', returns: '14.2%', status: 'WATCH', statusColor: 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800' }
      ]
    },
    flipkart: {
      file: 'Flipkart_Monthly_Orders_Aug.xlsx',
      rows: '1,890 rows parsed in 34ms',
      settlement: '₹4,15,800',
      settlementGrowth: '+12.7%',
      returnLoss: '₹22,100',
      returnOpt: '-3.5% Optimized',
      keepRatio: '86.4%',
      products: [
        { name: 'Smart Fitness Tracker Band 5', sales: '₹2,10,000', returns: '4.1%', status: 'KEEP', statusColor: 'bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800' },
        { name: 'RGB Mechanical Keyboard', sales: '₹1,32,500', returns: '8.7%', status: 'WATCH', statusColor: 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800' },
        { name: 'Low-Grade Earphone Adapter', sales: '₹24,800', returns: '22.0%', status: 'REMOVE', statusColor: 'bg-red-50 dark:bg-red-950/60 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800' }
      ]
    }
  };

  const current = dataMap[platform];

  return (
    <div className="w-full rounded-xl border border-zinc-200/90 dark:border-zinc-800 bg-white dark:bg-[#0c0e17] overflow-hidden shadow-sm select-none text-left transition-colors">
      {/* Browser Top Window Bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-zinc-50 dark:bg-zinc-900/80 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
        </div>
        <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
          <ShieldCheck size={11} className="text-teal-600 dark:text-teal-400" />
          <span>ecomfinance-analytics.app/dashboard</span>
        </div>
        
        {/* Marketplace Filter Switcher */}
        <div className="flex items-center gap-1 text-[9px] font-mono">
          {['meesho', 'amazon', 'flipkart'].map((p) => (
            <button
              key={p}
              onClick={() => setPlatform(p)}
              className={`px-2 py-0.5 rounded uppercase font-bold transition-all ${
                platform === p
                  ? 'bg-teal-600 text-white shadow-2xs'
                  : 'bg-zinc-200/70 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Main Dashboard Preview Content */}
      <div className="p-3 bg-zinc-50/50 dark:bg-zinc-950/40 space-y-2.5">
        {/* KPI Metrics Row */}
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2 rounded-lg bg-white dark:bg-[#11131c] border border-zinc-200 dark:border-zinc-800 shadow-2xs">
            <p className="text-[9px] font-mono text-zinc-500 dark:text-zinc-400 uppercase font-semibold">Net Settlement</p>
            <p className="text-xs sm:text-sm font-extrabold text-zinc-900 dark:text-zinc-100">{current.settlement}</p>
            <span className="text-[9px] font-mono text-teal-600 dark:text-teal-400 flex items-center gap-0.5 mt-0.5 font-bold">
              <TrendingUp size={10} /> {current.settlementGrowth}
            </span>
          </div>

          <div className="p-2 rounded-lg bg-white dark:bg-[#11131c] border border-zinc-200 dark:border-zinc-800 shadow-2xs">
            <p className="text-[9px] font-mono text-zinc-500 dark:text-zinc-400 uppercase font-semibold">Return Loss</p>
            <p className="text-xs sm:text-sm font-extrabold text-zinc-900 dark:text-zinc-100">{current.returnLoss}</p>
            <span className="text-[9px] font-mono text-teal-600 dark:text-teal-400 mt-0.5 block font-bold">
              {current.returnOpt}
            </span>
          </div>

          <div className="p-2 rounded-lg bg-white dark:bg-[#11131c] border border-zinc-200 dark:border-zinc-800 shadow-2xs">
            <p className="text-[9px] font-mono text-zinc-500 dark:text-zinc-400 uppercase font-semibold">Keep Ratio</p>
            <p className="text-xs sm:text-sm font-extrabold text-teal-600 dark:text-teal-400">{current.keepRatio}</p>
            <span className="text-[9px] font-mono text-zinc-500 dark:text-zinc-400 mt-0.5 block font-medium">
              Profit Driver
            </span>
          </div>
        </div>

        {/* Dynamic Spreadsheet Parser Banner in Teal */}
        <div className="flex items-center justify-between p-2 rounded-lg bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200/80 dark:border-teal-800/50 text-[10px] font-mono">
          <div className="flex items-center gap-1.5 text-teal-900 dark:text-teal-200 font-bold">
            <FileSpreadsheet size={13} className="text-teal-600 dark:text-teal-400" />
            <span>SheetJS Engine: {current.file}</span>
          </div>
          <span className="text-teal-800 dark:text-teal-300 bg-white dark:bg-zinc-800 px-1.5 py-0.5 rounded border border-teal-200 dark:border-teal-700 text-[9px] font-semibold">
            {current.rows}
          </span>
        </div>

        {/* Product Classification Scoring Table */}
        <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#11131c] overflow-hidden text-[10px]">
          <div className="grid grid-cols-12 px-2.5 py-1.5 bg-zinc-50 dark:bg-zinc-900/80 border-b border-zinc-200 dark:border-zinc-800 font-mono text-zinc-500 dark:text-zinc-400 text-[9px] font-semibold">
            <span className="col-span-5">Product Name</span>
            <span className="col-span-3 text-right">Revenue</span>
            <span className="col-span-2 text-right">Returns</span>
            <span className="col-span-2 text-right">Action</span>
          </div>

          <div className="divide-y divide-zinc-100 dark:divide-zinc-800/80">
            {current.products.map((p) => (
              <div key={p.name} className="grid grid-cols-12 px-2.5 py-1.5 items-center">
                <span className="col-span-5 font-bold text-zinc-800 dark:text-zinc-200 truncate pr-1">
                  {p.name}
                </span>
                <span className="col-span-3 text-right font-mono text-zinc-700 dark:text-zinc-300 font-semibold">
                  {p.sales}
                </span>
                <span className="col-span-2 text-right font-mono text-zinc-500 dark:text-zinc-400">
                  {p.returns}
                </span>
                <div className="col-span-2 text-right">
                  <span className={`inline-block px-1.5 py-0.5 rounded text-[8px] font-mono font-bold border ${p.statusColor}`}>
                    {p.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
