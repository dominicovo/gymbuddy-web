import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const alt = 'GymBuddy — locks Instagram, TikTok and games until you prove you hit the gym. Coming soon to the App Store.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Inter at the weights the card uses, from Google Fonts. Rendered once at
// build time; if the fetch fails the card falls back to the default face.
async function inter(weight: number): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(`https://fonts.googleapis.com/css2?family=Inter:wght@${weight}`).then((r) => r.text());
    const url = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
    return url ? await fetch(url).then((r) => r.arrayBuffer()) : null;
  } catch {
    return null;
  }
}

export default async function Image() {
  // The GYMBUDDY wordmark, inlined as a data URL.
  const wordmark = await readFile(join(process.cwd(), 'public/gymbuddy-wordmark.png'));
  const logo = `data:image/png;base64,${wordmark.toString('base64')}`;

  const weights = [500, 800] as const;
  const fonts = (await Promise.all(weights.map(inter)))
    .map((data, i) => data && { name: 'Inter', data, weight: weights[i], style: 'normal' as const })
    .filter((f) => f !== null);

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'radial-gradient(ellipse at 50% 0%, #1E1A3F 0%, #08070C 65%)',
          fontFamily: 'Inter, sans-serif',
          position: 'relative',
        }}
      >
        <img src={logo} alt="" width={386} height={44} style={{ marginBottom: '44px' }} />

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ fontSize: '84px', fontWeight: 800, color: '#F6F5FA', lineHeight: 1.05, letterSpacing: '-2px' }}>
            Lock your distractions.
          </span>
          <span style={{ fontSize: '84px', fontWeight: 800, color: '#8B84F0', lineHeight: 1.05, letterSpacing: '-2px' }}>
            Unlock them at the gym.
          </span>
        </div>

        <p
          style={{
            color: 'rgba(246,245,250,0.7)',
            fontSize: '28px',
            fontWeight: 500,
            textAlign: 'center',
            maxWidth: '860px',
            marginTop: '28px',
            lineHeight: 1.4,
          }}
        >
          The iPhone app that locks Instagram, TikTok and games on your gym days until you check in.
        </p>

        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            fontSize: '22px',
            fontWeight: 500,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: '#8B84F0',
              background: 'rgba(139,132,240,0.12)',
              border: '1px solid rgba(139,132,240,0.35)',
              borderRadius: '100px',
              padding: '8px 20px',
            }}
          >
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#8B84F0', display: 'flex' }} />
            Coming soon to the App Store
          </div>
          <span style={{ color: 'rgba(246,245,250,0.6)' }}>gymbuddy.live</span>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
