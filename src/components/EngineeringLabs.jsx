import React, { useState } from 'react';
import { Terminal, Network, Table, Activity, Cpu } from 'lucide-react';
import BenchmarkTerminal from './BenchmarkTerminal';
import PipelineVisualizer from './PipelineVisualizer';
import DataGridLab from './DataGridLab';

export default function EngineeringLabs() {
  const [activeLab, setActiveLab] = useState('benchmark'); // 'benchmark' | 'pipeline' | 'datagrid'

  const labs = [
    {
      id: 'benchmark',
      label: 'SQL Optimization Benchmark',
      badge: '93% Speedup',
      icon: Terminal,
      description: 'C# .NET multi-threaded report generator reducing batch runtimes from 60s to 4.12s.'
    },
    {
      id: 'pipeline',
      label: 'Shopify Ingestion Engine',
      badge: '10k+ Daily',
      icon: Network,
      description: 'GraphQL batch migration with token-bucket queues and 62% payload reduction.'
    },
    {
      id: 'datagrid',
      label: '10,000-Row Virtualized Grid',
      badge: '< 1ms Latency',
      icon: Table,
      description: 'Custom React memoization and parallel Redux dispatching for zero-lag data rendering.'
    }
  ];

  return (
    <section id="engineering-labs" className="space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold text-teal-800 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 mb-2">
            <Activity size={13} className="text-teal-600 dark:text-teal-400 animate-pulse" />
            <span>Live Interactive Proof of Scale</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
            Engineering Labs & Production Benchmarks
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium mt-1 max-w-2xl">
            Don't just take my word for it. Interact with live simulations of the high-throughput systems, query optimizations, and rendering engines I've engineered.
          </p>
        </div>

        {/* Quick Architecture Proof Badges */}
        <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700">
            <Cpu size={12} className="text-teal-600 dark:text-teal-400" />
            <span>Interactive Sandboxes</span>
          </span>
        </div>
      </div>

      {/* Lab Switcher Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {labs.map((lab) => {
          const Icon = lab.icon;
          const isActive = activeLab === lab.id;

          return (
            <button
              key={lab.id}
              onClick={() => setActiveLab(lab.id)}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between space-y-2.5 ${
                isActive
                  ? 'bg-white dark:bg-[#131622] border-teal-500 dark:border-teal-400 shadow-md shadow-teal-500/10 dark:shadow-teal-900/30 scale-[1.01]'
                  : 'bg-white dark:bg-[#11131c] border-zinc-200/80 dark:border-zinc-800 hover:border-teal-500/50 dark:hover:border-teal-500/40 hover:-translate-y-0.5'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <div className={`p-2 rounded-xl border ${
                  isActive 
                    ? 'bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-300 border-teal-200 dark:border-teal-800' 
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700'
                }`}>
                  <Icon size={16} />
                </div>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border ${
                  isActive
                    ? 'bg-teal-50 dark:bg-teal-950/80 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-700'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700'
                }`}>
                  {lab.badge}
                </span>
              </div>

              <div>
                <h3 className={`text-sm font-bold transition-colors ${
                  isActive ? 'text-zinc-950 dark:text-white' : 'text-zinc-700 dark:text-zinc-300'
                }`}>
                  {lab.label}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mt-0.5">
                  {lab.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Lab Display Container */}
      <div className="transition-all duration-300">
        {activeLab === 'benchmark' && <BenchmarkTerminal />}
        {activeLab === 'pipeline' && <PipelineVisualizer />}
        {activeLab === 'datagrid' && <DataGridLab />}
      </div>
    </section>
  );
}
