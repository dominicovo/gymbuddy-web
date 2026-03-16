import Image from 'next/image';

export default function Nav() {
  return (
    <nav className="nav" id="nav">
      <div className="nav-inner container">
        <a href="#" className="nav-logo">
          <Image src="/Gymbuddy-logo.png" alt="GymBuddy" height={36} width={160} style={{ objectFit: 'contain' }} priority />
        </a>
        <div className="nav-links">
          <a href="#how-it-works" className="nav-link">How it works</a>
          <a href="#features" className="nav-link">Features</a>
        </div>
        <a href="#waitlist" className="btn btn-primary btn-sm nav-cta">
          Get Early Access
        </a>
      </div>
    </nav>
  );
}
