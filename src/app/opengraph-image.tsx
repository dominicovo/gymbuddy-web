import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'GymBuddy — Lock Distractions. Earn Your Freedom.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
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
          background: '#0A0A0A',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Background gradient blobs */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            left: '-80px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(255,107,53,0.35) 0%, transparent 70%)',
            filter: 'blur(60px)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-100px',
            right: '-80px',
            width: '520px',
            height: '520px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(191,90,242,0.35) 0%, transparent 70%)',
            filter: 'blur(60px)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '55%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(10,132,255,0.20) 0%, transparent 70%)',
            filter: 'blur(50px)',
            display: 'flex',
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255,107,53,0.12)',
            border: '1px solid rgba(255,107,53,0.35)',
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
              background: '#FF6B35',
              display: 'flex',
            }}
          />
          <span style={{ color: '#FF6B35', fontSize: '18px', fontWeight: 600 }}>
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
              color: '#FFFFFF',
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
              background: 'linear-gradient(135deg, #FF6B35 0%, #BF5AF2 50%, #0A84FF 100%)',
              backgroundClip: 'text',
              color: 'transparent',
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
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #FF6B35, #BF5AF2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ color: '#fff', fontSize: '20px', fontWeight: 900 }}>G</span>
          </div>
          <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '20px', fontWeight: 600 }}>
            gymbuddy.app
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
