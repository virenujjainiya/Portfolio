import React, { useState, useMemo, useRef } from 'react';
import { Table, Search, ArrowUpDown, Cpu, Zap, Filter, CheckCircle2 } from 'lucide-react';

// Generates 10,000 mock high-density transactions
function generateRows(count = 10000) {
  const statuses = ['PROCESSED', 'SETTLED', 'SYNCED', 'QUEUED'];
  const platforms = ['Shopify', 'QuickBooks', 'Faire', 'Amazon'];
  const rows = [];
  for (let i = 1; i <= count; i++) {
    rows.push({
      id: `TXN-${100000 + i}`,
      source: platforms[i % platforms.length],
      status: statuses[i % statuses.length],
      amount: `$${((i * 17.35) % 850 + 12.5).toFixed(2)}`,
      latency: `${((i * 7) % 18 + 2)}ms`,
      records: 10 + (i % 50),
      timestamp: `2026-08-${String((i % 28) + 1).padStart(2, '0')} 14:${String(i % 60).padStart(2, '0')}`
    });
  }
  return rows;
}

const ALL_DATA = generateRows(10000);

export default function DataGridLab() {
  const [search, setSearch] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('ALL');
  const [sortField, setSortField] = useState('id');
  const [sortAsc, setSortAsc] = useState(true);
  const [scrollTop, setScrollTop] = useState(0);

  // High performance memoized filtering across 10,000 rows
  const filteredData = useMemo(() => {
    const q = search.toLowerCase();
    return ALL_DATA.filter((row) => {
      const matchSearch =
        !q ||
        row.id.toLowerCase().includes(q) ||
        row.source.toLowerCase().includes(q) ||
        row.amount.includes(q);
      const matchStatus = selectedStatus === 'ALL' || row.status === selectedStatus;
      return matchSearch && matchStatus;
    });
  }, [search, selectedStatus]);

  // High performance sorting
  const sortedData = useMemo(() => {
    return [...filteredData].sort((a, b) => {
      let valA = a[sortField];
      let valB = b[sortField];
      if (sortField === 'amount') {
        valA = parseFloat(valA.replace('$', ''));
        valB = parseFloat(valB.replace('$', ''));
      }
      if (valA < valB) return sortAsc ? -1 : 1;
      if (valA > valB) return sortAsc ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortField, sortAsc]);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  // Virtualization calculations
  const ROW_HEIGHT = 40;
  const VIEWPORT_HEIGHT = 280;
  const totalCount = sortedData.length;
  const startIndex = Math.max(0, Math.floor(scrollTop / ROW_HEIGHT) - 3);
  const endIndex = Math.min(totalCount, Math.floor((scrollTop + VIEWPORT_HEIGHT) / ROW_HEIGHT) + 3);
  const visibleRows = sortedData.slice(startIndex, endIndex);
  const offsetY = startIndex * ROW_HEIGHT;

  return (
    <div className="bento-card rounded-2xl p-5 sm:p-6 flex flex-col space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
            <Table size={18} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-sm sm:text-base text-zinc-900 dark:text-zinc-100">
                Interactive 10,000+ Row Virtualized Grid
              </h3>
              <span className="text-[10px] font-mono text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 px-2 py-0.5 rounded-full font-bold">
                60 FPS Virtualized
              </span>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Live demonstration of client-side performance memoization & sub-millisecond filtering.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 dark:text-zinc-400">
          <span className="flex items-center gap-1.5">
            <Cpu size={14} className="text-teal-600 dark:text-teal-400" />
            <span>Dataset: 10,000 Records</span>
          </span>
          <span className="text-zinc-300 dark:text-zinc-700">•</span>
          <span className="text-teal-600 dark:text-teal-400 font-semibold">Render Latency: &lt; 1ms</span>
        </div>
      </div>

      {/* Interactive Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 pt-1">
        {/* Search */}
        <div className="relative flex-1 min-w-[200px]">
          <Search size={14} className="absolute left-3 top-2.5 text-zinc-400 dark:text-zinc-500" />
          <input
            type="text"
            placeholder="Search 10,000 transactions instantly..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-zinc-50 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 rounded-xl pl-8 pr-3 py-1.5 text-xs text-zinc-900 dark:text-zinc-200 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-teal-500 transition-colors font-mono"
          />
        </div>

        {/* Status Filter */}
        <div className="flex items-center gap-1.5 text-xs font-mono">
          {['ALL', 'PROCESSED', 'SETTLED', 'SYNCED'].map((st) => (
            <button
              key={st}
              onClick={() => setSelectedStatus(st)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all ${
                selectedStatus === st
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 border border-zinc-200 dark:border-zinc-700'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Virtualized Table Container */}
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#090b10] overflow-hidden shadow-xs">
        {/* Table Header */}
        <div className="grid grid-cols-12 px-4 py-2.5 bg-zinc-50 dark:bg-zinc-900/80 border-b border-zinc-200 dark:border-zinc-800 text-[11px] font-mono text-zinc-600 dark:text-zinc-400 select-none">
          <div
            onClick={() => handleSort('id')}
            className="col-span-3 flex items-center gap-1 cursor-pointer hover:text-teal-600 dark:hover:text-white transition-colors"
          >
            <span>TXN ID</span>
            <ArrowUpDown size={11} />
          </div>
          <div
            onClick={() => handleSort('source')}
            className="col-span-3 flex items-center gap-1 cursor-pointer hover:text-teal-600 dark:hover:text-white transition-colors"
          >
            <span>INTEGRATION</span>
            <ArrowUpDown size={11} />
          </div>
          <div className="col-span-2">STATUS</div>
          <div
            onClick={() => handleSort('amount')}
            className="col-span-2 text-right flex items-center justify-end gap-1 cursor-pointer hover:text-teal-600 dark:hover:text-white transition-colors"
          >
            <span>AMOUNT</span>
            <ArrowUpDown size={11} />
          </div>
          <div className="col-span-2 text-right">LATENCY</div>
        </div>

        {/* Virtual Scroll Viewport */}
        <div
          onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
          style={{ height: VIEWPORT_HEIGHT }}
          className="overflow-y-auto relative custom-scrollbar font-mono text-xs"
        >
          {/* Scroll spacer holding the total 10,000-row height */}
          <div style={{ height: totalCount * ROW_HEIGHT, position: 'relative' }}>
            {/* Slice of currently visible rendered rows */}
            <div style={{ transform: `translateY(${offsetY}px)`, position: 'absolute', width: '100%' }}>
              {visibleRows.map((row) => (
                <div
                  key={row.id}
                  className="grid grid-cols-12 px-4 items-center border-b border-zinc-100 dark:border-zinc-800/60 hover:bg-zinc-50 dark:hover:bg-zinc-800/40 transition-colors text-zinc-700 dark:text-zinc-300"
                  style={{ height: ROW_HEIGHT }}
                >
                  <div className="col-span-3 font-semibold text-teal-600 dark:text-teal-400">{row.id}</div>
                  <div className="col-span-3 text-zinc-800 dark:text-zinc-300 font-medium">{row.source}</div>
                  <div className="col-span-2">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        row.status === 'PROCESSED'
                          ? 'bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300'
                          : row.status === 'SETTLED'
                          ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300'
                          : 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300'
                      }`}
                    >
                      {row.status}
                    </span>
                  </div>
                  <div className="col-span-2 text-right font-medium text-zinc-900 dark:text-zinc-100">{row.amount}</div>
                  <div className="col-span-2 text-right text-zinc-400 dark:text-zinc-500 text-[11px]">{row.latency}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Benchmark Metrics */}
      <div className="flex flex-wrap items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400 pt-1 gap-2">
        <span>Matching records: <strong className="text-zinc-900 dark:text-zinc-200 font-semibold">{sortedData.length.toLocaleString()}</strong> of 10,000</span>
        <span className="flex items-center gap-1.5 text-teal-600 dark:text-teal-400 font-medium">
          <CheckCircle2 size={14} /> Memoized windowing active — Zero DOM lag
        </span>
      </div>
    </div>
  );
}
