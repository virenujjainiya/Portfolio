import React from 'react';
import { Download, RotateCcw, LogOut, Check, Pencil } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export default function AdminToolbar() {
  const { isAdmin, isEditing, toggleEditing, logout, resetToOriginal, exportAsFile, hasChanges } = usePortfolio();

  // Stealth Mode: Nothing rendered for public visitors
  if (!isAdmin) {
    return null;
  }

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 max-w-lg w-full px-4 animate-in slide-in-from-bottom-5 duration-200">
      <div className="flex items-center justify-between p-2 rounded-2xl bg-white/95 border border-teal-500/50 shadow-2xl backdrop-blur-xl gap-2 sm:gap-4 shadow-zinc-900/15">
        {/* Toggle Edit Active */}
        <div className="flex items-center gap-2 pl-2">
          <button
            onClick={toggleEditing}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
              isEditing
                ? 'bg-teal-600 text-white shadow-md shadow-teal-500/20'
                : 'bg-zinc-100 text-zinc-700 hover:text-zinc-900 border border-zinc-200'
            }`}
          >
            <Pencil size={13} />
            <span>{isEditing ? 'Editing ON' : 'Editing OFF'}</span>
          </button>
          {hasChanges && (
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200 font-bold">
              <Check size={11} /> Saved Locally
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={exportAsFile}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-mono border border-zinc-200 transition-colors font-bold"
            title="Download updated resume.js to commit changes into GitHub/Vercel"
          >
            <Download size={13} className="text-teal-600" />
            <span className="hidden sm:inline">Export File</span>
          </button>

          <button
            onClick={resetToOriginal}
            className="p-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-red-600 border border-zinc-200 transition-colors"
            title="Reset to default resume data"
          >
            <RotateCcw size={14} />
          </button>

          <button
            onClick={logout}
            className="p-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-950 border border-zinc-200 transition-colors"
            title="Lock & Exit Admin Mode"
          >
            <LogOut size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
