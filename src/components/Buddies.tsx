import Icon from '@/components/Icon';
import Sticker from '@/components/Sticker';

const POINTS = [
  { title: 'Pair with four digits', body: 'Share your pair link or read out your code. Your buddy taps it and you’re connected.' },
  { title: 'See who made it in', body: 'Every buddy, sorted into “still to go”, “checked in” and “rest day” — with their streak next to their name.' },
  { title: 'Cheer or nudge', body: 'Cheer the ones who showed up. Nudge the ones who haven’t. One of each per buddy per day, so it means something.' },
];

export default function Buddies() {
  return (
    <section className="section buddies" id="buddies">
      <div className="container buddies-grid">
        <div className="buddies-copy">
          <p className="section-label">Buddies</p>
          <h2 className="section-title">It&rsquo;s harder to skip when someone&rsquo;s watching</h2>
          <p className="section-subtitle">
            Pair up with the people you train with — or the ones who&rsquo;ll call you out. They see your check-ins and
            your streak. Never your apps, and never where you are.
          </p>
          <ul className="buddies-points">
            {POINTS.map((p, i) => (
              <li key={p.title} className="buddies-point">
                <span className={`buddies-num buddies-num--${i} num`} aria-hidden>{i + 1}</span>
                <div>
                  <p className="buddies-point-title">{p.title}</p>
                  <p className="buddies-point-body">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="pair-card" aria-label="Example pair card">
          <Sticker tone="green" tilt={4} className="pair-sticker">Accountability buddies</Sticker>
          <span className="pair-heart" aria-hidden><Icon name="heart" size={22} fill="#fff" color="#fff" /></span>
          <div className="pair-card-top">
            <span className="pair-avatar">DE</span>
            <div>
              <p className="pair-name">James Doe</p>
              <p className="pair-meta">Trains Mon · Wed · Fri</p>
            </div>
          </div>
          <p className="pair-label">PAIR CODE</p>
          <div className="pair-digits">
            {['4', '8', '2', '1'].map((d, i) => (
              <span key={i} className="pair-digit">{d}</span>
            ))}
          </div>
          <div className="pair-inbox">
            <p className="pair-inbox-row"><span className="pair-mini pair-mini--a"><Icon name="star" size={14} fill="currentColor" /></span> <span><b>Maya</b> cheered your check-in</span></p>
            <p className="pair-inbox-row"><span className="pair-mini pair-mini--b"><Icon name="megaphone" size={14} /></span> <span><b>Jordan</b> nudged you: time to go</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}
