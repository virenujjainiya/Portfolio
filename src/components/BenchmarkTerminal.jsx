import React, { useState } from 'react';
import { Play, RotateCcw, Terminal } from 'lucide-react';

export default function BenchmarkTerminal() {
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasRun, setHasRun] = useState(false);
  const [logs, setLogs] = useState([
    '// Architecture: C# .NET Core + Optimized SQL Query Pipeline',
    '// Target: Multi-threaded report generator for high-volume datasets'
  ]);

  const runBenchmark = () => {
    setIsRunning(true);
    setProgress(0);
    setHasRun(false);
    setLogs(['[SYSTEM] Initializing multi-threaded batch dispatch...']);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsRunning(false);
          setHasRun(true);
          setLogs((l) => [
            ...l,
            '[SQL] Executed partitioned index scan across 10,000+ data points.',
            '[THREAD] Parallel workers: 8 threads active.',
            '✓ Report generation completed in 4.12s (Legacy baseline: 60.00s)',
            '⚡ 93.1% Execution Time Reduction achieved.'
          ]);
          return 100;
        }
        if (prev === 30) {
          setLogs((l) => [...l, '[SQL] Parallel index scan in progress...']);
        }
        if (prev === 65) {
          setLogs((l) => [...l, '[AGGREGATION] Aggregating buffer streams...']);
        }
        return prev + 10;
      });
    }, 120);
  };

  const reset = () => {
    setProgress(0);
    setHasRun(false);
    setLogs([
      '// Architecture: C# .NET Core + Optimized SQL Query Pipeline',
      '// Target: Multi-threaded report generator for high-volume datasets'
    ]);
  };

  return (
    <div className="bento-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-zinc-200 dark:border-zinc-800 gap-2">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
            <Terminal size={18} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-sm sm:text-base text-zinc-900 dark:text-zinc-100">
                Live SQL Optimization Benchmark
              </h3>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                -93% Latency
              </span>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
              C# .NET Core + Partitioned SQL Index Engine
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {!hasRun && !isRunning && (
            <button
              onClick={runBenchmark}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-mono font-bold transition-all shadow-md shadow-teal-600/20 active:scale-95"
            >
              <Play size={13} />
              <span>Run Benchmark</span>
            </button>
          )}

          {isRunning && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 text-xs font-mono border border-teal-200 dark:border-teal-800">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-ping" />
              <span>Benchmarking...</span>
            </div>
          )}

          {hasRun && (
            <button
              onClick={reset}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs font-mono transition-colors border border-zinc-200 dark:border-zinc-700"
              title="Reset Test"
            >
              <RotateCcw size={13} />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Terminal Screen */}
      <div className="my-4 p-4 rounded-xl bg-[#090b10] border border-zinc-800/80 font-mono text-xs text-zinc-300 min-h-[150px] flex flex-col justify-between overflow-x-auto shadow-inner space-y-1">
        <div className="space-y-1.5">
          {logs.map((log, i) => (
            <div 
              key={i} 
              className={`leading-relaxed ${
                log.startsWith('✓') || log.startsWith('⚡') 
                  ? 'text-teal-400 font-semibold' 
                  : log.startsWith('//')
                  ? 'text-zinc-500'
                  : 'text-zinc-300'
              }`}
            >
              {log}
            </div>
          ))}
        </div>

        {isRunning && (
          <div className="pt-3">
            <div className="w-full bg-zinc-800/80 h-2 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-teal-500 to-emerald-400 h-full transition-all duration-100 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] text-zinc-400 pt-1.5 font-mono">
              <span>8 Workers Dispatching Concurrent Batches...</span>
              <span>{progress}%</span>
            </div>
          </div>
        )}
      </div>

      {/* Comparison Benchmark Bar */}
      <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 space-y-2">
        <div className="flex justify-between text-xs font-mono">
          <span className="text-zinc-500 dark:text-zinc-400">Legacy Architecture: 60.00s</span>
          <span className="text-teal-600 dark:text-teal-400 font-bold">Optimized: 4.12s (-93.1%)</span>
        </div>
        <div className="relative w-full h-3 bg-zinc-200 dark:bg-zinc-800/80 rounded-full overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-red-500/25 w-full" title="Legacy: 60s" />
          <div className="absolute top-0 left-0 h-full bg-teal-500 dark:bg-teal-400 rounded-full transition-all duration-500 shadow-sm" style={{ width: hasRun ? '7%' : isRunning ? `${(progress * 0.07)}%` : '7%' }} title="Optimized: 4.12s" />
        </div>
      </div>
    </div>
  );
}
