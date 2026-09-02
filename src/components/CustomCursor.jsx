import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Only run on fine pointer devices (mouse/trackpad), not touchscreens
    if (!window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovering = false;
    let isClicking = false;
    let isVisible = false;
    let animId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        dot.style.opacity = '1';
        ring.style.opacity = '1';
        ringX = mouseX;
        ringY = mouseY;
      }

      // Direct GPU transform on inner dot — zero latency, zero React re-renders
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;

      // Safe valid CSS selector check
      try {
        const target = e.target;
        const isInteractive = target && (
          target.closest('button, a, input, textarea, [role="button"], .cursor-pointer') ||
          target.tagName === 'BUTTON' ||
          target.tagName === 'A'
        );

        if (isInteractive) {
          if (!isHovering) {
            isHovering = true;
            ring.classList.add('cursor-hover');
          }
        } else {
          if (isHovering) {
            isHovering = false;
            ring.classList.remove('cursor-hover');
          }
        }
      } catch (err) {
        // Guard
      }
    };

    const onMouseDown = () => {
      isClicking = true;
      ring.classList.add('cursor-click');
    };

    const onMouseUp = () => {
      isClicking = false;
      ring.classList.remove('cursor-click');
    };

    const onMouseLeave = () => {
      isVisible = false;
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };

    const onMouseEnter = () => {
      isVisible = true;
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // High-performance 120 FPS GPU RAF Loop
    const loop = () => {
      ringX += (mouseX - ringX) * 0.3;
      ringY += (mouseY - ringY) * 0.3;

      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden no-print">
      {/* Outer Ring: GPU-accelerated directly via translate3d, Teal styling */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-teal-500/60 bg-teal-500/5 opacity-0 transition-[width,height,background-color,border-color] duration-150 ease-out will-change-transform"
      />

      {/* Inner Dot: Zero latency instant tracker in primary Teal */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-teal-600 opacity-0 will-change-transform"
      />
    </div>
  );
}
