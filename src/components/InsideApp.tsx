import Icon from '@/components/Icon';
import PhoneFrame from '@/components/PhoneFrame';
import Sticker from '@/components/Sticker';
import TodayScreen from '@/components/TodayScreen';
import { Sparkle } from '@/components/Illustrations';

export default function InsideApp() {
  return (
    <section className="section inside" id="inside-the-app">
      <div className="container inside-grid">
        <div className="inside-phones">
          <div className="inside-phone">
            <PhoneFrame label="The Today screen" showCaption={false}>
              <TodayScreen />
            </PhoneFrame>
            <Sticker tone="green" tilt={-6} className="inside-sticker inside-sticker--today">Live countdown</Sticker>
          </div>
          <div className="inside-phone inside-phone--shield">
            <PhoneFrame label="The lock screen on a blocked app" showCaption={false}>
              <div className="shield-screen">
                <span className="shield-screen-icon"><Icon name="lock" size={26} /></span>
                <p className="shield-screen-title">Instagram is locked</p>
                <p className="shield-screen-sub">It&rsquo;s a gym day. Check in at Iron Works Gym to unlock.</p>
                <span className="shield-screen-button">Open GymBuddy</span>
              </div>
            </PhoneFrame>
            <Sticker tilt={5} className="inside-sticker inside-sticker--shield">No snooze button</Sticker>
          </div>
          <svg className="inside-sparkle" viewBox="-20 -20 40 40" aria-hidden><Sparkle x={0} y={0} s={18} color="#F0B35B" /></svg>
        </div>
        <div>
          <p className="section-label">Inside the app</p>
          <h2 className="section-title">Two screens do the work</h2>
          <div className="inside-point">
            <h3>Today</h3>
            <p>A live countdown to the end of your window, your streak, and one button: I&rsquo;m at the gym.</p>
          </div>
          <div className="inside-point">
            <h3>The lock screen</h3>
            <p>Tap a locked app and GymBuddy&rsquo;s shield tells you exactly what it takes to get it back.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
