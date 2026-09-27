import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

// Plain-English privacy policy, written from what the app and site actually
// do with data. Review with counsel before launch.

export const metadata: Metadata = {
  title: 'Privacy policy',
  description: 'What GymBuddy collects, what stays on your iPhone, and how to delete your account.',
  alternates: { canonical: '/privacy' },
};

const UPDATED = '24 September 2026';

const SEES = [
  'Your name, handle and — if you add one — your profile photo',
  'Your gym days and lock window',
  'The day and time you checked in, and your streak',
  'Which buddies you’ve paired with, and the cheers and nudges you send',
];

const NEVER = [
  'Which apps you locked — Apple keeps that list on your iPhone, even from us',
  'Your check-in photo — it never leaves your phone',
  'Your location history — it’s checked against your gym on the phone, at the moment you check in',
  'Anything you do inside your other apps',
];

export default function PrivacyPage() {
  return (
    <>
      <Nav minimal />
      <main className="legal container">
        <p className="section-label">Privacy policy</p>
        <h1 className="legal-title">Your apps get locked. Your data doesn&rsquo;t get shared.</h1>
        <p className="legal-updated">Last updated {UPDATED}</p>

        <section className="legal-section">
          <h2>At a glance</h2>
          <p>We lock your apps. We don&rsquo;t look inside them.</p>
          <div className="privacy-grid legal-glance">
            <div className="privacy-col">
              <h3 className="privacy-heading">What GymBuddy stores</h3>
              <ul className="privacy-list">
                {SEES.map((item) => (
                  <li key={item}><span className="privacy-mark privacy-mark--yes" aria-hidden>●</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="privacy-col">
              <h3 className="privacy-heading">What it never sees</h3>
              <ul className="privacy-list">
                {NEVER.map((item) => (
                  <li key={item}><span className="privacy-mark privacy-mark--no" aria-hidden>✕</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <p>Nothing is sold or used for ads, and you can delete your account — and everything on it — from Settings in the app.</p>
        </section>

        <section className="legal-section">
          <h2>What we collect</h2>
          <h3>When you sign in</h3>
          <p>
            You sign in with Apple or Google. They share your name and email address with us (Apple lets you hide your
            real email). We never see your Apple or Google password.
          </p>
          <h3>Your GymBuddy profile</h3>
          <p>
            Your name, a handle, a 4-digit pair code, and — only if you add one — a profile photo. Buddies you pair with
            can see these.
          </p>
          <h3>Your schedule and check-ins</h3>
          <p>
            Your gym days and lock window, the date and time of each check-in, and your streak. We store these so your
            buddies can tell a rest day from a missed one.
          </p>
          <h3>Buddies</h3>
          <p>Who you&rsquo;ve paired with, pending requests, and the cheers and nudges you send and receive.</p>
          <h3>The waitlist</h3>
          <p>If you join the waitlist on this site, we store your email address to tell you when GymBuddy launches.</p>
        </section>

        <section className="legal-section">
          <h2>What stays on your iPhone</h2>
          <ul>
            <li>
              <strong>Your locked apps.</strong> GymBuddy uses Apple&rsquo;s Screen Time. Apple gives us an anonymous token
              for your selection — we can&rsquo;t read which apps or categories it contains.
            </li>
            <li>
              <strong>Your check-in photo.</strong> It&rsquo;s taken to prove you&rsquo;re there and isn&rsquo;t uploaded.
            </li>
            <li>
              <strong>Your location.</strong> When you check in, the app compares where you are with where your gym is, on
              the phone. Only the result — that you checked in — is saved.
            </li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>Who helps us run GymBuddy</h2>
          <p>
            Your account, profile, check-ins and buddies are stored with Supabase, our database and sign-in provider.
            Apple and Google handle sign-in. This website is hosted by Vercel. We don&rsquo;t sell your data, and we
            don&rsquo;t use it for advertising.
          </p>
        </section>

        <section className="legal-section">
          <h2>Deleting your data</h2>
          <p>
            In the app, go to <strong>Settings → Delete account</strong>. This permanently deletes your profile, photo,
            buddy connections, check-ins and nudges. To remove your email from the waitlist, email us.
          </p>
        </section>

        <section className="legal-section">
          <h2>Children</h2>
          <p>GymBuddy isn&rsquo;t intended for children under 13, and we don&rsquo;t knowingly collect their data.</p>
        </section>

        <section className="legal-section">
          <h2>Changes and contact</h2>
          <p>
            If this policy changes, we&rsquo;ll update the date above. Questions? Email{' '}
            <a href="mailto:hello@gymbuddy.live">hello@gymbuddy.live</a>.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
