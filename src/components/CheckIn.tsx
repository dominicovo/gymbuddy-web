import Icon from '@/components/Icon';
import { GeofenceIllustration } from '@/components/Illustrations';

export default function CheckIn() {
  return (
    <section className="section checkin" id="check-in">
      <div className="container">
        <p className="section-label">Check-in</p>
        <h2 className="section-title">Prove it and unlock</h2>
        <div className="checkin-grid">
          <div className="checkin-steps">
            <div className="how-proof-row">
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
          <div className="checkin-map">
            <GeofenceIllustration />
            <p className="checkin-big num">150 m</p>
            <p className="checkin-text">
              GymBuddy checks you&rsquo;re within 150 metres of your chosen gym, then asks for a photo. Location first,
              photo second.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
