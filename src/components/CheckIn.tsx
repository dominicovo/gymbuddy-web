import Icon from '@/components/Icon';

export default function CheckIn() {
  return (
    <section className="section checkin" id="check-in">
      <div className="container">
        <p className="section-label">Check-in</p>
        <h2 className="section-title">Prove it and unlock</h2>
        <div className="checkin-grid">
          <div className="checkin-steps">
            <div className="how-proof-row">
              <span className="how-proof-icon how-proof-icon--accent"><Icon name="camera" size={18} /></span>
              <div>
                <p className="how-proof-title">Gym photo taken</p>
                <p className="how-proof-sub">The rack, the weights, the view from the treadmill</p>
              </div>
              <span className="how-proof-check"><Icon name="check" size={14} strokeWidth={2.8} /></span>
            </div>
            <div className="how-proof-row">
              <span className="how-proof-icon"><Icon name="lock" size={18} /></span>
              <div>
                <p className="how-proof-title">Looks like a gym</p>
                <p className="how-proof-sub">Checked on your phone · never uploaded</p>
              </div>
              <span className="how-proof-check"><Icon name="check" size={14} strokeWidth={2.8} /></span>
            </div>
            <div className="how-unlocked">
              <Icon name="unlock" size={18} /> Apps unlocked · streak day <b className="num">9</b>
            </div>
          </div>
          <div className="checkin-map">
            <p className="checkin-big num">0 uploads</p>
            <p className="checkin-text">
              Apple&rsquo;s on-device image recognition checks your photo looks like a gym. The photo never leaves your
              phone, and a photo of a screen doesn&rsquo;t count.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
