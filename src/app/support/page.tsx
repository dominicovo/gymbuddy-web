import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

// The App Store "Support URL". Answers what people actually get stuck on,
// then how to reach a human.

export const metadata: Metadata = {
  title: 'Support',
  description: 'Help with GymBuddy: locking apps, checking in, buddies, notifications and deleting your account.',
  alternates: { canonical: '/support' },
};

const EMAIL = 'hello@gymbuddy.live';

const QUESTIONS: { q: string; a: React.ReactNode }[] = [
  {
    q: 'My apps didn’t lock. What’s wrong?',
    a: (
      <>
        GymBuddy locks through Apple&rsquo;s Screen Time, so it needs that permission and at least one app or category
        picked. Check <strong>Settings → Locked apps</strong> in GymBuddy, and that today is one of your gym days. Apps
        lock when your window opens, after the grace period you set.
      </>
    ),
  },
  {
    q: 'How do I unlock my apps?',
    a: (
      <>
        At the gym, open GymBuddy and tap <strong>I&rsquo;m at the gym</strong>, then take a photo. The app checks on
        your phone that it looks like a gym: get some equipment in the shot. If a genuine photo keeps getting turned
        down, <strong>Use this photo anyway</strong> appears after three tries. Apps also unlock by themselves when your
        window ends.
      </>
    ),
  },
  {
    q: 'How do I add a buddy?',
    a: (
      <>
        Go to <strong>Buddies → Add</strong>. Share your invite, or enter your buddy&rsquo;s 4-digit pair code. They
        accept your request on their Buddies tab, and from then on you&rsquo;ll see each other&rsquo;s check-ins and
        streaks. To remove a buddy, swipe left on their name.
      </>
    ),
  },
  {
    q: 'I’m not getting notifications from buddies.',
    a: (
      <>
        Turn them on in <strong>Settings → Notifications</strong> in GymBuddy, and check GymBuddy is allowed in your
        iPhone&rsquo;s Settings → Notifications. If you use a Focus mode, allow GymBuddy there too.
      </>
    ),
  },
  {
    q: 'Can GymBuddy see which apps I lock, or my photos?',
    a: (
      <>
        No. Apple keeps your locked-app list on your iPhone, even from us, and your check-in photo never leaves your
        phone. The <Link href="/privacy">privacy policy</Link> lists exactly what&rsquo;s stored.
      </>
    ),
  },
  {
    q: 'How do I delete my account?',
    a: (
      <>
        In the app, go to <strong>Profile → Settings → Delete account</strong>. It permanently removes your profile,
        photo, buddies, check-ins and nudges. Deleting the app alone doesn&rsquo;t delete your account.
      </>
    ),
  },
];

export default function SupportPage() {
  return (
    <>
      <Nav minimal />
      <main className="legal container">
        <p className="section-label">Support</p>
        <h1 className="legal-title">How can we help?</h1>
        <section className="legal-section">
          <p>
            Most questions are answered below. For anything else, email <a href={`mailto:${EMAIL}`}>{EMAIL}</a> and
            we&rsquo;ll get back to you.
          </p>
        </section>

        {QUESTIONS.map(({ q, a }) => (
          <section key={q} className="legal-section">
            <h2>{q}</h2>
            <p>{a}</p>
          </section>
        ))}

        <section className="legal-section">
          <h2>Still stuck?</h2>
          <p>
            Email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. Tell us your iPhone model, your iOS version and what you
            expected to happen. Screenshots help.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
