import React, { useState, useEffect, useRef } from 'react';
import { Pencil, Check, X } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export default function EditableText({
  value,
  onSave,
  multiline = false,
  className = '',
  as: Component = 'span',
  placeholder = 'Click to edit...'
}) {
  const { isEditing } = usePortfolio();
  const [active, setActive] = useState(false);
  const [currentVal, setCurrentVal] = useState(value || '');
  const inputRef = useRef(null);

  useEffect(() => {
    setCurrentVal(value || '');
  }, [value]);

  useEffect(() => {
    if (active && inputRef.current) {
      inputRef.current.focus();
      if (multiline) {
        inputRef.current.style.height = 'auto';
        inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
      }
    }
  }, [active, multiline]);

  if (!isEditing) {
    return <Component className={className}>{value || placeholder}</Component>;
  }

  const handleSave = () => {
    setActive(false);
    if (currentVal !== value) {
      onSave(currentVal);
    }
  };

  const handleCancel = () => {
    setCurrentVal(value || '');
    setActive(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !multiline) {
      handleSave();
    }
    if (e.key === 'Escape') {
      handleCancel();
    }
  };

  if (active) {
    return (
      <div className="relative inline-block w-full">
        {multiline ? (
          <textarea
            ref={inputRef}
            value={currentVal}
            onChange={(e) => {
              setCurrentVal(e.target.value);
              e.target.style.height = 'auto';
              e.target.style.height = `${e.target.scrollHeight}px`;
            }}
            onBlur={handleSave}
            onKeyDown={handleKeyDown}
            className="w-full bg-zinc-950 border-2 border-blue-500 rounded p-2 text-zinc-100 font-sans focus:outline-none resize-none shadow-lg text-sm"
            rows={3}
          />
        ) : (
          <input
            ref={inputRef}
            type="text"
            value={currentVal}
            onChange={(e) => setCurrentVal(e.target.value)}
            onBlur={handleSave}
            onKeyDown={handleKeyDown}
            className="w-full bg-zinc-950 border-2 border-blue-500 rounded px-2 py-1 text-zinc-100 font-sans focus:outline-none shadow-lg text-sm"
          />
        )}
        <div className="flex items-center gap-1.5 mt-1 text-[11px] text-zinc-400 font-mono">
          <span className="text-emerald-400 flex items-center gap-0.5">
            <Check size={11} /> Enter to save
          </span>
          <span>•</span>
          <span>Esc to cancel</span>
        </div>
      </div>
    );
  }

  return (
    <Component
      onClick={() => setActive(true)}
      className={`group/edit relative cursor-pointer transition-all border border-dashed border-blue-500/40 hover:border-blue-500 hover:bg-blue-500/10 rounded px-1.5 py-0.5 inline-block ${className}`}
      title="Click to edit inline"
    >
      <span>{value || placeholder}</span>
      <span className="opacity-0 group-hover/edit:opacity-100 inline-flex items-center ml-1.5 text-blue-400 text-xs align-middle">
        <Pencil size={11} />
      </span>
    </Component>
  );
}
