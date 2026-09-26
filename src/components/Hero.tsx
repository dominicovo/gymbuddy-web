import { HeroIllustration } from '@/components/Illustrations';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        {/* Left: copy */}
        <div className="hero-copy">
          <div className="hero-badge">
            <span className="badge-dot" />
            Coming to the App Store
          </div>
          <h1 className="hero-title">
            Lock Your<br />
            Distractions.<br />
          </h1>
          <p className="hero-subtitle">
            GymBuddy locks Instagram, TikTok, and games until you physically
            show up at the gym and submit proof. No excuses. Just results.
          </p>
          <div className="hero-actions">
            <a href="#waitlist" className="btn btn-primary btn-lg">
              Get Early Access
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a href="#how-it-works" className="btn btn-ghost btn-lg">
              See how it works
            </a>
          </div>
          <div className="hero-social-proof">
            <div className="avatars">
              <div className="avatar" style={{ background: '#8B84F0' }}>D</div>
              <div className="avatar" style={{ background: '#6E66FF' }}>A</div>
              <div className="avatar" style={{ background: '#5FD08F' }}>M</div>
              <div className="avatar" style={{ background: '#4FC3B5' }}>J</div>
            </div>
            <p className="proof-text">Testers already crushing their goals</p>
          </div>
        </div>

        {/* Right: the deck's hero illustration */}
        <div className="hero-visual">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}
