import type { ReactNode } from 'react';

// The tilted pill labels from the pitch deck ("No snooze!", "Live countdown").
export default function Sticker({ children, tone = 'amber', tilt = 6, className = '' }: { children: ReactNode; tone?: 'amber' | 'green' | 'pink'; tilt?: number; className?: string }) {
  return (
    <span className={`sticker sticker--${tone} ${className}`} style={{ transform: `rotate(${tilt}deg)` }} aria-hidden>
      {children}
    </span>
  );
}
