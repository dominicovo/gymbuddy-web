const MOMENTS = [
  { time: '6:00', period: 'AM', title: 'Your window opens', body: 'Monday is a gym day. The 15-minute grace period starts — plenty of time to get out the door.' },
  { time: '6:15', period: 'AM', title: 'Apps lock', body: 'Instagram, TikTok and whatever else you picked go behind a GymBuddy screen. Tapping one just tells you what it takes.' },
  { time: '7:12', period: 'AM', title: 'You check in', body: 'Inside 150 m of your gym, open GymBuddy, snap a photo. Location first, photo second — both on your phone.' },
  { time: '7:12', period: 'AM', title: 'Everything unlocks', body: 'Apps open for the rest of the day. Your streak ticks to 9, and your buddies see “In at 7:12 AM”.', tone: 'ok' },
  { time: '8:00', period: 'PM', title: 'Or the window closes', body: 'Skipped it? Apps unlock anyway when the window ends — no one gets stranded — but the streak starts over.', tone: 'warn' },
];

export default function DayTimeline() {
  return (
    <section className="section day" id="a-gym-day">
      <div className="container day-grid">
        <div className="day-intro">
          <p className="section-label">A gym day</p>
          <h2 className="section-title">What a Monday looks like</h2>
          <p className="section-subtitle">
            You pick the days and the window. GymBuddy does the rest — and it never locks you out past the time you set.
          </p>
        </div>
        <ol className="day-list">
          {MOMENTS.map((m, i) => (
            <li key={i} className={`day-item${m.tone ? ` day-item--${m.tone}` : ''}`}>
              <div className="day-time">
                <span className="day-clock">{m.time}</span>
                <span className="day-period">{m.period}</span>
              </div>
              <div className="day-body">
                <h3 className="day-title">{m.title}</h3>
                <p className="day-text">{m.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
