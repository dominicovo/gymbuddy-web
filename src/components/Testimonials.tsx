import Icon from '@/components/Icon';

export default function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Early Testers</p>
          <h2 className="section-title">People who actually showed up</h2>
        </div>
        <div className="testi-grid">

          {/* Featured */}
          <div className="testi-card testi-card--featured">
            <span className="testi-quote-mark"><Icon name="quote" size={28} /></span>
            <blockquote className="testi-quote">
              &ldquo;The only fitness app that actually stops me from reaching for Instagram when I
              should be reaching for the barbell. Been consistent for 3 months straight.&rdquo;
            </blockquote>
            <div className="testi-author">
              <div className="testi-avatar" style={{ background: '#8B84F0' }}>A</div>
              <div>
                <p className="testi-name">Alpha Tester</p>
                <p className="testi-role">🔥 89-day streak</p>
              </div>
            </div>
          </div>

          {/* Side column */}
          <div className="testi-col">
            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <blockquote className="testi-quote testi-quote--sm">
                &ldquo;I skipped the gym for two years. GymBuddy made me go 4 times in my first
                week because I literally couldn&rsquo;t open Twitter.&rdquo;
              </blockquote>
              <div className="testi-author">
                <div className="testi-avatar" style={{ background: '#4FC3B5' }}>M</div>
                <div>
                  <p className="testi-name">Michael R.</p>
                  <p className="testi-role">🔥 28-day streak</p>
                </div>
              </div>
            </div>
            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <blockquote className="testi-quote testi-quote--sm">
                &ldquo;Blocked TikTok, went to the gym every day for a month. My body changed. My
                screen time didn&rsquo;t.&rdquo;
              </blockquote>
              <div className="testi-author">
                <div className="testi-avatar" style={{ background: '#5FD08F' }}>J</div>
                <div>
                  <p className="testi-name">Jordan K.</p>
                  <p className="testi-role">🔥 31-day streak</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
