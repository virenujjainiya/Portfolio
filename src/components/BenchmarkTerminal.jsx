import React, { useState } from 'react';
import { Play, RotateCcw, CheckCircle, Terminal, Cpu } from 'lucide-react';

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
    <div className="bento-card rounded-xl p-5 sm:p-6 flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-zinc-800 gap-2">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-md bg-zinc-800/80 text-blue-400 border border-zinc-700/60">
            <Terminal size={16} />
          </div>
          <div>
            <h3 className="font-semibold text-sm text-zinc-100">Live Optimization Benchmark</h3>
            <p className="text-[11px] text-zinc-400 font-mono">C# .NET & SQL Performance Engine</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {!hasRun && !isRunning && (
            <button
              onClick={runBenchmark}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-medium transition-all shadow-sm shadow-blue-500/20"
            >
              <Play size={12} />
              <span>Run Benchmark</span>
            </button>
          )}

          {hasRun && (
            <button
              onClick={reset}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-mono transition-colors"
              title="Reset Test"
            >
              <RotateCcw size={12} />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Terminal Screen */}
      <div className="my-4 p-3.5 rounded-lg bg-[#070709] border border-zinc-800 font-mono text-xs text-zinc-300 min-h-[140px] flex flex-col justify-between overflow-x-auto space-y-1">
        <div className="space-y-1">
          {logs.map((log, i) => (
            <div key={i} className={`leading-relaxed ${log.startsWith('✓') || log.startsWith('⚡') ? 'text-emerald-400 font-semibold' : 'text-zinc-400'}`}>
              {log}
            </div>
          ))}
        </div>

        {isRunning && (
          <div className="pt-2">
            <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-blue-500 h-full transition-all duration-100 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] text-zinc-500 pt-1">
              <span>Executing parallel workers...</span>
              <span>{progress}%</span>
            </div>
          </div>
        )}
      </div>

      {/* Comparison Benchmark Bar */}
      <div className="pt-3 border-t border-zinc-800/80 space-y-2">
        <div className="flex justify-between text-xs font-mono text-zinc-400">
          <span>Legacy Architecture: 60.0s</span>
          <span className="text-emerald-400 font-bold">Optimized: 4.0s (93% faster)</span>
        </div>
        <div className="relative w-full h-3 bg-zinc-800/80 rounded-full overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-red-500/30 w-full" title="Legacy: 60s" />
          <div className="absolute top-0 left-0 h-full bg-emerald-500 w-[7%]" title="Optimized: 4s" />
        </div>
      </div>
    </div>
  );
}
