import type { Metadata } from 'next';
import Logo from '@/components/Logo';
import { notFound } from 'next/navigation';
import styles from './page.module.css';
import Link from 'next/link';

// Where a GymBuddy pair link lands when the app can't take over — it isn't
// installed yet, or the link was opened on a computer. On an iPhone with the
// app installed, the universal link opens the app directly instead.

type Props = { params: Promise<{ code: string }> };

async function codeFrom(params: Props['params']): Promise<string> {
  const { code } = await params;
  if (!/^\d{4}$/.test(code)) notFound();
  return code;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  await codeFrom(params);
  const title = 'Be my gym buddy';
  const description = "Pair up on GymBuddy and you'll see each other's check-ins and streaks. No skipping unnoticed.";
  return {
    title,
    description,
    openGraph: { title: `${title} | GymBuddy`, description },
    twitter: { title: `${title} | GymBuddy`, description },
    // Every code is a personal invite — keep them out of search results.
    robots: { index: false, follow: false },
  };
}

export default async function PairPage({ params }: Props) {
  const code = await codeFrom(params);
  const digits = code.split('');

  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <Link href="/" className={styles.logo}>
          <Logo />
        </Link>

        <p className="section-label">You&rsquo;re invited</p>
        <h1 className={styles.title}>
          Be my <span className="text-accent">gym buddy</span>
        </h1>
        <p className={styles.lede}>
          Pair up and you&rsquo;ll each see the other&rsquo;s check-ins and streak. Never your apps or where you are.
        </p>

        <p className={styles.codeLabel}>Pair code</p>
        <div className={styles.code} aria-label={`Pair code ${digits.join(' ')}`}>
          {digits.map((digit, i) => (
            <span key={i} className={styles.digit}>
              {digit}
            </span>
          ))}
        </div>

        <a className={`btn btn-primary btn-lg ${styles.cta}`} href={`gymbuddy://b/${code}`}>
          Open in GymBuddy
        </a>
        <p className={styles.hint}>
          Or in the app: <strong>Buddies</strong> → <strong>Add</strong> → <strong>Enter their code</strong>
        </p>

        <div className={styles.divider} />

        <p className={styles.noApp}>Don&rsquo;t have GymBuddy yet?</p>
        <Link className={`btn btn-ghost btn-lg ${styles.cta}`} href="/#waitlist">
          Get early access
        </Link>
      </div>
    </main>
  );
}
