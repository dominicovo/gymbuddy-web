import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="blob blob-orange" />
        <div className="blob blob-purple" />
        <div className="blob blob-blue" />
      </div>
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
            <span className="gradient-text">
              Earn Your<br />Freedom.
            </span>
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
              <div className="avatar" style={{ background: '#FF6B35' }}>D</div>
              <div className="avatar" style={{ background: '#BF5AF2' }}>A</div>
              <div className="avatar" style={{ background: '#30D158' }}>M</div>
              <div className="avatar" style={{ background: '#0A84FF' }}>J</div>
            </div>
            <p className="proof-text">Testers already crushing their goals</p>
          </div>
        </div>

        {/* Right: image collage */}
        <div className="hero-collage">
          <div className="collage-card collage-card--tall">
            <Image
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80&fit=crop"
              alt="Gym workout"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            <div className="collage-overlay" />
            <div className="collage-badge-pill">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#30D158" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Proof submitted
            </div>
          </div>
          <div className="collage-col">
            <div className="collage-card collage-card--short">
              <Image
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80&fit=crop"
                alt="Abs workout"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="collage-overlay" />
              <div className="collage-streak">🔥 12 day streak</div>
            </div>
            <div className="collage-card collage-card--short">
              <Image
                src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&q=80&fit=crop"
                alt="Weight training"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="collage-overlay" />
            </div>
          </div>
          {/* Floating widget */}
          <div className="floating-lock">
            <div className="fl-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="11" x="3" y="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <div>
              <p className="fl-title">Apps Locked</p>
              <p className="fl-sub">Go train first 💪</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
