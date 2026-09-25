import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'GymBuddy — Lock Distractions. Earn Your Freedom.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  // The GYMBUDDY wordmark, inlined for the edge renderer.
  const logo = await fetch(new URL('../../public/gymbuddy-wordmark.png', import.meta.url)).then((r) => r.arrayBuffer());

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
          background: '#08070C',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'sans-serif',
        }}
      >

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(139,132,240,0.12)',
            border: '1px solid rgba(139,132,240,0.35)',
            borderRadius: '100px',
            padding: '8px 20px',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#8B84F0',
              display: 'flex',
            }}
          />
          <span style={{ color: '#8B84F0', fontSize: '18px', fontWeight: 600 }}>
            Coming to the App Store
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0px',
          }}
        >
          <span
            style={{
              fontSize: '80px',
              fontWeight: 900,
              color: '#F6F5FA',
              lineHeight: 1.1,
              textAlign: 'center',
            }}
          >
            Lock Distractions.
          </span>
          <span
            style={{
              fontSize: '80px',
              fontWeight: 900,
              lineHeight: 1.1,
              textAlign: 'center',
              color: '#8B84F0',
            }}
          >
            Earn Your Freedom.
          </span>
        </div>

        {/* Sub-description */}
        <p
          style={{
            color: 'rgba(255,255,255,0.65)',
            fontSize: '24px',
            fontWeight: 400,
            textAlign: 'center',
            maxWidth: '760px',
            marginTop: '24px',
            lineHeight: 1.5,
          }}
        >
          Locks Instagram, TikTok & games until you physically prove you hit the gym.
        </p>

        {/* Bottom brand row */}
        <div
          style={{
            position: 'absolute',
            bottom: '36px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <img src={logo as unknown as string} alt="" width={193} height={22} />
          <span style={{ color: 'rgba(255,255,255,0.62)', fontSize: '20px', fontWeight: 600 }}>
            gymbuddy.live
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
