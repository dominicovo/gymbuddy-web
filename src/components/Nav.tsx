'use client';

import Logo from '@/components/Logo';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const LINKS = [
  { href: '/#how-it-works', label: 'How it works' },
  { href: '/#buddies', label: 'Buddies' },
  { href: '/#faq', label: 'FAQ' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  // Open state lives in data-open, not className: AnimationProvider toggles
  // the "scrolled" class directly on this element.
  return (
    <nav className="nav" id="nav" data-open={open || undefined}>
      <div className="nav-inner container">
        <Link href="/" className="nav-logo" aria-label="GymBuddy home" onClick={close}>
          <Logo />
        </Link>
        <div className="nav-links">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link">{l.label}</Link>
          ))}
        </div>
        <Link href="/#waitlist" className="btn btn-primary btn-sm nav-cta">
          Get Early Access
        </Link>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>
      </div>
      <div id="nav-menu" className="nav-menu container" hidden={!open}>
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} className="nav-menu-link" onClick={close}>{l.label}</Link>
        ))}
        <Link href="/#waitlist" className="btn btn-primary btn-lg nav-menu-cta" onClick={close}>
          Get Early Access
        </Link>
      </div>
    </nav>
  );
}
