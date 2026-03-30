'use client';

import { useEffect, useRef } from 'react';

interface StatItemProps {
  target: number;
  unit: string;
  label: string;
}

function StatItem({ target, unit, label }: StatItemProps) {
  const numRef = useRef<HTMLSpanElement>(null);
  const observed = useRef(false);

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || observed.current) return;
        observed.current = true;
        obs.disconnect();
        if (target === 0) {
          el.textContent = '0';
          return;
        }
        const duration = 1400;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = String(Math.floor(eased * target));
          if (progress < 1) requestAnimationFrame(tick);
          else el.textContent = String(target);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <div className="stat-item">
      <div className="stat-num-row">
        <span className="stat-number" ref={numRef}>0</span>
        <span className="stat-unit" dangerouslySetInnerHTML={{ __html: unit }} />
      </div>
      <p className="stat-label">{label}</p>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="stats-bar">
      <div className="container stats-grid">
        <StatItem target={94} unit="%" label="consistency rate among active users" />
        <div className="stat-divider" />
        <StatItem target={3} unit="x" label="more likely to show up when apps are at stake" />
        <div className="stat-divider" />
        <StatItem target={0} unit="&nbsp;excuses" label="accepted. Proof or no unlock" />
      </div>
    </section>
  );
}
