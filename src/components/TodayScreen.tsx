// GymBuddy's Today screen while apps are locked, redrawn from the iOS app for the hero.
export default function TodayScreen() {
  return (
    <div className="ps">
      <p className="ps-eyebrow">WEDNESDAY 24 SEP</p>
      <div className="ps-row ps-between">
        <p className="ps-title">Today</p>
        <span className="ps-streak">🔥 <b className="num">8</b></span>
      </div>
      <div className="ps-card ps-card--locked">
        <div className="ps-row ps-between">
          <span className="ps-chip ps-chip--accent">🔒 APPS LOCKED</span>
          <span className="ps-muted ps-small">6:00 – 8:00 PM</span>
        </div>
        <p className="num ps-big">1:42</p>
        <p className="ps-muted ps-small">left in today&rsquo;s window</p>
        <div className="ps-track"><span style={{ width: '38%' }} /></div>
        <p className="ps-body">Get to the gym and check in to unlock everything.</p>
        <span className="ps-button">I&rsquo;m at the gym</span>
      </div>
      <div className="ps-week">
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
          <div key={i} className="ps-day">
            <span className={i === 2 ? 'ps-accent' : 'ps-faint'}>{d}</span>
            <span className={`ps-dot${i === 0 ? ' ps-dot--done' : ''}${i === 2 ? ' ps-dot--today' : ''}${i === 4 ? ' ps-dot--sched' : ''}`}>
              {i === 0 ? '✓' : <b className="num">{22 + i}</b>}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
