import Image from 'next/image';

const STEPS = [
  {
    number: '01',
    title: 'Pick Your Weaknesses',
    desc: 'Select which apps get locked on your gym days — social media, games, streaming. Anything that keeps you on the couch.',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=700&h=460&fit=crop&q=80',
    imgAlt: 'Choose apps',
    imgLabel: 'Select from your installed apps',
    labelIcon: null,
    reverse: false,
  },
  {
    number: '02',
    title: 'Set Your Schedule',
    desc: 'Pick your gym days and lock window. Apps are blocked the moment that window opens — no sneaking in one last scroll.',
    img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=700&h=460&fit=crop&q=80',
    imgAlt: 'Calendar schedule',
    imgLabel: 'Mon · Wed · Fri',
    labelIcon: null,
    reverse: true,
  },
  {
    number: '03',
    title: 'Prove It & Unlock',
    desc: 'Snap a photo at the gym. GymBuddy verifies your proof and instantly unlocks your apps. You earned it — every single time.',
    img: 'https://images.unsplash.com/photo-1549476464-37392f717541?w=700&h=460&fit=crop&q=80',
    imgAlt: 'Workout proof',
    imgLabel: 'Verified — apps unlocked',
    labelIcon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#30D158" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
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
              <div className="how-step-img">
                <Image src={step.img} alt={step.imgAlt} fill style={{ objectFit: 'cover' }} />
                <div className="how-step-img-overlay" />
                <div className="how-step-img-label">
                  {step.labelIcon}
                  {step.imgLabel}
                </div>
              </div>
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
