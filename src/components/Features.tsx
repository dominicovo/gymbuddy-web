import { ChainedAppsIllustration } from '@/components/Illustrations';
import Sticker from '@/components/Sticker';

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

          {/* Hero card: what you actually see when you open a locked app */}
          <div className="feature-card feature-card--hero feature-card--shield">
            <Sticker tilt={6} className="shield-sticker">No snooze!</Sticker>
            <div className="shield-mock" aria-hidden>
              <div className="shield-mock-illo"><ChainedAppsIllustration /></div>
              <p className="shield-mock-title">Instagram is locked</p>
              <p className="shield-mock-sub">It&rsquo;s a gym day. Check in at Iron Works Gym to unlock.</p>
              <span className="shield-mock-button">Open GymBuddy</span>
            </div>
            <div className="feature-content">
              <h3 className="feature-title">Real app blocking</h3>
              <p className="feature-desc">
                Powered by iOS Screen Time, the same system-level enforcement Apple uses for parental controls. A locked
                app shows this screen — not a snooze button.
              </p>
              <div className="feature-tag">iOS Screen Time API</div>
            </div>
          </div>

          {/* Private by Design */}
          <div className="feature-card">
            <div className="feature-icon" style={{ background: 'rgba(110,102,255,0.12)', borderColor: 'rgba(110,102,255,0.20)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6E66FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
            <div className="feature-icon" style={{ background: 'rgba(240,179,91,0.12)', borderColor: 'rgba(240,179,91,0.20)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F0B35B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <h3 className="feature-title">Streak Tracking</h3>
            <p className="feature-desc">
              Watch your consistency streak grow. Breaking it stings, and that&apos;s the entire point.
            </p>
          </div>

          {/* Custom Schedules */}
          <div className="feature-card">
            <div className="feature-icon" style={{ background: 'rgba(79,195,181,0.12)', borderColor: 'rgba(79,195,181,0.20)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4FC3B5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
            <div className="feature-icon" style={{ background: 'rgba(95,208,143,0.12)', borderColor: 'rgba(95,208,143,0.20)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5FD08F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
