const ROWS: { label: string; screenTime: string; gymbuddy: string }[] = [
  { label: 'Getting past the lock', screenTime: 'Tap “Ignore limit”', gymbuddy: 'Be at your gym' },
  { label: 'What unlocks it', screenTime: 'Waiting it out', gymbuddy: 'A photo taken at the gym' },
  { label: 'Knows your gym days', screenTime: 'No', gymbuddy: 'Yes — and rest days stay unlocked' },
  { label: 'Streaks and history', screenTime: 'No', gymbuddy: 'Streak, best streak, 12-week grid' },
  { label: 'Someone in your corner', screenTime: 'No', gymbuddy: 'Buddies who see if you showed up' },
  { label: 'Changing the rules mid-window', screenTime: 'Any time', gymbuddy: 'Off-limits with Strict mode' },
];

export default function Comparison() {
  return (
    <section className="section compare" id="why-gymbuddy">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Why not just use Screen Time?</p>
          <h2 className="section-title">A limit you can snooze isn&rsquo;t a limit</h2>
          <p className="section-subtitle">
            GymBuddy uses the same Screen Time system underneath. The difference is what it takes to get your apps back.
          </p>
        </div>
        <div className="compare-wrap">
          <table className="compare-table">
            <thead>
              <tr>
                <th scope="col"><span className="sr-only">Feature</span></th>
                <th scope="col">Screen Time limits</th>
                <th scope="col" className="compare-us">GymBuddy</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.label}>
                  <th scope="row">{r.label}</th>
                  <td>{r.screenTime}</td>
                  <td className="compare-us">{r.gymbuddy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
