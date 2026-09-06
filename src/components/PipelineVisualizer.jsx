import React, { useState } from 'react';
import { Network, ArrowRight, Play, CheckCircle2, ShieldAlert, Layers, Database, Cpu } from 'lucide-react';

export default function PipelineVisualizer() {
  const [activeStep, setActiveStep] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [protocol, setProtocol] = useState('GRAPHQL'); // 'REST' vs 'GRAPHQL'

  const steps = [
    {
      title: '1. Ingestion Gateway',
      desc: protocol === 'GRAPHQL' 
        ? 'Batch GraphQL query fetches exact schemas, reducing payload by 62%' 
        : 'REST API endpoints polling multiple resources with overfetching',
      latency: protocol === 'GRAPHQL' ? '18ms' : '95ms',
      tech: 'Shopify / Faire / QuickBooks APIs'
    },
    {
      title: '2. Rate-Limiting & Queue',
      desc: 'Token-bucket queue handles spike loads (10,000+ daily items) without throttling',
      latency: '2ms',
      tech: 'Redis Buffer / In-Memory Worker'
    },
    {
      title: '3. Multi-Thread Processing',
      desc: 'Worker threads parse & normalize data across parallel task runners',
      latency: '12ms',
      tech: 'C# .NET Core / Node.js Fastify'
    },
    {
      title: '4. Resilient Persistence',
      desc: 'Batch UPSERTs with Row Level Security & indexed partitioning',
      latency: '15ms',
      tech: 'PostgreSQL / Supabase'
    }
  ];

  const triggerSimulation = () => {
    setIsSimulating(true);
    setActiveStep(0);

    let current = 0;
    const interval = setInterval(() => {
      current++;
      if (current >= steps.length) {
        clearInterval(interval);
        setIsSimulating(false);
      } else {
        setActiveStep(current);
      }
    }, 450);
  };

  return (
    <div className="bento-card rounded-2xl p-5 sm:p-6 space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
            <Network size={18} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-sm sm:text-base text-zinc-900 dark:text-zinc-100">
                10k+ Daily Ingestion Pipeline Architecture
              </h3>
              <span className="text-[10px] font-mono text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 px-2 py-0.5 rounded-full font-bold">
                System Design
              </span>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Interactive Shopify/Faire/QuickBooks ingestion pipeline with GraphQL migration.
            </p>
          </div>
        </div>

        {/* Protocol Switcher & Simulation Trigger */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-0.5 text-xs font-mono">
            <button
              onClick={() => setProtocol('REST')}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                protocol === 'REST' 
                  ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-bold shadow-xs' 
                  : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300'
              }`}
            >
              REST (Legacy)
            </button>
            <button
              onClick={() => setProtocol('GRAPHQL')}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                protocol === 'GRAPHQL' 
                  ? 'bg-teal-600 text-white font-bold shadow-xs' 
                  : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300'
              }`}
            >
              GraphQL (Batch)
            </button>
          </div>

          <button
            onClick={triggerSimulation}
            disabled={isSimulating}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-mono font-bold transition-all shadow-md shadow-teal-600/20 disabled:opacity-50 active:scale-95"
          >
            <Play size={13} />
            <span>Simulate Ingest</span>
          </button>
        </div>
      </div>

      {/* Pipeline Node Diagram */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
        {steps.map((step, idx) => {
          const isActive = activeStep === idx;
          const isPassed = activeStep > idx;

          return (
            <div
              key={step.title}
              className={`relative p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                isActive
                  ? 'bg-teal-500/10 border-teal-500 shadow-md shadow-teal-500/10 scale-[1.02]'
                  : isPassed
                  ? 'bg-zinc-50 dark:bg-zinc-900/60 border-teal-500/30 dark:border-teal-900/40'
                  : 'bg-white dark:bg-zinc-900/20 border-zinc-200/80 dark:border-zinc-800/60 opacity-80'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className={`font-semibold ${isActive ? 'text-teal-600 dark:text-teal-400 font-bold' : 'text-zinc-800 dark:text-zinc-200'}`}>
                    {step.title}
                  </span>
                  <span className="text-[10px] text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
                    {step.latency}
                  </span>
                </div>

                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3">
                  {step.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-zinc-200/80 dark:border-zinc-800 text-[10px] font-mono text-zinc-500 dark:text-zinc-400 flex items-center justify-between">
                <span>{step.tech}</span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-teal-500 animate-ping" />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Architecture Metrics Readout */}
      <div className="flex flex-wrap items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400 pt-2 border-t border-zinc-200 dark:border-zinc-800 gap-2">
        <span>Active Throughput: <strong className="text-zinc-900 dark:text-zinc-200 font-semibold">10,000+ records / day</strong></span>
        <span className="text-teal-600 dark:text-teal-400 font-semibold">
          ✓ GraphQL Migration: -62% network payload & 0 breaking changes
        </span>
      </div>
    </div>
  );
}
