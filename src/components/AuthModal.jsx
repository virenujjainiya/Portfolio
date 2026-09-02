import React, { useState } from 'react';
import { Lock, Unlock, X, KeyRound, AlertCircle, Check, Loader2 } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export default function AuthModal({ isOpen, onClose }) {
  const { login } = usePortfolio();
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const isValid = await login(password);
      setLoading(false);

      if (isValid) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          setPassword('');
          onClose();
        }, 600);
      } else {
        setError(true);
        setTimeout(() => setError(false), 2500);
      }
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/40 backdrop-blur-md animate-in fade-in duration-150">
      <div 
        className="w-full max-w-sm bg-white border border-zinc-200 rounded-2xl shadow-2xl p-6 relative overflow-hidden shadow-zinc-900/15"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-teal-50 border border-teal-100 text-teal-700 shadow-2xs">
              {success ? <Unlock size={20} className="text-teal-600" /> : <Lock size={20} />}
            </div>
            <div>
              <h3 className="font-extrabold text-base text-zinc-950">Editor Authentication</h3>
              <p className="text-xs text-zinc-500 font-medium">SHA-256 Protected Verification</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded text-zinc-400 hover:text-zinc-600 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono font-semibold text-zinc-600 mb-1.5">
              Enter Admin Password
            </label>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                autoFocus
                className={`w-full bg-zinc-50 border rounded-lg px-3.5 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none transition-colors ${
                  error ? 'border-red-500 bg-red-50/20' : 'border-zinc-300 focus:border-teal-600 focus:bg-white'
                }`}
              />
              <KeyRound size={16} className="absolute right-3 top-2.5 text-zinc-400" />
            </div>

            {error && (
              <p className="flex items-center gap-1 text-[11px] text-red-600 mt-1.5 font-mono font-semibold">
                <AlertCircle size={12} /> Incorrect password. Try `admin` or `viren123`
              </p>
            )}
            {success && (
              <p className="flex items-center gap-1 text-[11px] text-teal-700 mt-1.5 font-mono font-bold">
                <Check size={12} /> Authenticated! Unlocking editor...
              </p>
            )}
          </div>

          <div className="p-2.5 rounded-lg bg-zinc-50 border border-zinc-200 text-[11px] text-zinc-600 font-mono flex items-center justify-between">
            <span>Default passcode: <code className="text-teal-700 font-bold">admin</code></span>
            <button
              type="button"
              onClick={() => setPassword('admin')}
              className="text-xs text-teal-700 hover:underline font-bold"
            >
              Auto-fill
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-teal-600/25 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading && <Loader2 size={14} className="animate-spin" />}
            <span>Unlock In-Place Editor</span>
          </button>
        </form>
      </div>
    </div>
  );
}
