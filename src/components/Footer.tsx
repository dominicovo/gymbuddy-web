import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#" className="nav-logo">
          <Image src="/Gymbuddy-logo.png" alt="GymBuddy" height={30} width={135} style={{ objectFit: 'contain' }} />
        </a>
        <p className="footer-copy">&copy; 2026 GymBuddy. Built for people who mean it.</p>
        <div className="footer-links">
          <a href="mailto:hello@gymbuddy.app" className="footer-link">Contact</a>
          <a href="#" className="footer-link">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
