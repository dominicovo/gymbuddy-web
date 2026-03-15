import Image from 'next/image';

export default function Features() {
  return (
    <section className="features section" id="features">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Features</p>
          <h2 className="section-title">Built for people who keep skipping</h2>
          <p className="section-subtitle">
            Every feature is designed to make discipline the path of least resistance.
          </p>
        </div>
        <div className="features-grid">

          {/* Hero card */}
          <div className="feature-card feature-card--hero">
            <Image
              src="https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=900&h=600&fit=crop&q=80"
              alt="App Blocking"
              fill
              className="feature-bg-img"
              style={{ objectFit: 'cover' }}
            />
            <div className="feature-img-overlay" />
            <div className="feature-content">
              <div className="feature-icon" style={{ background: 'rgba(255,107,53,0.18)', borderColor: 'rgba(255,107,53,0.30)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h3 className="feature-title">Real App Blocking</h3>
              <p className="feature-desc">
                Powered by iOS Screen Time — the same system-level enforcement Apple uses for parental controls. There is no workaround.
              </p>
              <div className="feature-tag">iOS Screen Time API</div>
            </div>
          </div>

          {/* Private by Design */}
          <div className="feature-card">
            <div className="feature-icon" style={{ background: 'rgba(191,90,242,0.12)', borderColor: 'rgba(191,90,242,0.20)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#BF5AF2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3 className="feature-title">Private by Design</h3>
            <p className="feature-desc">
              GymBuddy never sees which apps you select. Your choices stay entirely on your device.
            </p>
          </div>

          {/* Streak Tracking */}
          <div className="feature-card">
            <div className="feature-icon" style={{ background: 'rgba(255,214,10,0.12)', borderColor: 'rgba(255,214,10,0.20)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD60A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <h3 className="feature-title">Streak Tracking</h3>
            <p className="feature-desc">
              Watch your consistency streak grow. Breaking it stings — and that&apos;s the entire point.
            </p>
          </div>

          {/* Custom Schedules */}
          <div className="feature-card">
            <div className="feature-icon" style={{ background: 'rgba(10,132,255,0.12)', borderColor: 'rgba(10,132,255,0.20)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A84FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 6h13" /><path d="M8 12h13" /><path d="M8 18h13" />
                <path d="M3 6h.01" /><path d="M3 12h.01" /><path d="M3 18h.01" />
              </svg>
            </div>
            <h3 className="feature-title">Custom Schedules</h3>
            <p className="feature-desc">
              Choose your gym days and exact lock window. Set it once and stay locked in.
            </p>
          </div>

          {/* Instant Photo Proof */}
          <div className="feature-card">
            <div className="feature-icon" style={{ background: 'rgba(48,209,88,0.12)', borderColor: 'rgba(48,209,88,0.20)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#30D158" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                <circle cx="12" cy="13" r="3" />
              </svg>
            </div>
            <h3 className="feature-title">Instant Photo Proof</h3>
            <p className="feature-desc">
              Snap a selfie at the gym. Verified in seconds, apps unlocked immediately after.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
