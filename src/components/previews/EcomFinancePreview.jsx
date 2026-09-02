import React from 'react';
import { TrendingUp, FileSpreadsheet, ArrowUpRight, CheckCircle2, AlertTriangle, XCircle, ShieldCheck } from 'lucide-react';

export default function EcomFinancePreview() {
  const products = [
    {
      name: 'Wireless Noise-Canceling Earbuds',
      sales: '₹1,84,200',
      returns: '2.8%',
      profit: '₹54,600',
      status: 'KEEP',
      statusColor: 'bg-teal-50 text-teal-800 border-teal-200'
    },
    {
      name: 'Braided Type-C Fast Cable (2m)',
      sales: '₹48,900',
      returns: '18.4%',
      profit: '-₹4,200',
      status: 'REMOVE',
      statusColor: 'bg-red-50 text-red-700 border-red-200'
    },
    {
      name: 'Waterproof Bluetooth Speaker 20W',
      sales: '₹94,500',
      returns: '7.9%',
      profit: '₹18,300',
      status: 'WATCH',
      statusColor: 'bg-amber-50 text-amber-700 border-amber-200'
    }
  ];

  return (
    <div className="w-full rounded-xl border border-zinc-200/90 bg-white overflow-hidden shadow-sm select-none text-left">
      {/* Browser Top Window Bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-zinc-50 border-b border-zinc-200">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
        </div>
        <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-white border border-zinc-200 text-[10px] font-mono text-zinc-500">
          <ShieldCheck size={11} className="text-teal-600" />
          <span>ecomfinance-analytics.app/dashboard</span>
        </div>
        <div className="w-10" />
      </div>

      {/* Main Dashboard Preview Content */}
      <div className="p-3 bg-zinc-50/50 space-y-2.5">
        {/* KPI Metrics Row */}
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2 rounded-lg bg-white border border-zinc-200 shadow-2xs">
            <p className="text-[9px] font-mono text-zinc-500 uppercase font-semibold">Net Settlement</p>
            <p className="text-xs sm:text-sm font-extrabold text-zinc-900">₹3,48,200</p>
            <span className="text-[9px] font-mono text-teal-600 flex items-center gap-0.5 mt-0.5 font-bold">
              <TrendingUp size={10} /> +18.4%
            </span>
          </div>

          <div className="p-2 rounded-lg bg-white border border-zinc-200 shadow-2xs">
            <p className="text-[9px] font-mono text-zinc-500 uppercase font-semibold">Return Loss</p>
            <p className="text-xs sm:text-sm font-extrabold text-zinc-900">₹14,850</p>
            <span className="text-[9px] font-mono text-teal-600 mt-0.5 block font-bold">
              -4.2% Optimized
            </span>
          </div>

          <div className="p-2 rounded-lg bg-white border border-zinc-200 shadow-2xs">
            <p className="text-[9px] font-mono text-zinc-500 uppercase font-semibold">Keep Ratio</p>
            <p className="text-xs sm:text-sm font-extrabold text-teal-600">89.2%</p>
            <span className="text-[9px] font-mono text-zinc-500 mt-0.5 block font-medium">
              Profit Driver
            </span>
          </div>
        </div>

        {/* Dynamic Spreadsheet Parser Banner in Teal */}
        <div className="flex items-center justify-between p-2 rounded-lg bg-teal-50 border border-teal-200 text-[10px] font-mono">
          <div className="flex items-center gap-1.5 text-teal-900 font-bold">
            <FileSpreadsheet size={13} className="text-teal-600" />
            <span>SheetJS Engine: Meesho_Settlement_Aug.xlsx</span>
          </div>
          <span className="text-teal-800 bg-white px-1.5 py-0.5 rounded border border-teal-200 text-[9px] font-semibold">
            1,240 rows parsed in 28ms
          </span>
        </div>

        {/* Product Classification Scoring Table */}
        <div className="rounded-lg border border-zinc-200 bg-white overflow-hidden text-[10px]">
          <div className="grid grid-cols-12 px-2.5 py-1.5 bg-zinc-50 border-b border-zinc-200 font-mono text-zinc-500 text-[9px] font-semibold">
            <span className="col-span-5">Product Name</span>
            <span className="col-span-3 text-right">Revenue</span>
            <span className="col-span-2 text-right">Returns</span>
            <span className="col-span-2 text-right">Action</span>
          </div>

          <div className="divide-y divide-zinc-100">
            {products.map((p) => (
              <div key={p.name} className="grid grid-cols-12 px-2.5 py-1.5 items-center">
                <span className="col-span-5 font-bold text-zinc-800 truncate pr-1">
                  {p.name}
                </span>
                <span className="col-span-3 text-right font-mono text-zinc-700 font-semibold">
                  {p.sales}
                </span>
                <span className="col-span-2 text-right font-mono text-zinc-500">
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

      {/* Feature Footer Banner */}
      <div className="px-3 py-1.5 bg-zinc-100/70 border-t border-zinc-200 flex items-center justify-between text-[10px] font-mono text-zinc-600">
        <span className="text-teal-800 font-bold">
          ✓ Weighted Scoring Engine: Keep / Watch / Remove
        </span>
        <span className="text-zinc-500">Next.js 14 + TanStack Table</span>
      </div>
    </div>
  );
}
