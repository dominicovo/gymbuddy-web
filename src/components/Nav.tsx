export default function Nav() {
  return (
    <nav className="nav" id="nav">
      <div className="nav-inner container">
        <a href="#" className="nav-logo">
          <span className="logo-icon">💪</span>
          <span className="logo-text">GymBuddy</span>
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
