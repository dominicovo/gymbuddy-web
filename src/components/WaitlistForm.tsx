'use client';

import { useState, type FormEvent } from 'react';

// The early-access email form: posts to /api/waitlist, then shows a confirmation.
export default function WaitlistForm() {
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

  if (submitted) {
    return (
      <div className="waitlist-success" role="status">
        <span className="waitlist-success-mark" aria-hidden>✓</span>
        <p className="waitlist-success-title">You&apos;re on the list!</p>
        <p className="waitlist-success-sub">
          We&apos;ll email <strong>{email}</strong> when GymBuddy launches.
        </p>
      </div>
    );
  }

  return (
    <>
      <form className="waitlist-form" onSubmit={handleSubmit}>
        <input
          type="email"
          className="waitlist-input"
          placeholder="your@email.com"
          aria-label="Email address"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />
        <button type="submit" className="btn btn-primary btn-lg waitlist-btn" disabled={loading}>
          {loading ? 'Adding…' : 'Notify Me'}
        </button>
      </form>
      {error && <p className="waitlist-error" role="alert">{error}</p>}
    </>
  );
}
