import { CouchIllustration } from '@/components/Illustrations';

export default function Problem() {
  return (
    <section className="problem" id="the-problem">
      <div className="container problem-grid">
        <div>
          <p className="section-label problem-label">The problem</p>
          <h2 className="problem-title">You don&rsquo;t skip the gym because you&rsquo;re busy.</h2>
          <p className="problem-sub">You skip it because your phone is easier.</p>
        </div>
        <div className="problem-visual">
          <CouchIllustration />
        </div>
      </div>
    </section>
  );
}
