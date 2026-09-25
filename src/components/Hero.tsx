import Icon from '@/components/Icon';
import PhoneFrame from '@/components/PhoneFrame';
import TodayScreen from '@/components/TodayScreen';

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

        {/* Right: the app itself — the Today screen while apps are locked */}
        <div className="hero-visual">
          <PhoneFrame label="GymBuddy's Today screen with apps locked" showCaption={false}>
            <TodayScreen />
          </PhoneFrame>
          <div className="hero-tag hero-tag--lock">
            <span className="hero-tag-icon hero-tag-icon--accent"><Icon name="lock" size={16} /></span>
            <div>
              <p className="fl-title">Apps locked</p>
              <p className="fl-sub">Instagram, TikTok + 3 more</p>
            </div>
          </div>
          <div className="hero-tag hero-tag--proof">
            <span className="hero-tag-icon hero-tag-icon--ok"><Icon name="check" size={16} strokeWidth={2.6} /></span>
            <div>
              <p className="fl-title">Proof submitted</p>
              <p className="fl-sub">Iron Works Gym · 7:12 AM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
