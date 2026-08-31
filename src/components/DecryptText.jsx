import React, { useState, useEffect } from 'react';

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>';

export default function DecryptText({ text, speed = 30, delay = 0, className }) {
  const [displayText, setDisplayText] = useState('');
  const [isDecrypting, setIsDecrypting] = useState(false);

  useEffect(() => {
    let iteration = 0;
    let interval = null;
    let timeout = null;

    const startDecryption = () => {
      setIsDecrypting(true);
      interval = setInterval(() => {
        setDisplayText((current) => {
          return text
            .split('')
            .map((char, index) => {
              if (index < iteration) {
                return text[index];
              }
              if (char === ' ') return ' ';
              return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
            })
            .join('');
        });

        if (iteration >= text.length) {
          clearInterval(interval);
          setIsDecrypting(false);
          setDisplayText(text);
        }

        iteration += 1 / 3; // Controls how fast the real letters settle
      }, speed);
    };

    timeout = setTimeout(startDecryption, delay);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [text, speed, delay]);

  return <span className={className}>{displayText || text.replace(/./g, '_')}</span>;
}
