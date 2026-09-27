import { Confetti, DumbbellFlameIllustration } from '@/components/Illustrations';
import WaitlistForm from '@/components/WaitlistForm';

export default function Waitlist() {
  return (
    <section className="waitlist section" id="waitlist">
      <div className="container">
        <div className="waitlist-card">
          <div className="waitlist-confetti"><Confetti /></div>
          <div className="waitlist-inner">
            <p className="section-label" style={{ textAlign: 'center' }}>Early Access</p>
            <h2 className="waitlist-title">Be first to hold yourself accountable</h2>
            <p className="waitlist-subtitle">
              GymBuddy is heading to the App Store. Drop your email and we&rsquo;ll notify you the
              moment it launches.
            </p>
            <WaitlistForm />
            <p className="waitlist-note">No spam. Unsubscribe anytime.</p>
            <div className="waitlist-dumbbell"><DumbbellFlameIllustration /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
