import type { ReactNode } from 'react';
import Icon from '@/components/Icon';

// Each step is illustrated with the piece of the app it describes, not a stock photo.

function AppsVisual() {
  const tiles = [
    { label: 'Social', color: '#E07BB5' },
    { label: 'Video', color: '#E8776E' },
    { label: 'Games', color: '#6E66FF' },
    { label: 'Chat', color: '#4FC3B5' },
    { label: 'News', color: '#F0B35B' },
    { label: 'Shop', color: '#5FD08F' },
  ];
  return (
    <div className="how-visual">
      <div className="how-tiles">
        {tiles.map((t) => (
          <div key={t.label} className="how-tile">
            <span className="how-tile-icon" style={{ background: `${t.color}26`, color: t.color }}>
              <Icon name="grid" size={20} />
            </span>
            <span className="how-tile-label">{t.label}</span>
            <span className="how-tile-lock"><Icon name="lock" size={11} strokeWidth={2.4} /></span>
          </div>
        ))}
      </div>
      <p className="how-visual-chip"><Icon name="shield" size={14} /> Picked in Apple&rsquo;s Screen Time — kept private</p>
    </div>
  );
}

function ScheduleVisual() {
  const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  const on = new Set(['Mo', 'We', 'Fr']);
  return (
    <div className="how-visual">
      <div className="how-days">
        {days.map((d) => (
          <span key={d} className={`how-day${on.has(d) ? ' how-day--on' : ''}`}>{d}</span>
        ))}
      </div>
      <div className="how-window">
        <div className="how-window-col">
          <span className="how-window-label">FROM</span>
          <span className="how-window-time">6:00<small>AM</small></span>
        </div>
        <span className="how-window-dash" aria-hidden>→</span>
        <div className="how-window-col">
          <span className="how-window-label">UNTIL</span>
          <span className="how-window-time">8:00<small>PM</small></span>
        </div>
      </div>
      <p className="how-visual-chip"><Icon name="clock" size={14} /> 15-minute grace period before anything locks</p>
    </div>
  );
}

function ProofVisual() {
  return (
    <div className="how-visual">
      <div className="how-proof-row how-proof-row--ok">
        <span className="how-proof-icon"><Icon name="pin" size={18} /></span>
        <div>
          <p className="how-proof-title">You&rsquo;re at the gym</p>
          <p className="how-proof-sub">Iron Works Gym · 42 m away</p>
        </div>
        <span className="how-proof-check"><Icon name="check" size={14} strokeWidth={2.8} /></span>
      </div>
      <div className="how-proof-row">
        <span className="how-proof-icon how-proof-icon--accent"><Icon name="camera" size={18} /></span>
        <div>
          <p className="how-proof-title">Gym photo taken</p>
          <p className="how-proof-sub">Stays on your phone</p>
        </div>
        <span className="how-proof-check"><Icon name="check" size={14} strokeWidth={2.8} /></span>
      </div>
      <div className="how-unlocked">
        <Icon name="unlock" size={18} /> Apps unlocked · streak day <b className="num">9</b>
      </div>
    </div>
  );
}

const STEPS: { number: string; title: string; desc: string; visual: ReactNode; reverse: boolean }[] = [
  {
    number: '01',
    title: 'Pick your weaknesses',
    desc: 'Choose the apps that get locked on your gym days — social media, games, streaming, whole categories at once. Anything that keeps you on the couch.',
    visual: <AppsVisual />,
    reverse: false,
  },
  {
    number: '02',
    title: 'Set your schedule',
    desc: 'Pick your gym days and your lock window. Apps lock once the window opens and the grace period ends. Rest days stay unlocked.',
    visual: <ScheduleVisual />,
    reverse: true,
  },
  {
    number: '03',
    title: 'Prove it & unlock',
    desc: 'At the gym, GymBuddy checks you’re within 150 m of it, then asks for a photo. That’s it — your apps open for the rest of the day.',
    visual: <ProofVisual />,
    reverse: false,
  },
];

export default function HowItWorks() {
  return (
    <section className="how section" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <p className="section-label">How It Works</p>
          <h2 className="section-title">
            Three steps.<br />Zero tolerance for excuses.
          </h2>
        </div>
        <div className="how-grid">
          {STEPS.map((step) => (
            <div key={step.number} className={`how-step${step.reverse ? ' how-step--reverse' : ''}`}>
              {step.visual}
              <div className="how-step-body">
                <span className="step-number">{step.number}</span>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
