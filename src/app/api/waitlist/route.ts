import { NextResponse } from 'next/server';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;
  if (!url || !key) {
    console.error('Waitlist: SUPABASE_URL or SUPABASE_ANON_KEY is not set');
    return NextResponse.json({ detail: 'Signups are temporarily unavailable.' }, { status: 500 });
  }

  const body = await req.json().catch(() => null);
  const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : '';
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ detail: 'Please enter a valid email address.' }, { status: 400 });
  }

  const res = await fetch(`${url}/rest/v1/waitlist`, {
    method: 'POST',
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify({ email }),
  });

  // 409 = already on the list; treat it as success so we don't leak who signed up.
  if (res.ok || res.status === 409) {
    return NextResponse.json({ ok: true });
  }

  console.error('Waitlist insert failed', res.status, await res.text());
  return NextResponse.json({ detail: 'Something went wrong. Please try again.' }, { status: 502 });
}
