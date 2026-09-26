import type { ReactNode } from 'react';
import { AppGridIllustration, CalendarIllustration, PinCameraIllustration } from '@/components/Illustrations';

const STEPS: { number: string; title: string; desc: string; visual: ReactNode; tone: string }[] = [
  {
    number: '01',
    title: 'Pick your weaknesses',
    desc: 'Choose apps or whole categories from Apple’s Screen Time picker: social, games, streaming.',
    visual: <AppGridIllustration />,
    tone: 'primary',
  },
  {
    number: '02',
    title: 'Set your schedule',
    desc: 'Pick your gym days and lock window. A 15-minute grace period, then apps lock. Rest days stay open.',
    visual: <CalendarIllustration />,
    tone: 'primary',
  },
  {
    number: '03',
    title: 'Prove it and unlock',
    desc: 'Be within 150 m of your gym, snap a photo, and everything opens for the rest of the day.',
    visual: <PinCameraIllustration />,
    tone: 'green',
  },
];

export default function HowItWorks() {
  return (
    <section className="how section" id="how-it-works">
      <div className="container">
        <p className="section-label">How It Works</p>
        <h2 className="section-title">Three steps. Zero excuses.</h2>
        <div className="how-cards">
          {STEPS.map((step) => (
            <div key={step.number} className="how-card">
              <div className="how-card-top">
                <span className={`how-card-num num how-card-num--${step.tone}`}>{step.number}</span>
                <div className="how-card-illo">{step.visual}</div>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
