// The GYMBUDDY wordmark — the same cut-out the iOS app uses
// (assets/brand/gymbuddy-wordmark.png there, 1464×167).
const ASPECT = 1464 / 167;

export default function Logo({ height = 20 }: { height?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- a small static PNG; next/image adds nothing here
    <img src="/gymbuddy-wordmark.png" alt="GymBuddy" width={Math.round(height * ASPECT)} height={height} className="logo" />
  );
}
