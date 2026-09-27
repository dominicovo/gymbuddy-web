import Link from 'next/link';
import Icon, { type IconName } from '@/components/Icon';
import Logo from '@/components/Logo';
import WaitlistForm from '@/components/WaitlistForm';
import { HeroIllustration } from '@/components/Illustrations';

// Pre-launch: one screen with the early-access form. The full landing page
// sections (Hero, HowItWorks, DayTimeline, Buddies, …) are still in
// src/components for when we bring it back.

const POINTS: { icon: IconName; tone: string; text: string }[] = [
  { icon: 'lock', tone: 'primary', text: 'Real, system-level app blocking' },
  { icon: 'clock', tone: 'amber', text: 'Only on your gym days, inside your window' },
  { icon: 'camera', tone: 'green', text: 'Unlocked with a photo check-in at the gym' },
];

export default function Home() {
  return (
    <div className="launch">
      <header className="container launch-header">
        <Link href="/" aria-label="GymBuddy home"><Logo /></Link>
      </header>

      <main className="container launch-grid" id="waitlist">
        <div className="launch-copy">
          <div className="hero-badge">
            <span className="badge-dot" />
            Coming soon to the App Store
          </div>
          <h1 className="launch-title">Lock your distractions.</h1>
          <p className="launch-sub">
            GymBuddy locks Instagram, TikTok and games on your gym days until you show up at the gym and prove it.
          </p>
          <ul className="launch-points">
            {POINTS.map((p) => (
              <li key={p.text}>
                <span className={`launch-point-icon launch-point-icon--${p.tone}`}><Icon name={p.icon} size={16} /></span>
                {p.text}
              </li>
            ))}
          </ul>
          <p className="launch-form-label">Get early access. We&rsquo;ll email you the day it launches.</p>
          <WaitlistForm />
          <p className="waitlist-note">No spam. Unsubscribe anytime.</p>
        </div>
        <div className="launch-visual">
          <HeroIllustration />
        </div>
      </main>

      <footer className="container launch-footer">
        <span>&copy; 2026 GymBuddy</span>
        <Link href="/support">Support</Link>
        <Link href="/privacy">Privacy</Link>
        <a href="mailto:hello@gymbuddy.live">hello@gymbuddy.live</a>
      </footer>
    </div>
  );
}
