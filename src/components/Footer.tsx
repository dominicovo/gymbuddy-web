import Logo from '@/components/Logo';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Link href="/" className="nav-logo" aria-label="GymBuddy home">
          <Logo height={16} />
        </Link>
        <p className="footer-copy">&copy; 2026 GymBuddy. Built for people who mean it.</p>
        <div className="footer-links">
          <a href="mailto:hello@gymbuddy.live" className="footer-link">Contact</a>
          <Link href="/support" className="footer-link">Support</Link>
          <Link href="/privacy" className="footer-link">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
