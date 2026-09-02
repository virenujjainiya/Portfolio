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
    <div className="bento-card rounded-xl p-5 sm:p-6 space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-zinc-800">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Network size={18} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-sm sm:text-base text-zinc-100">
                10k+ Daily Ingestion Pipeline Architecture
              </h3>
              <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-full">
                System Design
              </span>
            </div>
            <p className="text-xs text-zinc-400">
              Interactive data pipeline showcasing third-party API ingest & GraphQL architecture.
            </p>
          </div>
        </div>

        {/* Protocol Switcher & Simulation Trigger */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-lg p-0.5 text-xs font-mono">
            <button
              onClick={() => setProtocol('REST')}
              className={`px-2 py-1 rounded transition-colors ${
                protocol === 'REST' ? 'bg-zinc-800 text-zinc-200 font-bold' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              REST
            </button>
            <button
              onClick={() => setProtocol('GRAPHQL')}
              className={`px-2 py-1 rounded transition-colors ${
                protocol === 'GRAPHQL' ? 'bg-emerald-600 text-white font-bold' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              GraphQL
            </button>
          </div>

          <button
            onClick={triggerSimulation}
            disabled={isSimulating}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-medium transition-all shadow-sm shadow-blue-500/20 disabled:opacity-50"
          >
            <Play size={12} />
            <span>Simulate Ingest</span>
          </button>
        </div>
      </div>

      {/* Pipeline Node Diagram */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 pt-2">
        {steps.map((step, idx) => {
          const isActive = activeStep === idx;
          const isPassed = activeStep > idx;

          return (
            <div
              key={step.title}
              className={`relative p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                isActive
                  ? 'bg-blue-600/10 border-blue-500 shadow-lg shadow-blue-500/10 scale-[1.02]'
                  : isPassed
                  ? 'bg-zinc-900/60 border-zinc-700/60'
                  : 'bg-zinc-900/30 border-zinc-800/60 opacity-70'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className={`font-semibold ${isActive ? 'text-blue-400' : 'text-zinc-300'}`}>
                    {step.title}
                  </span>
                  <span className="text-[10px] text-zinc-500 bg-zinc-800/80 px-1.5 py-0.5 rounded">
                    {step.latency}
                  </span>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                  {step.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-zinc-800 text-[10px] font-mono text-zinc-500 flex items-center justify-between">
                <span>{step.tech}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Architecture Metrics Readout */}
      <div className="flex flex-wrap items-center justify-between text-xs font-mono text-zinc-500 pt-1 border-t border-zinc-800/80">
        <span>Active Throughput: <strong className="text-zinc-200">10,000+ records / day</strong></span>
        <span className="text-emerald-400">
          ✓ GraphQL Migration: 0 breaking changes across existing integrations
        </span>
      </div>
    </div>
  );
}
