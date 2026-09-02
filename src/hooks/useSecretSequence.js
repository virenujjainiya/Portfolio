import { useEffect, useRef } from 'react';

export function useSecretSequence(targetSequences, onTrigger) {
  const bufferRef = useRef('');
  const timeoutRef = useRef(null);

  useEffect(() => {
    const sequences = Array.isArray(targetSequences) 
      ? targetSequences.map(s => s.toLowerCase()) 
      : [targetSequences.toLowerCase()];

    const handleKeyDown = (e) => {
      // Don't capture keys if user is typing inside an input, textarea, or contentEditable
      const target = e.target;
      const isInput = 
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' || 
        target.isContentEditable;

      if (isInput) return;

      // Ignore pure modifiers
      if (['Shift', 'Control', 'Alt', 'Meta', 'CapsLock'].includes(e.key)) return;

      clearTimeout(timeoutRef.current);

      // Append key to rolling buffer
      const key = e.key.toLowerCase();
      bufferRef.current += key;

      // Keep buffer length manageable (last 30 chars)
      if (bufferRef.current.length > 30) {
        bufferRef.current = bufferRef.current.slice(-30);
      }

      // Check if buffer ends with any target sequence
      const matched = sequences.some((seq) => bufferRef.current.endsWith(seq));

      if (matched) {
        bufferRef.current = '';
        onTrigger();
      } else {
        // Reset buffer after 3 seconds of inactivity
        timeoutRef.current = setTimeout(() => {
          bufferRef.current = '';
        }, 3000);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timeoutRef.current);
    };
  }, [targetSequences, onTrigger]);
}
