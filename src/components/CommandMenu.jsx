import React, { useState, useEffect } from 'react';
import { Search, X, ExternalLink, Mail, Copy, Check, Terminal, Briefcase, Code, Sparkles } from 'lucide-react';

export default function CommandMenu({ isOpen, onClose, onNavigate, projects }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const actions = [
    {
      id: 'copy-email',
      title: 'Copy Email Address',
      subtitle: 'ujjainiyaviren2019@gmail.com',
      icon: Mail,
      action: () => {
        navigator.clipboard.writeText('ujjainiyaviren2019@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    },
    {
      id: 'github',
      title: 'Open GitHub Profile',
      subtitle: 'github.com/virenujjainiya',
      icon: ExternalLink,
      action: () => window.open('https://github.com/virenujjainiya', '_blank')
    },
    {
      id: 'linkedin',
      title: 'Open LinkedIn Profile',
      subtitle: 'linkedin.com/in/ujjainiya-viren',
      icon: ExternalLink,
      action: () => window.open('https://linkedin.com/in/ujjainiya-viren', '_blank')
    },
    {
      id: 'focustube',
      title: 'View FocusTube Project',
      subtitle: 'Focus video learning platform (React + Fastify + Supabase)',
      icon: Code,
      action: () => window.open('https://focus-tube-frontend-lime.vercel.app/login', '_blank')
    },
    {
      id: 'section-exp',
      title: 'Jump to Work Experience',
      subtitle: 'WeyBee Solutions (4+ years)',
      icon: Briefcase,
      action: () => {
        onNavigate('experience');
        onClose();
      }
    },
    {
      id: 'section-skills',
      title: 'Jump to Tech Stack',
      subtitle: 'React, C#, .NET, Node.js, PostgreSQL',
      icon: Sparkles,
      action: () => {
        onNavigate('skills');
        onClose();
      }
    }
  ];

  const filteredActions = actions.filter(
    (a) => a.title.toLowerCase().includes(query.toLowerCase()) || a.subtitle.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose(); // toggle
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="w-full max-w-xl bg-[#121216] border border-zinc-700/60 rounded-xl shadow-2xl overflow-hidden shadow-black/80 animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="flex items-center px-4 py-3 border-b border-zinc-800 gap-3">
          <Search size={18} className="text-zinc-400 shrink-0" />
          <input
            type="text"
            placeholder="Type a command or search..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            autoFocus
            className="w-full bg-transparent text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none font-sans"
          />
          <button 
            onClick={onClose}
            className="p-1 text-zinc-500 hover:text-zinc-300 rounded transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Action List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredActions.length === 0 ? (
            <div className="py-8 text-center text-xs text-zinc-500 font-sans">
              No matching commands found.
            </div>
          ) : (
            filteredActions.map((action, idx) => {
              const Icon = action.icon;
              return (
                <button
                  key={action.id}
                  onClick={() => {
                    action.action();
                    if (action.id !== 'copy-email') onClose();
                  }}
                  className={`w-full flex items-center justify-between p-2.5 rounded-lg text-left text-sm transition-colors group ${
                    selectedIndex === idx ? 'bg-blue-600/15 text-blue-400' : 'text-zinc-300 hover:bg-zinc-800/60 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-md bg-zinc-800 border border-zinc-700/50 text-zinc-400 group-hover:text-blue-400">
                      <Icon size={15} />
                    </div>
                    <div>
                      <p className="font-medium text-xs sm:text-sm text-zinc-200">{action.title}</p>
                      <p className="text-[11px] text-zinc-500">{action.subtitle}</p>
                    </div>
                  </div>

                  {action.id === 'copy-email' && copied ? (
                    <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                      <Check size={12} /> Copied
                    </span>
                  ) : (
                    <span className="text-[10px] text-zinc-600 font-mono group-hover:text-zinc-400">
                      Press ↵
                    </span>
                  )}
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-[#0d0d10] border-t border-zinc-800 flex justify-between items-center text-[11px] font-mono text-zinc-500">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>esc Close</span>
          </div>
          <span>Viren Ujjainiya Portfolio</span>
        </div>
      </div>
    </div>
  );
}
