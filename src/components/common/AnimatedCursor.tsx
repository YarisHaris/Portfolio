'use client';

import { useEffect, useRef } from 'react';

export default function AnimatedCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on desktop
    if (window.matchMedia('(max-width: 768px)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.classList.contains('hover-scale')
      ) {
        if (cursorRef.current) {
          cursorRef.current.style.transform = 'scale(1.5)';
        }
      }
    };

    const handleMouseOut = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = 'scale(1)';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed w-2 h-2 bg-primary-blue rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2"
      />
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 border-2 border-primary-blue rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100"
      />
    </>
  );
}
