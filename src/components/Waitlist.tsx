'use client';

import { useState, type FormEvent } from 'react';
import { Confetti, DumbbellFlameIllustration } from '@/components/Illustrations';

export default function Waitlist() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    setError(null);
    setLoading(true);
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.detail ?? 'Something went wrong. Please try again.');
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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
            {submitted ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '14px',
                  animation: 'fadeInScale 0.4s ease',
                }}
              >
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    background: 'rgba(95,208,143,0.14)',
                    border: '1px solid rgba(95,208,143,0.30)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 26,
                  }}
                >
                  ✓
                </div>
                <p style={{ fontSize: 18, fontWeight: 700, color: '#fff' }}>You&apos;re on the list!</p>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>
                  We&apos;ll email{' '}
                  <strong style={{ color: 'rgba(255,255,255,0.75)' }}>{email}</strong> when
                  GymBuddy launches.
                </p>
              </div>
            ) : (
              <form className="waitlist-form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  className="waitlist-input"
                  placeholder="your@email.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                />
                <button
                  type="submit"
                  className="btn btn-primary btn-lg waitlist-btn"
                  disabled={loading}
                >
                  {loading ? 'Adding…' : 'Notify Me'}
                </button>
                {error && (
                  <p style={{ color: 'rgba(232,119,110,1)', fontSize: 14, marginTop: 8 }}>
                    {error}
                  </p>
                )}
              </form>
            )}
            <p className="waitlist-note">No spam. Unsubscribe anytime.</p>
            <div className="waitlist-dumbbell"><DumbbellFlameIllustration /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
