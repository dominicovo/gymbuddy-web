import Logo from '@/components/Logo';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="nav" id="nav">
      <div className="nav-inner container">
        <Link href="/" className="nav-logo" aria-label="GymBuddy home">
          <Logo />
        </Link>
        <div className="nav-links">
          <Link href="/#how-it-works" className="nav-link">How it works</Link>
          <Link href="/#buddies" className="nav-link">Buddies</Link>
          <Link href="/#faq" className="nav-link">FAQ</Link>
        </div>
        <Link href="/#waitlist" className="btn btn-primary btn-sm nav-cta">
          Get Early Access
        </Link>
      </div>
    </nav>
  );
}
