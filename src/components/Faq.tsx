const FAQS = [
  {
    q: 'What happens if I miss my window?',
    a: 'Your apps unlock when the window closes — GymBuddy never keeps you locked out past the time you chose. Your streak starts over on your next gym day.',
  },
  {
    q: 'What about rest days, or being ill?',
    a: 'Nothing locks on days that aren’t gym days. If you’re ill, change your schedule in Settings. With Strict mode on, you just can’t change it while a window is already open.',
  },
  {
    q: 'Can I get my apps back without going?',
    a: 'Not while the window is open. Unlocking takes a check-in from within 150 m of your gym. The 15-minute grace period at the start gives you time to get out the door.',
  },
  {
    q: 'Can’t I just cheat?',
    a: 'GymBuddy isn’t a lie detector — it’s built so that going is easier than getting around it. It checks your location against your gym and asks for a photo, and your buddies see when you check in.',
  },
  {
    q: 'Which apps can I lock?',
    a: 'Any of them. You pick apps or whole categories — social, games, entertainment — from Apple’s own Screen Time picker.',
  },
  {
    q: 'Is it on Android?',
    a: 'Not yet. GymBuddy is built on Apple’s Screen Time, so it’s iPhone only for now.',
  },
  {
    q: 'How do I sign up?',
    a: 'Sign in with Apple or Google — no passwords, no codes. Join the waitlist below to hear the moment it’s on the App Store.',
  },
];

export default function Faq() {
  return (
    <section className="section faq" id="faq">
      <div className="container faq-grid">
        <div>
          <p className="section-label">FAQ</p>
          <h2 className="section-title">Questions people ask</h2>
          <p className="section-subtitle">
            Something else? <a href="mailto:hello@gymbuddy.app" className="faq-link">Email us</a>.
          </p>
        </div>
        <div className="faq-list">
          {FAQS.map((f) => (
            <details key={f.q} className="faq-item">
              <summary className="faq-q">
                {f.q}
                <span className="faq-plus" aria-hidden>+</span>
              </summary>
              <p className="faq-a">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
