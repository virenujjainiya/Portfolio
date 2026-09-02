import React from 'react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="mt-20 py-8 border-t border-zinc-200 text-xs font-mono text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>
        <span>© {new Date().getFullYear()} Viren Ujjainiya. Built with React, Vite & Tailwind CSS.</span>
      </div>

      <div className="flex items-center gap-6">
        <a
          href="https://github.com/virenujjainiya"
          target="_blank"
          rel="noreferrer"
          className="hover:text-zinc-900 transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/ujjainiya-viren"
          target="_blank"
          rel="noreferrer"
          className="hover:text-zinc-900 transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="mailto:ujjainiyaviren2019@gmail.com"
          className="hover:text-zinc-900 transition-colors"
        >
          Email
        </a>
      </div>
    </footer>
  );
}
