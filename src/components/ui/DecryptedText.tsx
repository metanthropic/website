'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

export default function DecryptedText({ text, className = '' }: { text: string, className?: string }) {
  const [displayText, setDisplayText] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let iteration = 0;
    // Slowed down from 30ms to 40ms (approx 80% speed)
    const interval = setInterval(() => {
      setDisplayText(text
        .split('')
        .map((letter, index) => {
          if (index < iteration) return text[index];
          return letters[Math.floor(Math.random() * 26)];
        })
        .join('')
      );
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 64);
    return () => clearInterval(interval);
  }, [text, isHovered]);

  return (
    <motion.span
      className={className}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {displayText}
    </motion.span>
  );
}
