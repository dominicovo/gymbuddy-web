import Icon, { type IconName } from '@/components/Icon';
import { SunArcIllustration } from '@/components/Illustrations';

const MOMENTS: { time: string; title: string; body: string; icon: IconName; tone: string }[] = [
  { time: '6:00 AM', title: 'Your window opens', body: 'It’s a gym day. A 15-minute grace period gives you time to get out the door.', icon: 'sunrise', tone: 'plain' },
  { time: '6:15 AM', title: 'Apps lock', body: 'Instagram, TikTok and the rest go behind a GymBuddy screen. No snooze button.', icon: 'lock', tone: 'primary' },
  { time: '7:12 AM', title: 'You check in', body: 'At the gym, open GymBuddy and snap a photo of the kit around you.', icon: 'pin', tone: 'plain' },
  { time: '7:12 AM', title: 'Everything unlocks', body: 'Apps open for the rest of the day. Your streak ticks to 9, and buddies see “In at 7:12 AM”.', icon: 'unlock', tone: 'ok' },
  { time: '8:00 PM', title: 'Or the window closes', body: 'Skipped it? Apps unlock anyway so nobody gets stranded, but the streak starts over.', icon: 'moon', tone: 'warn' },
];

export default function DayTimeline() {
  return (
    <section className="section day" id="a-gym-day">
      <div className="container">
        <div className="day-head">
          <div>
            <p className="section-label">A gym day</p>
            <h2 className="section-title">What a Monday looks like</h2>
          </div>
          <div className="day-arc"><SunArcIllustration /></div>
        </div>
        <ol className="day-list">
          {MOMENTS.map((m, i) => (
            <li key={i} className={`day-item day-item--${m.tone}`}>
              <span className="day-clock num">{m.time}</span>
              <span className={`day-icon day-icon--${m.icon}`}><Icon name={m.icon} size={18} /></span>
              <div>
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
