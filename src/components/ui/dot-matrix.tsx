'use client'

import { useEffect, useState } from 'react';

interface DotMatrixProps {
  className?: string;
  dotColor?: string;
  dotSize?: number;
  gridSize?: number;
  highlightColor?: string;
  maxHighlightDots?: number;
}

interface DotPosition {
  x: number;
  y: number;
  isHighlighted: boolean;
}

export function DotMatrix({
  className = "",
  dotColor = "#e4d5ff",
  dotSize = 2,
  gridSize = 35,
  maxHighlightDots = 10
}: DotMatrixProps) {
  const [dots, setDots] = useState<DotPosition[]>([]);

  useEffect(() => {
    const updateDots = () => {
      const container = document.querySelector(`.${className.split(' ')[0]}`);
      if (!container) return;

      const { width, height } = container.getBoundingClientRect();
      const columns = Math.floor(width / gridSize);
      const rows = Math.floor(height / gridSize);
      
      const dotPositions: DotPosition[] = [];
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
          dotPositions.push({
            x: col * gridSize,
            y: row * gridSize,
            isHighlighted: false
          });
        }
      }

      const totalDots = dotPositions.length;
      const highlightCount = Math.min(maxHighlightDots, Math.floor(Math.random() * 6) + 5);
      
      const indices = Array.from({ length: totalDots }, (_, i) => i);
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }

      indices.slice(0, highlightCount).forEach(index => {
        dotPositions[index].isHighlighted = true;
      });

      setDots(dotPositions);
    };

    updateDots();

    const intervalId = setInterval(updateDots, 1000);

    const resizeObserver = new ResizeObserver(updateDots);
    const container = document.querySelector(`.${className.split(' ')[0]}`);
    if (container) {
      resizeObserver.observe(container);
    }

    return () => {
      clearInterval(intervalId);
      if (container) {
        resizeObserver.unobserve(container);
      }
      resizeObserver.disconnect();
    };
  }, [className, gridSize, maxHighlightDots]);

  return (
    <div
      className={className}
      style={{
        background: `radial-gradient(${dotColor} ${dotSize}px, transparent ${dotSize}px)`,
        backgroundSize: `${gridSize}px ${gridSize}px`,
        backgroundPosition: `${gridSize/2}px ${gridSize/2}px`,
        maskImage: "linear-gradient(to right, white, transparent)",
        WebkitMaskImage: "linear-gradient(to right, white, transparent)",
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {dots.filter(dot => dot.isHighlighted).map(dot => (
        <div
          key={`${dot.x}-${dot.y}`}
          className="dot-highlight"
          style={{
            position: 'absolute',
            left: `${dot.x}px`,
            top: `${dot.y}px`,
            width: `${dotSize * 2}px`,
            height: `${dotSize * 2}px`,
            backgroundColor: '#9333ea',
            boxShadow: `
              0 0 2px #e4d5ff,
              0 0 4px #9333ea,
              0 0 5px #7c3aed,
              0 0 6px #6d28d9
            `,
            transform: 'translate(-50%, -50%)',
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
}